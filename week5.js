function ClickEvent(event) {
    
    if (event.keyCode==37) {
  var element = document.getElementById('circle');
  var PositionLeft =element.offsetLeft;
  element.style.left = PositionLeft - 10 + 'px';
    }
  else 
  {
    console.log(event.keyCode);
  }

}
    function myLoadFunction(){
       
        document.addEventListener('keydown',ClickEvent );
        
    }
    
    document.addEventListener('DOMContentLoaded', myLoadFunction);
    