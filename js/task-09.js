function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const thisBody = document.querySelector("body");
thisBody.querySelector(".change-color").addEventListener("click", () => {
  const bgColor = getRandomHexColor();
  thisBody.querySelector(".color").textContent = bgColor;
  thisBody.style.backgroundColor = bgColor;
});
