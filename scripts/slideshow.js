let activeSlideIndex = 0;
let periodTime = 0;
let curInterval;

function timer() {
  const time = document.querySelector('#timer');
  if (time.value >= 1) {
    if (curInterval != null) {
      clearInterval(curInterval);
      curInterval = null;
    }
    periodTime = time.value;
    if (curInterval == null) {
      curInterval = setInterval(() => {
        showSlide(activeSlideIndex);
        activeSlideIndex++;
      }, periodTime * 1000);
    }
  }
}

function stopSlideshow() {
  clearInterval(curInterval);
  curInterval = null;
}

function plusSlides(n) {

  showSlide(activeSlideIndex += n);
}

function currentSlide(n) {
  showSlide(activeSlideIndex = n - 1);
}

function showSlide(n) {
  const slides = document.getElementsByClassName('my-slides');
  const dots = document.getElementsByClassName('dot');
  if (n > slides.length - 1) {
    activeSlideIndex = 0;
  }
  if (n < 0) {
    activeSlideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[activeSlideIndex].style.display = 'block';
  dots[activeSlideIndex].className += ' active';
}

showSlide(activeSlideIndex);
