import { LightningElement } from 'lwc';
import { ShowToastEvent }  from 'lightning/platformShowToastEvent';


import Contact from '@salesforce/schema/Contact';
import FirstName from '@salesforce/schema/Contact.FirstName';
import LastName from '@salesforce/schema/Contact.LastName';
import AccountId from '@salesforce/schema/Contact.AccountId';
import Email from '@salesforce/schema/Contact.Email';
import Phone from '@salesforce/schema/Contact.Phone';
import Department from '@salesforce/schema/Contact.Department';

export default class UpdateContact extends LightningElement {
    recordId = "0037Q00000fO0hRQAS";
    objectName = Contact;
    fields =[FirstName, LastName, AccountId, Email, Phone, Department];

    onsuccess (){
        const successMsg = new ShowToastEvent({ 
             title : 'Success',
             message: 'Contact update edidi',
             variant: 'success',
             mode: 'sticky'

        });
        this.dispatchEvent(successMsg);
    }


}