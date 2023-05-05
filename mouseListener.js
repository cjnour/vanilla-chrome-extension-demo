let x = 0;
let y = 0;

window.addEventListener("mouseup", function (event) {
  x = event.layerX;
  y = event.layerY;
  console.log("js", "\nX: ", x, "\nY: ", y);
  const modal = document.getElementById("modal");
  console.log(modal);
  // modal.style.setProperty(`--x`, `${x}px`);
  // modal.style.setProperty(`--y`, `${y}px`);
});

// chrome.contextMenus.onClicked.addListener(function (clickData) {
//   console.log("Clicked context menu...mouselistener");
//   const modal = document.getElementById("modal");
//   modal.style.setProperty(`--width`, "400px");
//   modal.style.setProperty(`--height`, "500px");
// });
