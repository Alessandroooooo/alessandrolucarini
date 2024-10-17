let imgLoad = document.getElementById("loader-img")

let animation = setInterval(function () {
    imgLoad.src = "./img/Animation/" + imgIndex + ".jpg"

    if (imgIndex >= 82) {
        imgIndex = 0
    } else {

        imgIndex++
    }

}, 50);


window.addEventListener("load", function () {
    document.getElementById("loader").style.display = "none";
    this.clearInterval(animation)
});
