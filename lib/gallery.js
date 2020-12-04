"use strict";

var _galleryItems = _interopRequireDefault(require("./gallery-items.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var galleryImageList = document.querySelector('.js-gallery');
var openModalGallery = document.querySelector('.js-lightbox');
var closeModalBtn = document.querySelector('button[data-action="close-lightbox"]');
closeModalBtn.addEventListener('click', onCloseModal);
var openModalImg = document.querySelector('.lightbox__image');
var galleryMarkup = createGalleryImageMarkup(_galleryItems.default);
galleryImageList.insertAdjacentHTML('afterbegin', galleryMarkup);
galleryImageList.addEventListener('click', onOpenModal);

function createGalleryImageMarkup(images) {
  return images.map(function (_ref) {
    var preview = _ref.preview,
        original = _ref.original,
        description = _ref.description;
    return "\n    <li class=\"gallery__item\">\n  <a\n    class=\"gallery__link\"\n    href=\"".concat(original, "\"\n  >\n    <img\n      class=\"gallery__image\"\n      src=\"").concat(preview, "\"\n      data-source=\"").concat(original, "\"\n      alt=\"").concat(description, "\"\n    />\n  </a>\n</li>\n    ");
  }).join('');
}

function onOpenModal(evt) {
  evt.preventDefault();
  openModalGallery.classList.add('is-open');
  openModalImg.src = evt.target.dataset.source;
  openModalImg.alt = evt.target.dataset.alt;

  if (evt.target.nodeName === 'IMG') {}
}

function onCloseModal(event) {
  event.preventDefault();

  if (event.target.nodeName === 'BUTTON') {
    openModalGallery.classList.remove('is-open');
  }

  openModalImg.src = " ";
  openModalImg.alt = " ";
} // function onCloseModal() {
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