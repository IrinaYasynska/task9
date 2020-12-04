import galleryItems from './gallery-items.js';

const galleryImageList = document.querySelector('.js-gallery');
const openModalGallery = document.querySelector('.js-lightbox');
const closeModalBtn = document.querySelector('button[data-action="close-lightbox"]');
closeModalBtn.addEventListener('click', onCloseModal)

const openModalImg = document.querySelector('.lightbox__image');

const galleryMarkup = createGalleryImageMarkup(galleryItems);

galleryImageList.insertAdjacentHTML('afterbegin', galleryMarkup);
galleryImageList.addEventListener('click', onOpenModal);

function createGalleryImageMarkup(images) {
  return images.map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `;
    })
    .join('');
}
function onOpenModal(evt) {
  evt.preventDefault()
  openModalGallery.classList.add('is-open')

  openModalImg.src = evt.target.dataset.source
  openModalImg.alt = evt.target.dataset.alt
  if (evt.target.nodeName==='IMG') {
      }
}

function onCloseModal(event) {
  event.preventDefault()

 
  if (event.target.nodeName === 'BUTTON') {

    openModalGallery.classList.remove('is-open')

  }
  openModalImg.src = " "
  openModalImg.alt = " "
}




// function onCloseModal() {
//   window.removeEventListener('keydown', onEscKeyPress);
//   document.body.classList.remove('show-modal');
// }

// function onBackdropClick(event) {
//   if (event.currentTarget === event.target) {
//     console.log('Кликнули именно в бекдроп!!!!');
//     onCloseModal();
//   }
// }

// function onEscKeyPress(event) {
//   const ESC_KEY_CODE = 'Escape';
//   const isEscKey = event.code === ESC_KEY_CODE;

//   if (isEscKey) {
//     onCloseModal();
//   }
// }