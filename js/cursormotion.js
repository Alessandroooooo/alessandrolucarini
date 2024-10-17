let mouseX
let mouseY

let frame = document.getElementById("motion")

let imgIndex = 1
let imgSize = [270, 355]
let imageSrc = "img/Animation/" + imgIndex + ".jpg"
let firstImg = true

let imgPos = [0, 0]
let distance

frame.addEventListener("mouseleave", () => { removeEventListener("mousemove", frame) })
frame.addEventListener("mousemove", (event) => {
    var rect = frame.getBoundingClientRect();
    console.log();

    if (event.clientX > rect.left) {
        mouseX = event.pageX - (imgSize[1] / 2)
        mouseY = event.pageY - (imgSize[0] / 2)

        if (!firstImg) {
            distance = Math.sqrt(Math.pow((mouseX - imgPos[0]), 2) + Math.pow((mouseY - imgPos[1]), 2))

            if (distance > 70) {
                var img = new Image(imgSize[1], imgSize[0]);
                var img = new Image(imgSize[1], imgSize[0]);
                img.style.position = "absolute"
                imgPos = [mouseX, mouseY]
                img.style.top = imgPos[1] + "px"
                img.style.left = imgPos[0] + "px"
                img.src = imageSrc
                img.style.opacity = 1

                frame.appendChild(img)

                if (imgIndex >= 82) {
                    imgIndex = 1
                }
                imgIndex++
                imageSrc = "img/Animation/" + imgIndex + ".jpg"

                disappear(img)
            }

        }
    }

    firstImg = false
})




var disappear = (img) => {
    setTimeout(() => {
        setInterval(function () {
            var opacity = img.style.opacity;
            if (opacity > 0) {
                opacity -= 0.1;
                img.style.opacity = opacity;
            } else {
                img.remove()
            }
        }, 50);


    }, 1000)
}
