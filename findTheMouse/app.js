//bir box'a mouse diyicem sonra tıklanan kutu ile mouse eşitse kazandın yazacak.

const boxes = document.querySelectorAll(".box");
const randomIndex = Math.floor(Math.random() * boxes.length);

function mouse(e) {
  const clickedBox = e.target.getAttribute("data-id");
  if (clickedBox == randomIndex) {
    alert("Kazandın!");
  } else {
    alert("Kaybettin!");
  }
}

boxes.forEach((box) => {
  box.addEventListener("click", mouse);
});
