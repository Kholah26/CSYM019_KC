function ClickEvent(){
var element = document.getElementById('circle')
    element.style.backgroundColor = 'blue';
    }
    function myLoadFunction(){
        var element = document.getElementById('circle');
        element.addEventListener('click',ClickEvent );
    
        
    }
    
    document.addEventListener('DOMContentLoaded', myLoadFunction);
    