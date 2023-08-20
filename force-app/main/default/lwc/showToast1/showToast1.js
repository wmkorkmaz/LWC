import { LightningElement } from 'lwc';
import { ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class ShowToast1 extends LightningElement {
    showErrorToast(){
        const evt = new ShowToastEvent({
            title: 'Toast Error',
            message: 'Hata olustu',
            variant: 'error',
            mode: 'dismissible'
        
        });
        this.dispatchEvent(evt);

    }

    ShowSuccessToast(){

        const evt = new ShowToastEvent({
            title: 'Toast Success',
            message: 'Operasyon Basarili',
            variant: 'success',
            mode: 'dissmissible'

        });
        this.dispatchEvent(evt);

    }
    ShowWarningToast (){
        const evt = new ShowToastEvent({
            title: 'Toas Warning',
            message: 'Dikkat, problem olusabilir',
            variant: 'Warning',
            mode: 'dismissible'

        });
        this.dispatchEvent(evt);
    }

    ShowInfoToast (){
        const evt = new ShowToastEvent({
            title: 'Toas Info ',
            message: 'Operasyon, birazdan baslayacak',
            variant: 'Warning',
            mode: 'dismissible'

        });
        this.dispatchEvent(evt);
    }



}