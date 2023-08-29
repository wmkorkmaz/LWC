import { LightningElement } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class DeleteCase extends LightningElement {

    recordId;
    changeHandler(event){
        this.recordId =event.target.value;
    }

    deleteRec(){
        deleteRecord(this.recordId)
        .then(result => {
            this.template.querySelector('form.caseForm').reset();
            this.successMessage();

        })
        .catch(error=>{
            this.errorMessage();

        })
    }

    successMessage(){
        const successMsg = new ShowToastEvent({
            title:  "Success",
            message:"Case silindi",
            variant: "success",
            mode: "sticky"
        });
        this.dispatchEvent(successMsg);


    }
    errorMessage(){

        const errorMsg = new ShowToastEvent({
            title: "Error",
            message: "Bir hata alindi",
            variant: "error",
            mode: "sticky"



        });
        this.dispatchEvent(errorMsg);

    }

     
     

}