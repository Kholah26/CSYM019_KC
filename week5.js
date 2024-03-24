function ClickEvent(event) {
    console.log(event.keyCode);
  
}
    function myLoadFunction(){
       
        document.addEventListener('keydown',ClickEvent );
        
    }
    
    document.addEventListener('DOMContentLoaded', myLoadFunction);
    