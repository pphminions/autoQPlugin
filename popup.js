function click(e) {
//  chrome.tabs.executeScript(null, {file:"test.js"}, function(){
//      chrome.tabs.sendRequest(null, {scriptOptions: {currentTabUrl:currentTabUrl}}, function(){
//          //all injected
//      });
//  });
    
    //chrome.tabs.executeScript(null, {code: "var scriptOptions = {param1:'value1',param2:'value2'};"}, function(){
        chrome.tabs.executeScript(null, {file:"test.js"});
    //});
  window.close();
}

currentTabUrl = "";

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('input');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});

chrome.tabs.getSelected(null, function(tab) {
    //alert(currentTabUrl);
});