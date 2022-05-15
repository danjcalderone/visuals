// let slideIndex = 0;
// showSlides();



function addSlides(path,maxNum) {
  let slideDecks = document.getElementById("slide-container1");
  var node = slideDecks.createElement('p');
  for (let i = 0; i < maxNum; i++) {
    var newNode = document.createElement('p');
    var htmlText = 'yo'
  //     //
  //     // "<div class="mySlides fade">
  //     //   <div class="numbertext">1 / 3</div>
  //     //   <img src="./img1.png" style="width:100%">
  //     // <div class="text">Caption Text</div>
  //     // </div>"
      newNode.appendChild(document.createTextNode(htmlText));
      node.appendChild(newNode);
    }
  }

function loopSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


let slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var path = "/dcmath/figs/slides/KALMAN/KALMAN1024_"
addSlides(path,10)




//
//
//
// function addSlideDecks() {
//   let i;
//   let slideDecks = document.getElementsByClassName("slide-container");
//   for (let i = 0; i < slideDecks.length; i++) {
//     let path = slideDecks[i].pathtofile
//     let maxNum = slideDecks[i].maxNum
//     addSlides(path,maxNum)
//   }
//
//
//
//   }
//






//
// let slideIndex = [1,1];
// /* Class the members of each slideshow group with different CSS classes */
// let slideId = ["mySlides1", "mySlides2"]
// showSlides(1, 0);
// showSlides(1, 1);
//
// function plusSlides(n, no) {
//   showSlides(slideIndex[no] += n, no);
// }
//
// function showSlides(n, no) {
//   let i;
//   let x = document.getElementsByClassName(slideId[no]);
//   if (n > x.length) {slideIndex[no] = 1}
//   if (n < 1) {slideIndex[no] = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   x[slideIndex[no]-1].style.display = "block";
// }
