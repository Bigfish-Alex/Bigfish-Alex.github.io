(function(){

	var button = document.getElementById('cn-button');
	var oSpan=document.getElementById('menuBtn');
    wrapper = document.getElementById('cn-wrapper');

    //open and close menu when the button is clicked
	var open = false;
	button.addEventListener('click', handler, false);

	function handler(){
	  if(!open){
	    oSpan.innerHTML = "-";
	    classie.add(wrapper, 'opened-nav');
	  }
	  else{
	    oSpan.innerHTML = "+";
		classie.remove(wrapper, 'opened-nav');
	  }
	  open = !open;
	}
	function closeWrapper(){
		classie.remove(wrapper, 'opened-nav');
	}

})();
