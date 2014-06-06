function click(e) {
  chrome.tabs.executeScript(null,
      {file:"test.js"});
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('input');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});