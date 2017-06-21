"use strict";

class DataSource{

    constructor(amount=3){
        console.log("data");
        this.self=this;
        this.gen(amount);
    }

    gen(amount){
        let data = [];
        
        for(let counter=0;counter++;counter<amount){
            
            datum =  Object();
            datum['name']     = faker.name();
            datum['email']    = faker.email(datum['name']);
            datum['amount']   = faker.amount();
            datum['location'] = faker.location();
            console.log(datum);
            data.push(datum);        
        }
        self.dat=data;
     }   
}

