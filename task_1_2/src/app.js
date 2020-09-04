// firs section slider functionality

const slides = document.querySelectorAll(".slide");
let slideID = 0;

const dots = document.querySelectorAll(".dot");

const setCurrentSlide = (id) => {
  slides.forEach((slide) => {
    slide.classList.remove("active-slide");
  });

  slides[id].classList.add("active-slide");
};

const setCurrentDot = (id) => {
  dots.forEach((dot) => {
    dot.classList.remove("active-dot");
  });
  dots[id].classList.add("active-dot");
};

dots.forEach((dot, id) => {
  dot.addEventListener("click", () => {
    slideID = id;
    setCurrentSlide(slideID);
    setCurrentDot(slideID);
  });
});

// changing header background color on scroll

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    (document.documentElement.scrollTop > 400 && window.innerWidth > 768)
  ) {
    document.querySelector(".header").style.backgroundColor =
      "rgba(48, 4, 100, 0.75)";
  } else {
    document.querySelector(".header").style.backgroundColor = "transparent";
  }
}

// quote section slider functionality

const next = document.querySelector(".next"),
  prev = document.querySelector(".fa-chevron-left"),
  quotes = document.querySelectorAll(".quote-container"),
  avatars = document.querySelectorAll(".avatar");

let index = 2;

const activeSlide = (id) => {
  quotes.forEach((slide) => {
    slide.classList.remove("active-quote");
  });
  quotes[id].classList.add("active-quote");
  console.log(index);
};

const nextSlide = () => {
  if (index == quotes.length - 1) {
    index = 0;
    prepareActiveElement(index);
  } else {
    index++;
    prepareActiveElement(index);
  }
};

const prevSlide = () => {
  if (index == 0) {
    index = quotes.length - 1;
    prepareActiveElement(index);
  } else {
    index--;
    prepareActiveElement(index);
  }
};

const prepareActiveElement = (id) => {
  activeSlide(id);
  activeAvatar(id);
};

const activeAvatar = (id) => {
  avatars.forEach((avatar) => {
    avatar.classList.remove("active-avatar");
  });
  avatars[id].classList.add("active-avatar");
  console.log(index);
};

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
avatars.forEach((avatar, id) => {
  avatar.addEventListener("click", () => {
    index = id;
    prepareActiveElement(index);
    clearInterval(interval);
  });
});

const interval = setInterval(nextSlide, 10000);

// header nav modal

const modal = document.getElementById("myModal");

const btn = document.getElementById("menuBtn");

const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
