var slideIndex = 0;
showSlides();

function showSlides() {
	var i;
	var slides = document.getElementsByClassName("Slides");
	var dots = document.getElementsByClassName("dot");
	for (i=0; i<slides.length; i++) {
		slides[i].style.display = "none";  
	}
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}    
	for (i=0; i<dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " active";
	setTimeout(showSlides, 5000);
}

function realtimeClock(){
	var clock = new Date();
	var hr = clock.getHours();
	var mn = clock.getMinutes();
	var sc = clock.getSeconds();
	hr=("0"+hr).slice(-2);
	mn=("0"+mn).slice(-2);
	sc=("0"+sc).slice(-2);
	document.getElementById('Clock').innerHTML = hr + ":" + mn + ":" + sc;
	var t=setTimeout(realtimeClock, 500);
}
