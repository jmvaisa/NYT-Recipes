var e = document.getElementById("appContainer");
	e.remove();

setTimeout(function(){
    var a = document.getElementsByClassName("nytc---modal-window---noScroll");
	for(i=0; i<a.length; i++){
		a[i].style.overflow = "auto";
	}
	
	var b = document.getElementsByClassName("nytc---cardbase---isDisabled");
	for(i=0; i<b.length; i++){
		b[i].style.opacity = "1";
	}
	var c = document.getElementsByClassName("nytc---cardbase---isDisabledImage");
	for(i=0; i<c.length; i++){
		c[i].style.opacity = "1";
	}
}, 2000);

