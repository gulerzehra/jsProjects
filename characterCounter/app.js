//inputa girilen değerin uzunluğunu p kısmına yazdırma

const textra = document.querySelector("#textInput");
const span = document.querySelector("#charCount");

function count(e) {
  console.log(e.type);
  console.log(e.target.value);
}

function run(e) {
  span.textContent = e.target.value.length;
  let length = e.target.value.length;
  console.log(length);
  if (parseInt(length) > 20) {
    span.style.color = "red";
    console.log("büyük");
    alert("Karakter sayısı 20'den fazla!");
  } else {
    console.log("çalışmıyor");
  }
}

textra.addEventListener("keyup", run);
