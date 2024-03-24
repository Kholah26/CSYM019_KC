
function DisplayValue(){

var element = document.getElementById('myinput');
var divs=document.getElementById('div');

divs.firstChild.nodeValue = element.value;
}
function myLoadFunction(){
    var element = document.getElementById('mybutton');
    element.addEventListener('keyup',DisplayValue );

    
}

document.addEventListener('DOMContentLoaded', myLoadFunction);


