// Con el evento load se cargara la pagina 
window.addEventListener('load', loadPagina);

var newlist = document.getElementById('newlist');
var boton = document.getElementById('boton');
var texto = document.getElementById('texto');
var box = document.getElementById('box');
var container = document.getElementById('container');

// Funcion principal donde se llama a lo 3 eventos
function loadPagina() {
  boton.addEventListener('click', hideForm);
  boton.addEventListener('click', createList);
  newlist.addEventListener('click', addList);
}

// funcion que oculta boton guardar y el input
function hideForm(event) {
  event.preventDefault();
  box.style.display = 'none';
  newlist.style.display = 'inline-block';
}

// crear lista y evento click para agregar tarea
function createList() {
  var lista = document.createElement('div');
  lista.textContent = texto.value;
  lista.classList.add('lista');
  container.insertBefore(lista, newlist.previousSibling);
  texto.value = '';
  // crear anchor 'añadir nueva tarea'
  var newTarea = document.createElement('a');
  newTarea.href = '#';
  var nodoTarea = document.createTextNode('Añadir una tarea ...');
  newTarea.appendChild(nodoTarea);
  lista.appendChild(newTarea);
  newTarea.classList.add('tarea');
  newTarea.addEventListener('click', addTarjet);
}
// Agregar lista
function addList(event) {
  event.preventDefault();
  box.style.display = 'inline-block';
  newlist.style.display = 'none';
  form.style.display = 'inline-block';
  texto.focus();
}