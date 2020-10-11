const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * number);
}

function bgChange() {
  const rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
}

//   btn.onclick = bgChange;
//   btn.onfocus = bgChange;
//   btn.onblur = bgChange;
//   btn.ondblclick = bgChange;
//   btn.onkeypress = bgChange;
//   btn.onkeyup = bgChange;
//   btn.onkeydown = bgChange;
//   btn.onmousemove = bgChange;
//   btn.onmouseout = bgChange;

btn.addEventListener('click', bgChange);