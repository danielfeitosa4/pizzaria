var button = document.querySelector('button');

button.onclick = function() {
  var pedido = prompt('Qual é o seu pedido?');
  alert('Olá ' + pedido + ', o seu pedido foi anotado!');
}