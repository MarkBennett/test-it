var elem = document.querySelector("#target");
var name_elem = document.querySelector("#name");
var btn = document.querySelector("#greet-btn");

btn.addEventListener('click', function(e) {

  var name = name_elem.value;

  e.preventDefault();

  greet(name).
    then(function(greeting) {
      elem.innerHTML = greeting;
    });
});
