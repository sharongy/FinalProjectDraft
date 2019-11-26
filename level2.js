function login() {
  var noun = document.getElementById("noun").value;
  var adjective = document.getElementById("adjective").value;
  var verb = document.getElementById("verb").value;
  var name = document.getElementById("name").value;
  var exclamation = document.getElementById("exclamation").value;
  location.href='level2Result.html?'+'noun=' + encodeURI(noun)+'&adjective=' + encodeURI(adjective)+'&verb=' + encodeURI(verb)+'&name=' + encodeURI(name)+'&exclamation=' + encodeURI(exclamation);
}
