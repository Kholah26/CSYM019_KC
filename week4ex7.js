
function DisplayValue(){

var element = document.getElementById('myinput');
var divelement=document.getElementById('div');

divelement.firstChild.nodeValue = element.value;
}
function myLoadFunction(){
    var element = document.getElementById('mybutton');
    element.addEventListener('click',DisplayValue );

    
}

document.addEventListener('DOMContentLoaded', myLoadFunction);


