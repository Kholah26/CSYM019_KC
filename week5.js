function ClickEvent(){

    setInterval( myIntervalFunction, 10); }

function myIntervalFunction(){
var element = document.getElementById('circle');
var circleOpacity = parseFloat(element.style.opacity);
element.style.opacity = circleOpacity - 0.01;


    }
    function myLoadFunction(){
        var element = document.getElementById('circle');
        element.addEventListener('click',ClickEvent );
        element.style.opacity = 1;
        
    }
    
    document.addEventListener('DOMContentLoaded', myLoadFunction);
    