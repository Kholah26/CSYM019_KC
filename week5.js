function ClickEvent(event) {
    
    if (event.keyCode==37) {
  var element = document.getElementById('circle');
  var PositionLeft =element.offsetLeft;
  element.style.left = PositionLeft - 1 + 'px';
    }
    if (event.keyCode==38) {
        var element = document.getElementById('circle');
        var PositionUp =element.offsetTop;
        element.style.top = PositionUp - 1 + 'px';
          }
          if (event.keyCode==39) {
            var element = document.getElementById('circle');
            var PositionRight =element.offsetLeft;
            element.style.left = PositionRight + 1 + 'px';
              }
              if (event.keyCode==40) {
                var element = document.getElementById('circle');
                var PositionDown =element.offsetTop;
                element.style.top = PositionDown + 1 + 'px';
                  }

}
    function myLoadFunction(){
       
        document.addEventListener('keydown',ClickEvent );
        
    }
    
    document.addEventListener('DOMContentLoaded', myLoadFunction);
    