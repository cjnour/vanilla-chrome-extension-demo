// $.get(chrome.runtime.getURL("/modal.html"), function (data) {
//   $($.parseHTML(data)).appendTo("body");
// });

// const init = function () {
//   const injectElement = document.createElement("div");
//   injectElement.className = "rustyZone-element";
//   injectElement.innerHTML = "hello";
//   document.body.appendChild(injectElement);
// };
// init();

// document.body.style.backgroundColor = "orange";
try {
  fetch(chrome.runtime.getURL("clientIndex.html"))
    .then((r) => r.text())
    .then((html) => {
      document.body.insertAdjacentHTML("afterbegin", html);
      // not using innerHTML as it would break js event listeners of the page
    });
} catch (err) {
  console.log("Error: ", err);
}
