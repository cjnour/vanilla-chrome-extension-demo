function getSelectionCoords(win) {
  win = win || window;
  var doc = win.document;
  var sel = doc.selection,
    range,
    rects,
    rect;
  var x = 0,
    y = 0;
  if (sel) {
    if (sel.type != "Control") {
      range = sel.createRange();
      range.collapse(true);
      x = range.boundingLeft;
      y = range.boundingTop;
    }
  } else if (win.getSelection) {
    sel = win.getSelection();
    if (sel.rangeCount) {
      range = sel.getRangeAt(0).cloneRange();
      if (range.getClientRects) {
        range.collapse(true);
        rects = range.getClientRects();
        if (rects.length > 0) {
          rect = rects[0];
        }
        x = rect.left;
        y = rect.top;
      }
      if (x == 0 && y == 0) {
        var span = doc.createElement("span");
        if (span.getClientRects) {
          span.appendChild(doc.createTextNode("\u200b"));
          range.insertNode(span);
          rect = span.getClientRects()[0];
          x = rect.left;
          y = rect.top;
          var spanParent = span.parentNode;
          spanParent.removeChild(span);
          spanParent.normalize();
        }
      }
    }
  }
  return { x: x, y: y };
}

console.log("test ");

try {
  fetch(chrome.runtime.getURL("modal.html"))
    .then((r) => r.text())
    .then((html) => {
      document.body.insertAdjacentHTML("afterbegin", html);
    });
} catch (err) {
  console.log("Error: ", err);
}
