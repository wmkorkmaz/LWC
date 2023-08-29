import { LightningElement } from 'lwc';

export default class GetterPractice extends LightningElement {

    num1 = 10;
    num2 = 5; 
    index= 0;
    result = this.num1 + this.num2;
    isimListesi =["Ali", " Veli ","Ayse", "Fatma","Huseyin"];


    get toplama (){
        return this.num1 + this.num2;


    }

    get cikarma (){
        return this.num1 - this.num2;

    }
    get carpma (){
        return this.num1 * this.num2;
        

    }
    get bolme (){
        return this.num1 / this.num2;
        

    }

    get ilkIsim(){
        return this.isimListesi[0];
    }

    get sonIsim(){
        return this.isimListesi[this.isimListesi.length-1];
    }

    handleBlur(event){
        this.index = event.target.value;


    }
    get girilenIndex(){
        if(this.index>=0 && this.index<this.isimListesi.length){
            return this.isimListesi[this.index];

        }else{
            alert("Luften 0-4 arasi bir sayi giriniz")

        } 

    }



}