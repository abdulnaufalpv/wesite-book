const container = document.querySelector('.images');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

let counter = 0;

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

function nextSlide() {
  counter++;
  if(counter === 1068) counter = 0;
  container.style.backgroundImage = `url(images/a_${counter}.jpg)`;
}

function prevSlide() {
  counter--;
  if(counter === -1) counter = 1068;
  container.style.backgroundImage = `url(images/a_${counter}.jpg)`;
}



