import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ShowToast2 extends LightningElement {
    _title =  'Ornek Baslik';
    message = 'Ornek Mesaj';
    variant = 'error';
    varianOptions = [
        {label :'error', value:'error'},
        {label: 'warning', value: 'warning' },
        {label: 'success', value: 'success'},
        {label:'info', value: 'info'}
        
    ];
    titleChange(event){
        this._title = event.target.value;


    }
    messageChange(event){
        this.message= event.target.value;


    }
    variatChange(event){

        this.variant=event.target.value;
    }

    ShowNotification (){
        const evt = new ShowNotification({
            title : this._title,
            message: this.message,
            variant: this.variant,

        });
        this.dispatchEvent(evt);
        



    }


}