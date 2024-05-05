const searchicon1= document.querySelector('#searchicon1');  //for tablet
const srchicon1= document.querySelector('#srchicon1');
const search1=document.querySelector('#searchinput1');
/*document.querySelector('#searchicon1') is a method used to select and retrieve an HTML element from the document using its CSS selector.
const searchicon1 =  declares a constant variable named searchicon1 and assigns the selected HTML element to it. 
This variable can then be used to access and manipulate the properties and contents of the selected element in JavaScript.*/

searchicon1.addEventListener('click',function(){
    search1.style.display='flex';
    searchicon1.style.display='none';
})

const searchicon2= document.querySelector('#searchicon2');  //for desktop
const srchicon2= document.querySelector('#srchicon2');
const search2=document.querySelector('#searchinput2');

searchicon2.addEventListener('click',function(){
    search2.style.display='flex';
    searchicon2.style.display='none';
})
    
const bar=document.querySelector('.fa-bars');
const cross=document.querySelector('#hdcross');
const headerbar=document.querySelector('.headerbar');

bar.addEventListener('click',function(){
    setTimeout(()=>{
        cross.style.display='block';
    },200);
    headerbar.style.right='0%';
})
/*setTimeout is a built-in JavaScript function that delays the execution of a function by a specified number of milliseconds. 
In this case, there's no delay specified, so the function inside setTimeout will be executed as soon as possible after the click event. */

cross.addEventListener('click',function(){
    cross.style.display='none';
    headerbar.style.right='-100%';
})