document.addEventListener("DOMContentLoaded", () => {
  const colorButton = document.getElementById("colorButton");
  const message = document.getElementById("message");

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  colorButton.addEventListener("click", () => {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    message.textContent = `Your tea color is ${randomColor}`;
  });
});
