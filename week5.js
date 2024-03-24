function ClickEvent(){

    alert('The circle is clicked');
    }
    function myLoadFunction(){
        var element = document.getElementById('circle');
        element.addEventListener('click',ClickEvent );
    
        
    }
    
    document.addEventListener('DOMContentLoaded', myLoadFunction);
    