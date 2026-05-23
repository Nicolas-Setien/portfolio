topImg = document.querySelectorAll(".top-img");
midImg = document.querySelectorAll(".mid-img");
lowImg = document.querySelectorAll(".low-img");

topImg.title = "Click me to see more!";
// topImg.style.transform = "rotate(80deg)";
console.log(topImg);

for (var i in topImg) {
    if (topImg[i] instanceof Node) {
        topImg[i].title = "Click me to see more!";
        topImg[i].addEventListener("click", shufflePhotosTop.bind(this, i));
    }
}

for (var i in midImg) {
    if (midImg[i] instanceof Node) {
        midImg[i].addEventListener("click", shufflePhotosMid.bind(this, i));
    }
}

for (var i in lowImg) {
    if (lowImg[i] instanceof Node) {
        lowImg[i].addEventListener("click", shufflePhotosLow.bind(this, i));
    }
}

function shufflePhotosTop(index){
    midImg[index].style.zIndex = "0";
    midImg[index].style.transform = "rotate(0deg)";

    lowImg[index].style.zIndex = "-1";
    lowImg[index].style.transform =
        `rotate(${Math.floor(Math.random() * 10) - 5}deg)`;

    topImg[index].style.zIndex = "-2";
    topImg[index].style.transform = 
        `rotate(${Math.floor(Math.random() * 10) - 5}deg)`;
}

function shufflePhotosMid(index){
    lowImg[index].style.zIndex = "0";
    lowImg[index].style.transform = "rotate(0deg)";

    topImg[index].style.zIndex = "-1";
    topImg[index].style.transform =
        `rotate(${Math.floor(Math.random() * 10) - 5}deg)`;

    midImg[index].style.zIndex = "-2";
    midImg[index].style.transform = 
        `rotate(${Math.floor(Math.random() * 10) - 5}deg)`;
}

function shufflePhotosLow(index){
    topImg[index].style.zIndex = "0";
    topImg[index].style.transform = "rotate(0deg)";

    midImg[index].style.zIndex = "-1";
    midImg[index].style.transform =
        `rotate(${Math.floor(Math.random() * 10) - 5}deg)`;

    lowImg[index].style.zIndex = "-2";
    lowImg[index].style.transform = 
        `rotate(${Math.floor(Math.random() * 10) - 5}deg)`;
}
/*
topImg.addEventListener("click", () => {
    midImg.style.zIndex = "0";
    midImg.style.transform = "rotate(0deg)";

    lowImg.style.zIndex = "-1";
    lowImg.style.transform = "rotate(5deg)";

    topImg.style.zIndex = "-2";
    topImg.style.transform = "rotate(-4deg)";
});
*/