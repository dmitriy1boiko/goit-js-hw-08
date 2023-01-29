// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const container = document.querySelector('.gallery');
const imgMarcup = createImgMarcup (galleryItems);

container.insertAdjacentHTML('beforeend', imgMarcup);

function createImgMarcup(items) {
  const markup = items.map(({preview, original, description})=> {
  return `
      <a class="gallery__link" href="${original}" onclick="return false">
        <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
        />
</a>`
  }).join(''); 
  return markup;
}

let gallery = new SimpleLightbox('.gallery a');

gallery.on('show.simplelightbox', function () {
	gallery.options.captionDelay = 250;
});


