function UpdateHeading(){

    var element = document.getElementById('ph');
element.firstChild.nodeValue='new heading';
}
function UpdateParagraph(){

var element = document.getElementById('pp');
element.firstChild.nodeValue='new paragraph text';
}


function myLoadFunction(){
    var element = document.getElementById('ph');
    element.addEventListener('mouseenter',UpdateHeading );

    var element = document.getElementById('pp');
    element.addEventListener('mouseenter',UpdateParagraph );
    
}

document.addEventListener('DOMContentLoaded', myLoadFunction);


