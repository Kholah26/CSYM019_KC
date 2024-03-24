
function DisplayValue(){

var element = document.getElementById('myinput');
alert(element.value);

}


function myLoadFunction(){
    var element = document.getElementById('mybutton');
    element.addEventListener('click',DisplayValue );

    
}

document.addEventListener('DOMContentLoaded', myLoadFunction);


