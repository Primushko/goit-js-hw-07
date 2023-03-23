import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryItemsMarkup = galleryItems
    .map(
    ({ preview, original, description }) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
    />
    </a>
    </li>`
    )
    .join("");

gallery.insertAdjacentHTML("beforeend", galleryItemsMarkup);

gallery.addEventListener(`click`, onGalleryClick);
function onGalleryClick(event) {
    event.preventDefault();
    const target = event.target;
    if (target.nodeName !== `IMG`) {
    return;
    }  
    const instance = basicLightbox.create(
        `<img src="${target.dataset.source}" width="800" height="600">`
    );
    instance.show();
    // console.log(event.target);
}

    


