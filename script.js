const scrollContainer = document.querySelector(".carousel-track");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

scrollContainer.addEventListener("wheel", (e) => {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
    scrollContainer.style.scrollBehavior = "auto"
});

nextButton.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 350;
});
prevButton.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 350;
});