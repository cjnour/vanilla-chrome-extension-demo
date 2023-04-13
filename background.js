var menuItem = {
  id: "askMrsGpt",
  title: "Ask Mrs. GPT",
  contexts: ["all"],
};

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function (clickData) {
  console.log("Clicked context menu...background");
  chrome.tabs.query({ active: true, currentWindow: true }, function (tab) {
    console.log("reached");
    chrome.scripting.executeScript({
      target: { tabId: tab[0].id },
      files: ["contentScript.js", "showModal.js"],
    });
  });
});
