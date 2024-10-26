const carousels = document.querySelectorAll(".main-carousel");

const workFunction = (workName) => {
  console.log(workName)
  works = document.getElementsByClassName("work");
  for (i = 0; i < works.length; i++) {
    works[i].style.display = "none";
  }

  document.getElementById(workName).style.display = "block";

  carousels.forEach((carousel) => {
    var flkty = new Flickity(carousel, {
      cellAlign: "left",
      contain: true,
      freeScroll: true,
      pageDots: false,
    });
    flkty.resize();
  });
}


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