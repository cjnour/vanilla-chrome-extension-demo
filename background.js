var menuItem = {
  id: "rateMenu",
  title: "Rate Item",
  contexts: ["all"],
};

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function (clickData) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tab) {
    chrome.scripting.executeScript({
      target: { tabId: tab[0].id },
      files: ["contentScript.js"],
    });
  });
});
