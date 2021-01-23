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


function searchImage() {
  // Declare variables
  var input, filter, main_gallery, li, a, i, txtValue;
  input = document.querySelector('#search');
  filter = input.value.toUpperCase();
  main_gallery = document.querySelector(".main_gallery");
  item_gallery = main_gallery.querySelectorAll('.item_gallery');

  console.log(item_gallery);

  for (i = 0; i < item_gallery.length; i++) {
    hashtag = item_gallery[i].querySelectorAll(".hashtag")[0];
    txtValue = hashtag.textContent || hashtag.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      item_gallery[i].style.display = "";
    } else {
      item_gallery[i].style.display = "none";
    }
  }
}

// Activamos el Lightbox
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': false
})