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
  newTarea.addEventListener('click', addTarea);
}
// Agregar lista
function addList(event) {
  event.preventDefault();
  box.style.display = 'inline-block';
  newlist.style.display = 'none';
  form.style.display = 'inline-block';
  texto.focus();
}
// Agregar Tarea y por el evento click crear una tarjeta 
function addTarea(event) {
  event.preventDefault();
  this.style.display = 'none';
  // form para escribir tarea 
  var form = document.createElement('form');
  var area = document.createElement('textArea');
  area.classList.add('areaTexto');
  area.setAttribute('type', 'text');
  // Creando boton añadir
  var nuevoBoton = document.createElement('button');
  var nodoBoton = document.createTextNode('Añadir');
  nuevoBoton.classList.add('nuevoBoton');
  nuevoBoton.setAttribute('type', 'submit');
  nuevoBoton.appendChild(nodoBoton);
  form.appendChild(area);
  form.appendChild(nuevoBoton);
  this.parentElement.insertBefore(form, this.nextSibling);
  nuevoBoton.addEventListener('click', createTarea);
  area.focus();
}
function createTarea(event) {
  event.preventDefault();
  this.parentElement.style.display = 'none';
  this.parentElement.previousSibling.style.display = 'block';
  var textoTarea = document.createElement('div');
  textoTarea.classList.add('Tareas');
  textoTarea.textContent = this.previousSibling.value;
  this.parentElement.parentElement.insertBefore(textoTarea, this.parentElement.previousSibling);
}