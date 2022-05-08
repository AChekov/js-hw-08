// Add imports above this line
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery')
const sampleMarkup = createGallerySample(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", sampleMarkup)

function createGallerySample(sample) {
  return sample
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" 
        href="${original}">
        <img 
          class="gallery__image" 
          src="${preview}" 
          alt="${description}" 
        />
      </a>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt',
    captionDelay: 250,
captionPosition: 'bottom'}
)