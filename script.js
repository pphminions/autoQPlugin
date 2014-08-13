function checkAnswer(){
    //alert("here");
    var list = document.getElementById("aq_radios"); //Client ID of the radiolist
    
    //alert(list.length);
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