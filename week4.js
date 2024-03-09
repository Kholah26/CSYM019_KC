function myLoadFunction(){

    var element = document.getElementById('pageheading');

    element.firstChild.nodeValue = 'new heading';
}

document.addEventListener('DOMContentLoaded', myLoadFunction);


