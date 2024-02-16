const body = document.body;
const bubbleHtml = document.createElement("div");
bubbleHtml.id = "bubblesDiv";

const max = 33;

function load() {
  const r = Math.random() * max * 1000;
  const div = document.createElement("div");
  const dot = document.createElement("span");
  dot.classList.add("dot");

  div.appendChild(dot);

  setTimeout(() => {
    const x = Math.random() * 90;
    const y = Math.random() * 30 + 60;
    div.style.left = `${x}%`;
    div.style.top = `${y}%`;
    bubbleHtml.appendChild(div);

    setTimeout(() => {
      div.remove();
      load();
    }, 9 * 1000);
  }, r);
}

body.appendChild(bubbleHtml);
for (let i = 0; i < 99; i++) {
  load();
}
