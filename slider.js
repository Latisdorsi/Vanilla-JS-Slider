window.onload = function() {
    //Slider Module

    var slider = (function() {
        //CacheDom
        var slider = document.getElementById('carousel'), //Slider
            sliderContent = document.getElementsByTagName('ul')[0], //The First Array Within The Document
	        sliderImages = slider.getElementsByTagName('li');
        //Declare Variables
        var noOfSliderItems = sliderImages.length,
            n = 0, //Determines The Slide No.
            imgWidth = (100 / noOfSliderItems) + "%";
	        fps = 15, //Sets Interval Time For Animation
			startTime = null;

        _render();
        setAnimation();
        function _render() {
            sliderContent.style.width = (noOfSliderItems * 100) + "%"; //Adds 'width' using inline CSS.
            for (var i = 0; i < noOfSliderItems; i++) { // Loops through all available images
                sliderImages[i].style.width = imgWidth; // Sets imgWidth as the width of each image in the slider
            }
            sliderContent.style.marginLeft = '-'+n+'00%';

        }

        function setAnimation() {
 			setTimeout(function() {
            requestAnimationFrame(setAnimation);
             // Drawing code goes here
        	if( n < (noOfSliderItems -1)) {
        	n++;
             _render();
         	}
            else { 
            n = 0;
            _render();
        	}
        	
   			}, 5000);
        }

    })();
}