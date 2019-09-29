function FlipFuction(){
		document.getElementById('backs').style.transform = 'rotateX(180deg)'
		document.getElementById('fronts').style.transform = 'rotateX(0deg)'
	}
	function FlipToRegister(){
		document.getElementById('fronts').style.transform = 'rotateX(-180deg)'
		document.getElementById('backs').style.transform = 'rotateX(0deg)'
	}

	//The functions responsible for flipping the card
