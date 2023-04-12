var menuItem = {
  id: "askMrsGpt",
  title: "Ask Mrs. GPT",
  contexts: ["all"],
};

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function (clickData) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tab) {
    console.log("reached");
    chrome.scripting.executeScript({
      target: { tabId: tab[0].id },
      files: ["contentScript.js"],
    });
  });
});
