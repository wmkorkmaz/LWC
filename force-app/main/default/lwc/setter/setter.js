import { LightningElement } from 'lwc';

export default class Setter extends LightningElement {

    name = "Cat";
    age = 2;
    newAge = 0;

    updateAge(event){
        this.newAge= event.target.value;


    }
    updateOrginalAge(){
        this.age1 =  this.newAge;
        
    }
    get age1(){
        return parsenInt(this.age) + 1;
    }

    set age1(value){
        if(value<0){
            alert ("Gecerli bir sayi giriniz");
            console.error("Gecersiz yas girildi");
            
        }
        else {
            this.age =value;
        }
        
    
    }
      
    }



