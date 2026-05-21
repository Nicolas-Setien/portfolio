topImg = document.querySelector(".top-img");
midImg = document.querySelector(".mid-img");
lowImg = document.querySelector(".low-img");
topImg.addEventListener("click", () => {
    midImg.style.zIndex = "0";
    midImg.style.transform = "rotate(0deg)";

    lowImg.style.zIndex = "-1";
    lowImg.style.transform = "rotate(5deg)";

    topImg.style.zIndex = "-2";
    topImg.style.transform = "rotate(-4deg)";
});

midImg.addEventListener("click", () => {
    lowImg.style.zIndex = "0";
    lowImg.style.transform = "rotate(0deg)";

    topImg.style.zIndex = "-1";
    topImg.style.transform = "rotate(3deg)";

    midImg.style.zIndex = "-2";
    midImg.style.transform = "rotate(-2deg)";
});

lowImg.addEventListener("click", () => {
    topImg.style.zIndex = "0";
    topImg.style.transform = "rotate(0deg)";

    midImg.style.zIndex = "-1";
    midImg.style.transform = "rotate(4deg)";

    lowImg.style.zIndex = "-2";
    lowImg.style.transform = "rotate(-6deg)";

});