alert("check:"+document.body.innerHTML);

function getRecommendations(){
    getBooks(function(){
        getVideos();
    });
}

function getBooks(next) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://autoq.herokuapp.com/getEBooks?keyword=sri+lanka", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        // WARNING! Might be injecting a malicious script!
        document.getElementById("aq_books").innerHTML = xhr.responseText;
        next && next();
      }
    }
    xhr.send();
}

function getVideos(next) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://autoq.herokuapp.com/getVideos?keyword=sri+lanka", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        // WARNING! Might be injecting a malicious script!
        document.getElementById("aq_videos").innerHTML = xhr.responseText;
        next && next();
      }
    }
    xhr.send();
}

//var s = document.createElement('script');
//s.src = chrome.extension.getURL('script.js');
//s.onload = function() {
// this.parentNode.removeChild(this);
//};
//(document.head||document.documentElement).appendChild(s);
//
//var css = document.createElement('style');
//css.src = chrome.extension.getURL('aq_style.css');
//css.onload = function() {
// this.parentNode.removeChild(this);
//};
//(document.head||document.documentElement).appendChild(css);

//var angular = document.createElement('script');
//angular.src = chrome.extension.getURL('angular.js');
////angular.onload = function() {
//// this.parentNode.removeChild(this);
////};
//(document.head||document.documentElement).appendChild(angular);
//
//var controllers = document.createElement('script');
//controllers.src = chrome.extension.getURL('controllers.js');
////controllers.onload = function() {
//// this.parentNode.removeChild(this);
////};
//(document.head||document.documentElement).appendChild(controllers);

var i=document.createElement('div');
i.innerHTML = "<div id='aq_books'></div><div id='aq_videos'></div>";
i.className = "aq-rec-main";
document.body.appendChild(i);




getRecommendations();
