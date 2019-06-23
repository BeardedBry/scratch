// pure function that accomplishes the same thing
var printSomewhere = function(str, height, width) {
    var elem = document.createElement("div");
    elem.textContent = str;
    elem.style.position = 'absolute';
    elem.style.top = height + 'px';
    elem.style.left = width + 'px';
    return elem;
  };
  
  var messages = ['Hi', 'Hello', 'Sup', 'Hey', 'Hola'];
  
  messages.map(function(s,i){
      return printSomewhere(s, 15*i, 15*i);
    })
    .forEach(function(element) {
    document.body.appendChild(element);
  });
  