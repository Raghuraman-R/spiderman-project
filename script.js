function startAnimation() {
  const input = document.getElementById("input").value;
  const text = document.getElementById("nameText");
  const output = document.getElementById("output");

  if (input.trim() === "") {
    alert("Enter your name da!");
    return;
  }

  text.textContent = input.toUpperCase();
  output.style.display = "flex";

  setTimeout(() => {
    text.classList.add("show");
  }, 100);
}


// SIMPLE DOWNLOAD (STABLE)
function downloadImage() {
  const text = document.getElementById("nameText").textContent;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = 1200;
  canvas.height = 500;

  const img = new Image();
  img.src = "spider.jpg";

  img.onload = function () {

    // 🔴 Step 1: Black background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 🕷️ Step 2: Draw image
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // 🧠 Step 3: Set text style
    ctx.font = "bold 180px spiderman";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // 🔥 Step 4: CUT IMAGE USING TEXT
    ctx.globalCompositeOperation = "destination-in";

    ctx.fillStyle = "white";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    // 🔽 Step 5: Download
    const link = document.createElement("a");
    link.download = "spiderman.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };
}