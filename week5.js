function ClickEvent(){    
var element = document.getElementById('circle');
var PositionLeft = element.offsetLeft ;
element.style.left = PositionLeft - 10 + 'px';


}


    function myLoadFunction(){
       
        document.addEventListener('keydown',ClickEvent );
        element.style.opacity = 1;
        
    }
    
    document.addEventListener('DOMContentLoaded', myLoadFunction);
    