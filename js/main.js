const carousels = document.querySelectorAll(".main-carousel");

carousels.forEach((carousel) => {
  new Flickity(carousel, {
    cellAlign: "left",
    contain: true,
    freeScroll: true,
    pageDots: false,
  });
});

const clickity = (prop) => {
  console.log("foi");
  document.getElementById("publications").style.display = "none";
  document.getElementById("videos").style.display = "none";
  document.getElementById("posters").style.display = "none";
  document.getElementById(prop).style.display = "block";

  const carousels = document.querySelectorAll(".main-carousel");

  carousels.forEach((carousel) => {
    new Flickity(carousel, {
      cellAlign: "left",
      contain: true,
      freeScroll: true,
      pageDots: false,
    });
  });
};

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

document.getElementById("pub-button").addEventListener(
  "click",
  function () {
    document.getElementById("videos").style.display = "none";
    document.getElementById("posters").style.display = "none";
    document.getElementById("publications").style.display = "block";

    const carousels = document.querySelectorAll(".main-carousel");

    carousels.forEach((carousel) => {
      new Flickity(carousel, {
        cellAlign: "left",
        contain: true,
        freeScroll: true,
        pageDots: false,
      });
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
      new Flickity(carousel, {
        cellAlign: "left",
        contain: true,
        freeScroll: true,
        pageDots: false,
      });
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
      new Flickity(carousel, {
        cellAlign: "left",
        contain: true,
        freeScroll: true,
        pageDots: false,
      });
    });
  },
  false
);

document.getElementById("publications").style.display = "none";
document.getElementById("videos").style.display = "none";
document.getElementById("posters").style.display = "none";
