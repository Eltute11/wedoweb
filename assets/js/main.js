var loadMore = document.querySelector('#load_more_items_gallery');
var spinner = document.querySelector('.spinner');

// Controlamos cuando hacen click en el boton para mostrar mas items de la galeria
loadMore.addEventListener('click', function(){
  var items = document.querySelectorAll('.item_hidden');

  spinner.classList.remove('hidden');

  setTimeout(() => {
    items.forEach(item => {
      item.classList.remove('item_hidden');
    });
    spinner.classList.add('hidden');
    loadMore.classList.add('hidden');
  }, 2000);
});


// Activamos el Lightbox
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': false
})