function ClickEvent(){
var element = document.getElementById('circle')
    element.style.backgroundColor = 'blue';
    element.style.opacity = 0.5;

    }
    function myLoadFunction(){
        var element = document.getElementById('circle');
        element.addEventListener('click',ClickEvent );
    
        
    }
    
    document.addEventListener('DOMContentLoaded', myLoadFunction);
    