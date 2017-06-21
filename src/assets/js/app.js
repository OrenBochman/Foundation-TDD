"use strict";

//globals
var controller;
$(document).foundation() ;
const dataSource = new DataSource() ;
console.log(dataSource.dat) ;

function setPageModule(location)
{
    switch(location){
        
        case "index":
            controller =new index();
            break;
        case "blog":
            controller =new blog();
            break;
            
        default:

            controller = new other();
            break;
    }

}


