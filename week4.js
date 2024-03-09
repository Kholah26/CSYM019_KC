function myLoadFunction(){

    var element = document.getElementById('pageheading');

    element.firstChild.nodeValue = 'new heading';

    var element = document.getElementById('pageparagraph');

    element.firstChild.nodeValue = 'new paragraph';
}

document.addEventListener('click', myLoadFunction);


