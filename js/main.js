

// Fadein-Right
let elementsArrayRifht = document.querySelectorAll(".fadein-right");
console.log(elementsArrayRifht);
window.addEventListener('scroll', fadeIn);
function fadeIn() {
  for (var i = 0; i < elementsArrayRifht.length; i++) {
    var elem = elementsArrayRifht[i]
    var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
    if (distInView < 0) {
      elem.classList.add("inView");
    } else {
      elem.classList.remove("inView");
    }
  }
}
fadeIn();

// Fadein-Left
let elementsArrayLeft = document.querySelectorAll(".fadein-left");
console.log(elementsArrayLeft);
window.addEventListener('scroll', fadeInRight);
function fadeInRight() {
  for (var i = 0; i < elementsArrayLeft.length; i++) {
    var elem = elementsArrayLeft[i]
    var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
    if (distInView < 0) {
      elem.classList.add("inView");
    } else {
      elem.classList.remove("inView");
    }
  }
}
fadeInRight();

document.getElementById('next').onclick = function () {
  const widthItem = document.querySelector('.item').offsetWidth;
  document.getElementById('formList').scrollLeft += widthItem;
}
document.getElementById('prev').onclick = function () {
  const widthItem = document.querySelector('.item').offsetWidth;
  document.getElementById('formList').scrollLeft -= widthItem;
}
