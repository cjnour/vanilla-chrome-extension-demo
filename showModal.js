window.addEventListener("load", (event) => {
  console.log("Reached here too");
  const modal = document.getElementById("modal");
  modal.style.setProperty(`--width`, "400px");
  modal.style.setProperty(`--height`, "500px");
});
