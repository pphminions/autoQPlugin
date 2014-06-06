function getRecommendations(){
//    getArticle(function(content){
//        getArticleText(content, function(contentText){
//            alert(contentText);
//        });
//    });
    getBooks(function(){
        getVideos();
    });
    
    getQuestion();
}

function getArticle(next){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://autoq.herokuapp.com/extractArticle?url="+document.URL, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        // WARNING! Might be injecting a malicious script!
          var json = JSON.parse(xhr.responseText);
        next && next(json.content);
      }
    }
    xhr.send();
}

function getArticleText(html, next){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://autoq.herokuapp.com/extractArticleText?html="+html, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        // WARNING! Might be injecting a malicious script!
          var json =  JSON.parse(xhr.responseText);
        next && next(xhr.responseText);
      }
    }
    xhr.send();
}

function getBooks(next) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://autoq.herokuapp.com/getEBooks?keyword=engineering", true);
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
    xhr.open("GET", "http://autoq.herokuapp.com/getVideos?keyword=engineering", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        // WARNING! Might be injecting a malicious script!
        document.getElementById("aq_videos").innerHTML = xhr.responseText;
        next && next();
      }
    }
    xhr.send();
}

function getQuestion(next) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://autoq.herokuapp.com/getQuestion", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        // WARNING! Might be injecting a malicious script!
        document.getElementById("aq_question").innerHTML = xhr.responseText;
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

var ques=document.createElement('div');
ques.innerHTML = "<div id='aq_question'></div>";
ques.className = "aq-question";
document.body.appendChild(ques);


getRecommendations();
