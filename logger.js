
$(document).ready(function(){




//Handler for key press events
  document.onkeydown = function(evt) {
    evt = evt || window.event;
  
    	console.log(String.fromCharCode(evt.which));
   
};


// Handler for mouse click events
$('html').mousedown(function(event) {

	var mouseEvent;
    switch (event.which) {
        case 1:
            mouseEvent='Left Click';
            break;
        case 2:
            mouseEvent='Middle Click';
            break;
        case 3:
            mouseEvent='Right Click';
            break;
        default:
            mouseEvent='Unknown Click';
    }

    console.log(mouseEvent);
});

    
});
