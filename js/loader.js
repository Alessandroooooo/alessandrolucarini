let imgLoad = document.getElementById("loader-img")
let imgNo = 0

let animation = setInterval(function () {
    imgLoad.src = "img/Animation/" + imgNo + ".jpg"

    if (imgNo >= 82) {
        imgNo = 0
    } else {

        imgNo++
    }

}, 50);


window.addEventListener("load", function () {
    document.getElementById("loader").style.display = "none";
    this.clearInterval(animation)
});
