var interval = 0;

function ClickEvent(event) {

    clearInterval(interval);
    
    if (event.keyCode==37) {
       interval= setInterval(moveDown,10);}

    if (event.keyCode==38) {
        interval =setInterval(moveUP,10);}
        
     if (event.keyCode==39) {
         interval =   setInterval(moveLeft,10);}

    if (event.keyCode==40) {interval = setInterval(moveRight,10);}
                

}

function moveRight(){
    var element = document.getElementById('circle');
    var PositionLeft =element.offsetLeft;
    element.style.left = PositionLeft - 1 + 'px';
      }
    function moveUP(){
        var element = document.getElementById('circle');
        var PositionUp =element.offsetTop;
        element.style.top = PositionUp - 1 + 'px';
        }

        function moveLeft(){
            var element = document.getElementById('circle');
            var PositionRight =element.offsetLeft;
            element.style.left = PositionRight + 1 + 'px';
              }
              function moveDown(){
                var element = document.getElementById('circle');
                var PositionDown =element.offsetTop;
                element.style.top = PositionDown + 1 + 'px';
                  }


    function myLoadFunction(){
       
        document.addEventListener('keydown',ClickEvent );
        
    }
    
    document.addEventListener('DOMContentLoaded', myLoadFunction);
    