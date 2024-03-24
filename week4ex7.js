
function DisplayValue(){

var element = document.getElementById('myinput');
var divs = document.getElementById('dix');

divs.firstChild.nodeValue=element.value;
}
function myLoadFunction(){
    var element = document.getElementById('mybutton');
    element.addEventListener('click',DisplayValue );

    
}

document.addEventListener('DOMContentLoaded', myLoadFunction);


