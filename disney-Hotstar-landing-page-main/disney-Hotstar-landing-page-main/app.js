const carousel = document.querySelector('.carousel');
let slider = [];
let slideIndex = 0;

const createSlide = () => {

  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  let slide = document.createElement('div');
  let imgElement = document.createElement('img');
  let content = document.createElement('div');
  let h1 = document.createElement('h1');
  let h4 = document.createElement('h4');
  let p = document.createElement('p');

  imgElement.appendChild(document.createTextNode(''));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  h4.appendChild(document.createTextNode(movies[slideIndex].type));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(h4);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  imgElement.src = movies[slideIndex].image;
  slideIndex=slideIndex+1;

  slide.className = 'slider';
  content.className = 'slide-content';
  h1.className = 'movie-title';
  h4.className = 'movie-type';
  p.className = 'movie-des';
  slider.push(slide);

  if (slider.length) {
    slider[0].style.marginLeft = `calc(-${100 * (slider.length - 2)}% - ${30 * (slider.length - 2)}px)`;
  }
}

for (let i = 0; i < 4; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 6000);

const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    })
})

let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    })

    preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    })
})