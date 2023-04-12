try {
  fetch(chrome.runtime.getURL("modal.html"))
    .then((r) => r.text())
    .then((html) => {
      document.body.insertAdjacentHTML("afterbegin", html);
    });
} catch (err) {
  console.log("Error: ", err);
}
