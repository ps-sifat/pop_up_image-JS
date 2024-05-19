// variable

const image = [...document.querySelectorAll(".image")];
const PopUp_layout = document.querySelector(".PopUp_layout");
const crossBtn = document.querySelector(".crossBtn");
const boroImg = document.querySelector(".boroImg");

image.forEach((oneImage) => {
  oneImage.addEventListener("click", (event) => {
    imageChanger(event.target.src);
    PopUp_layout.classList.add("active");
  });
});

crossBtn.addEventListener(`click`, () => {
  PopUp_layout.classList.remove("active");
});

// update image
function imageChanger(ImgUrl) {
  let boroImgUrl = ImgUrl.split("/").splice(6).join("/");
  boroImg.src = boroImgUrl;
}
