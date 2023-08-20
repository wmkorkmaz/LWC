import { LightningElement } from 'lwc';

import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FIST_NAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName';
import ACCOUNT_ID_FIELD from '@salesforce/schema/Contact.AccountId';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';


export default class ViewContact extends LightningElement {
    showContent = true;
    recordId ="0037Q00000fO0hIQAS" ;
    objectName = CONTACT_OBJECT;
    fields = {
        fname: FIST_NAME_FIELD,
        lname: LAST_NAME_FIELD,
        accId: ACCOUNT_ID_FIELD,
        phone: PHONE_FIELD,
        email: EMAIL_FIELD,

    }
    
}