let bottomslide = 0;
botSlides();

function botSlides() {
  let i;
  let newSlides = document.getElementsByClassName("bottom");

  for (i = 0; i < newSlides.length; i++) {
    newSlides[i].style.display = "none";
  }
  bottomslide++;
  if (bottomslide > newSlides.length) {
    bottomslide = 1;
  }
  newSlides[bottomslide - 1].style.display = "block";

  setTimeout(botSlides, 2500);
}

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// //////////////////////////////////////////////////////////////////////////////////////////////

function firstAnimate(obj, start, end, duration) {
  let firstTimestamp = null;
  const firststep = (timestamp) => {
    if (!firstTimestamp) firstTimestamp = timestamp;
    const firstProgress = Math.min((timestamp - firstTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(firstProgress * (end - start) + start);
    if (firstProgress < 1) {
      window.requestAnimationFrame(firststep);
    }
  };
  window.requestAnimationFrame(firststep);
}

const first = document.getElementById("first");
firstAnimate(first, 0, 5784, 2000);

function secondAnimate(obj, start, end, duration) {
  let secondtimestamp = null;
  const secondstep = (timestamp) => {
    if (!secondtimestamp) secondtimestamp = timestamp;
    const secondprogress = Math.min(
      (timestamp - secondtimestamp) / duration,
      1
    );
    obj.innerHTML = Math.floor(secondprogress * (end - start) + start);
    if (secondprogress < 1) {
      window.requestAnimationFrame(secondstep);
    }
  };
  window.requestAnimationFrame(secondstep);
}

const second = document.getElementById("second");
secondAnimate(second, 0, 2300, 2000);

function thirdAnimate(obj, start, end, duration) {
  let thirdtimestamp = null;
  const thirdStep = (timestamp) => {
    if (!thirdtimestamp) thirdtimestamp = timestamp;
    const thirdProgress = Math.min((timestamp - thirdtimestamp) / duration, 1);
    obj.innerHTML = Math.floor(thirdProgress * (end - start) + start);
    if (thirdProgress < 1) {
      window.requestAnimationFrame(thirdStep);
    }
  };
  window.requestAnimationFrame(thirdStep);
}

const third = document.getElementById("third");
thirdAnimate(third, 0, 24, 2000);

function fourthAnimate(obj, start, end, duration) {
  let fourthTimeStamp = null;
  const fourthStep = (timestamp) => {
    if (!fourthTimeStamp) fourthTimeStamp = timestamp;
    const fourthProgress = Math.min(
      (timestamp - fourthTimeStamp) / duration,
      1
    );
    obj.innerHTML = Math.floor(fourthProgress * (end - start) + start);
    if (fourthProgress < 1) {
      window.requestAnimationFrame(fourthStep);
    }
  };
  window.requestAnimationFrame(fourthStep);
}

const fourth = document.getElementById("fourth");
fourthAnimate(fourth, 0, 100, 2000);
