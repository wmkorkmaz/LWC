import { LightningElement } from 'lwc';

export default class CreateAccount extends LightningElement {

    successMessage;

    successHandler(event){
        this.successMessage = " Yeni bir kayit basariyla olusturuldu: " + event.detail.id;

    }

}