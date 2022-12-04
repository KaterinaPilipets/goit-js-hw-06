function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = document.querySelector("#controls");
const boxes = document.querySelector("#boxes");
controls
  .querySelector("[data-create]")
  .addEventListener("click", () =>
    createBoxes(controls.querySelector("input").value)
  );
controls
  .querySelector("[data-destroy]")
  .addEventListener("click", () => destroyBoxes());
function createBoxes(amount) {
  let addBoxes = [];
  for (let i = 1, size = 30; i <= amount; i++, size += 10) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.height = size + "px";
    box.style.width = size + "px";
    addBoxes.push(box);
  }
  boxes.append(...addBoxes);
  return;
}
function destroyBoxes() {
  while (boxes.firstChild) {
    boxes.firstChild.remove();
  }
}
