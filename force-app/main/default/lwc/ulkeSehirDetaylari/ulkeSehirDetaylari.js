import { LightningElement } from 'lwc';

export default class UlkeSehirDetaylari extends LightningElement {

    ulke;
    sehir;
    unlu;

    handleUlke(event){
       this.ulke =event.target.value;


    }
    handleSehir(event){
        this.sehir =event.target.value;
        
    }
    neyUnlu(event){
        this.unlu =event.target.value;   
    }
    
}