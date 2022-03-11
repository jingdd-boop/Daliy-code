var btn = document.getElementById("button1");
btn.onclick = function () {
  console.log("oo");
  chrome.browserAction.setBadgeBackgroundColor({
    Parameters: [255, 0, 0, 255],
  });
};
