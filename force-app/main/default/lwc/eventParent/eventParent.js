import { LightningElement } from 'lwc';

export default class EventParent extends LightningElement {
    clickedButtonLabel;

    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
    }
    handleClick1(){
        alert("Childdaki butona tiklandi");
    }

    handleClick2(){
        alert("Handle 2 fonksiyonu calisti");
    }
    renderedCallback(){
        this.template.querySelector("c-event-child1").addEventListener("click".this.handleClick2);

    }

}
