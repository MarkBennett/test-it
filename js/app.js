var elem;
var name_elem;
var btn;

function handleBtnClick(e) {

  var name = name_elem.value;

  e.preventDefault();

  return greet(name).
    then(function(greeting) {
      elem.innerHTML = greeting;
    });
}

function init() {
  elem = document.querySelector("#target");
  name_elem = document.querySelector("#name");
  btn = document.querySelector("#greet-btn");

  btn.addEventListener('click', handleBtnClick);
}
