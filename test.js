function getRecommendations(){
    getArticle(function(content, keyword){
        //alert(content);
        document.getElementById("aq_question").innerHTML = content;
        
        getBooks(keyword);
        getVideos(keyword);
//        getArticleText(content, function(contentText){
//            alert(contentText);
//        });
    });
//    getBooks(function(){
//        getVideos();
//    });
    
//    getQuestion();
}

//var appurl = "http://localhost:5000";
var appurl = "http://autoq.herokuapp.com";

function getArticle(next){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", appurl + "/extractArticle?url=" + document.URL, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        // WARNING! Might be injecting a malicious script!
          //alert(xhr.responseText);
          var json = JSON.parse(xhr.responseText);
        next && next(json.content, json.keyword);
      }
    }
    xhr.send();
}

function getArticleText(html, next){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", appurl + "/extractArticleText?html="+html, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        // WARNING! Might be injecting a malicious script!
          var json =  JSON.parse(xhr.responseText);
        next && next(xhr.responseText);
      }
    }
    xhr.send();
}

function checkAnswer(){
    alert("here");
    var list = document.getElementById("aq_radios"); //Client ID of the radiolist
    var inputs = list.getElementsByTagName("input");
    var selected;
    for (var i = 0; i < inputs.length; i++) {
         if (inputs[i].checked) {
             selected = inputs[i];
             break;
          }
     }
     if (selected) {
          alert(selected.value);
     }
}

function getBooks(keyword, next) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", appurl + "/getEBooks?keyword="+keyword, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        // WARNING! Might be injecting a malicious script!
        document.getElementById("aq_books").innerHTML = xhr.responseText;
        next && next();
      }
    }
    xhr.send();
}

function getVideos(keyword, next) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", appurl + "/getVideos?keyword="+keyword, true);
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
    xhr.open("GET", appurl + "/getQuestion", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        // WARNING! Might be injecting a malicious script!
        document.getElementById("aq_question").innerHTML = xhr.responseText;
        next && next();
      }
    }
    xhr.send();
}

var s = document.createElement('script');
s.src = chrome.extension.getURL('script.js');
s.onload = function() {
 this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(s);
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
