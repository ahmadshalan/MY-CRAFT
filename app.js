'use strict';

let myPic=document.getElementById('pics');
let pic1= document.getElementById('pic1')

myPic.addEventListener('click',view);

function view(event){

    event.preventDefault();

   if (event.target.id ==='pic1'){

    myPic.src=pic1.src;
   }
}