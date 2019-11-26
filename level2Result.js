function madLib() {
  //var noun = document.getElementById("noun").value;
  //var adjective = document.getElementById("adjective").value;
  //var verb = document.getElementById("verb").value;
  //var name = document.getElementById("name").value;
  //var exclamation = document.getElementById("exclamation").value;

  var loc = location.href;
  var n1 = loc.length;
  var n2 = loc.indexOf('noun=')
  var n3 = loc.indexOf('adjective=')
  var n4 = loc.indexOf('verb=');
  var n5 = loc.indexOf('name=')
  var n6 = loc.indexOf('exclamation=')
  var noun = decodeURI(loc.substr(n2 + 5, n3 - n2 - 6)); //n2 + len(noun) + 1 a = ["noun", adjective]; for (auto i : a) { var n = loc.indexOf(i); }
  var adjective = decodeURI(loc.substr(n3 + 10, n4 - n3 - 11));
  var verb = decodeURI(loc.substr(n4 + 5, n5 - n4 - 6));
  var name = decodeURI(loc.substr(n5 + 5, n6 - n5 - 6));
  var exclamation = decodeURI(loc.substr(n6 + 12, n1 - n6));


  var sentence = name + " " + verb + " a " + adjective + " " + noun + ", " + exclamation + "!"

  var sentence2 = "Oops! Oops! Oops! Please fill in all fields before create the story.";

  if (noun && adjective && verb && name && exclamation) {
    document.getElementById("content").innerText = sentence;
  } else {
    document.getElementById("content").innerText = sentence2;
  }
}

function sayIt() {
  var content = document.getElementById("content").innerHTML;
  var contentVal = "";
  if (content) {
    contentVal = content;
  }
  var sayitBtn = document.getElementById("sayitBtn");
  speech = new SpeechSynthesisUtterance(contentVal);
  speechSynthesis.speak(speech);
}
