
var slideIndex = 1;
//showSlides(slideIndex); was causing an error since slides had a length of 0 when it's called

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  //var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  /*
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  */
  slides[slideIndex-1].style.display = "block";
  //dots[slideIndex-1].className += " active";

}

function render() { 
  currentSlide(slideIndex);
  if(slideIndex<3){
    slideIndex++;
  }else{
    slideIndex=1;
  }
  setTimeout(render, 7000);

}


