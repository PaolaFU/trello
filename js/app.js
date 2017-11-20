window.addEventListener('load', function() {
  var container = document.getElementById('container');
  var form = document.getElementById('form');
  var lista = document.getElementById('lista');
  var btnSave = document.getElementById('btn-save');
  var newlist = document.getElementById('newlist');

  // Al hacer click en 'añadir lista' 
  newlist.addEventListener('click', function(event) {
    event.preventDefault();
    otherContainer();
  });
  // funcion que oculta 'añadir lista' y aparece el container
  function otherContainer() {
    lista.style.cssText = 'display:block';
    btnSave.style.cssText = 'display:block';
    newlist.style.cssText = 'display:none';
    container.style.cssText = 'display:block';
  }
});
