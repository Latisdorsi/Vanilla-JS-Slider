window.onload = function(){
	
	function e(eel) { //eel = element in question when someone uses e('ElementName'). You can use anything here
    return document.getElementById(eel); //The above e can be changed too, maybe to a dollar sign?
	}
	
	var slider = e('slider'), //Slider
	var sliderContent = e('slider-content')
	sliderItems = slider.getElementsByTagName('img'),  //Array of Slider Items
	noOfSliderItems = sliderItems.length, 
	move, n = 0, //Determines The Slide No.
	imgWidth = (100 / noOfSliderItems) + "%";
	

	function sliderInit() {
    sliderContent.style.width = (noOfImages * 100) + "%"; //Adds 'width' using inline CSS.
    	for (var i = 0; i < noOfImages; i++) { // Loops through all available images
        	sliderImages[i].style.width = imgWidth; // Sets imgWidth as the width of each image in the slider
    	}
	}

	/*
	move = setInverval(function () {
		if (n < (noOfImages - 1) ) n++;
		else n = 0;
		
	}


	*/
}