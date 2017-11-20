window.addEventListener('load', function() {
  var container = document.getElementById('container');
  var box = document.getElementById('box');
  var form = document.getElementById('form');
  var tarea = document.getElementById('tarea');
  var btnSave = document.getElementById('btn-save');

 

  function añadirLista(event){
    e.preventDefault();
    box.style.display = "inline-block";
    span.style.display = "none";
    form.style.display = "inline-block";
    texto.focus();
    }
  function addTarea(event) {
    form.style.display = 'none';
    var form = document.createElement('form');
    var textArea = document.createElement('textArea');
    textArea.classList.add('texto');
    
    var newButton = document.createElement('newButton');
    var button = document.createTextNode('Agregar');
    newButton.classList.add('newButton');
    form.appendChild(textArea);
    form.appendChild(newButton);
    textArea.focus();
  }

  function crearLista() {
    var lista = document.createElement('div');
    lista.textContent = texto.value;
    lista.classList.add('lista');
    contenedor.insertBefore(lista, span.previousSibling);
    texto.value = '';
    var nuevaTarjeta = document.createElement('a');
    nuevaTarjeta.href = '#';
    var nodoTarjeta = document.createTextNode('Añadir una tarjeta ...');
    nuevaTarjeta.appendChild(nodoTarjeta);
    lista.appendChild(nuevaTarjeta);
    nuevaTarjeta.classList.add('tarjeta');
    nuevaTarjeta.addEventListener('click', añadirNuevaTarjeta);
  }
});