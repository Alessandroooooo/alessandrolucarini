let mouseX
let mouseY

let frame = document.getElementById("works")

let imgIndex = 1
let imageSrc = "./img/Animation/" + imgIndex + ".jpg"
let firstImg = true

let imgPos = [0, 0]
let distance

// frame.addEventListener("mousemove", (event) => {
//     mouseX = event.clientX
//     mouseY = event.clientY

//     if (!firstImg) {
//         distance = Math.sqrt(Math.pow((mouseX - (355 / 2) - imgPos[0]), 2) + Math.pow((mouseY - (270 / 2) - imgPos[1]), 2))

//         if (distance > 70) {
//             var img = document.createElement("img");
//             img.style.position = "absolute"
//             img.style.height = "270px"
//             img.style.width = "355px"
//             imgPos = [mouseX - (355 / 2), mouseY - (270 / 2)]

//             img.style.top = imgPos[1] + "px"
//             img.style.left = imgPos[0] + "px"
//             img.src = imageSrc

//             frame.appendChild(img)

//             if (imgIndex >= 318) {
//                 imgIndex = 1
//             }
//             imgIndex++
//             imageSrc = "./img/Animation/" + imgIndex + ".jpg"


//         }

//     }






//     firstImg = false


// });
