const showModal = (prop, elem) => {
  if (document.getElementById(prop).style.display != "block") {
    document.getElementById(prop).style.display = "block";
    elem.style.backgroundColor = "#00a00c";
    elem.style.color = "#222";
  } else {
    document.getElementById(prop).style.display = "none";
    elem.style.backgroundColor = "white";
    elem.style.color = "#00a00c";
  }
};

const infoButtons = document.getElementsByClassName("info-button");
const infoModals = document.getElementsByClassName("carousel-modal");

for (let index = 0; index < infoButtons.length; index++) {
  const element = infoButtons[index];
  const modal = infoModals[index];

  element.addEventListener("click", function () {
    if (modal.style.display != "block") {
      modal.style.display = "block";
      element.style.backgroundColor = "#00a00c";
      element.style.color = "#222";
    } else {
      modal.style.display = "none";
      element.style.backgroundColor = "white";
      element.style.color = "#00a00c";
    }
  });
}

const carousels = document.querySelectorAll(".main-carousel");

carousels.forEach((carousel) => {
  var flkty = new Flickity(carousel, {
    cellAlign: "left",
    contain: true,
    freeScroll: true,
    pageDots: false,
  });
  flkty.resize();
});

document.getElementById("pub-button").addEventListener(
  "click",
  function () {
    document.getElementById("videos").style.display = "none";
    document.getElementById("posters").style.display = "none";
    document.getElementById("publications").style.display = "block";

    const carousels = document.querySelectorAll(".main-carousel");

    carousels.forEach((carousel) => {
      var flkty = new Flickity(carousel, {
        cellAlign: "left",
        contain: true,
        freeScroll: true,
        pageDots: false,
      });
      flkty.resize();
    });
  },
  false
);

document.getElementById("vid-button").addEventListener(
  "click",
  function () {
    document.getElementById("publications").style.display = "none";
    document.getElementById("posters").style.display = "none";
    document.getElementById("videos").style.display = "block";

    const carousels = document.querySelectorAll(".main-carousel");

    carousels.forEach((carousel) => {
      var flkty = new Flickity(carousel, {
        cellAlign: "left",
        contain: true,
        freeScroll: true,
        pageDots: false,
      });
      flkty.resize();
    });
  },
  false
);

document.getElementById("pos-button").addEventListener(
  "click",
  function () {
    document.getElementById("videos").style.display = "none";
    document.getElementById("publications").style.display = "none";
    document.getElementById("posters").style.display = "block";

    const carousels = document.querySelectorAll(".main-carousel");

    carousels.forEach((carousel) => {
      var flkty = new Flickity(carousel, {
        cellAlign: "left",
        contain: true,
        freeScroll: true,
        pageDots: false,
      });
      flkty.resize();
    });
  },
  false
);

document.getElementById("publications").style.display = "none";
document.getElementById("videos").style.display = "none";
document.getElementById("posters").style.display = "none";
