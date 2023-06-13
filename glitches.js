var toHighlight = document.getElementsByClassName("highlight");
setInterval(function(){ 
 	setTimeout(function(){for(i=0; i < toHighlight.length; i++) {toHighlight[i].style.fontFamily = 'one';
 		setTimeout(function(){for(i=0; i < toHighlight.length; i++) {toHighlight[i].style.fontFamily = 'two';
	 		setTimeout(function(){for(i=0; i < toHighlight.length; i++) {toHighlight[i].style.fontFamily = 'three';
	 			setTimeout(function(){for(i=0; i < toHighlight.length; i++) {toHighlight[i].style.fontFamily = 'gotham';}}, 100);
	 	}}, 50); 
	 }}, 50); 
 }}, 50);	
 }, 10000);
