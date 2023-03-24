import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const gallery = document.querySelector(".gallery");
//                 ---- МЕТОД map + join ---
// const galleryItemsMarkup = galleryItems
//     .map(
//         ({ preview, original, description }) => `
//         <li class="gallery__item">
//             <a class="gallery__link" href="${original}">
//             <img class="gallery__image"
//             src="${preview}"            
//             alt="${description}"/>
//             </a>
//         </li>`
//         )
//     .join("");
// console.log(galleryItemsMarkup);
//                   ---- МЕТОД reduce ---
const galleryItemsMarkup = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
            <div class="gallery__image-container">
            <img class="gallery__image"
            src="${preview}"            
            alt="${description}"/>
            <div class="gallery__caption">${description}</div>
            </div>
            </a>
    </li>`,
  ``
);
// console.log(galleryItemsMarkup);
//             -----  виводимо галерею на екран -------
gallery.insertAdjacentHTML("beforeend", galleryItemsMarkup);

//              ------  робимо клік по фото ----------
gallery.addEventListener(`click`, onGalleryClick);

function onGalleryClick(event) {
  // зупиняємо перезавантаження сторінки
    event.preventDefault();
    const target = event.target;
    if (target.nodeName !== `IMG`) {
    return;
    }
  // console.log(event.target);
  // Ініціалізація галереї після створення і додання елементів галереї
    const lightbox = new SimpleLightbox(".gallery a");
    // lightbox.on("show.simplelightbox", function () {
    // // Do something…
    // });
    lightbox.on("shown.simplelightbox", function (event) {
      const imageCaption = event._target.querySelector(".gallery__caption");
      setTimeout(function () {
        imageCaption.style.opacity = 1;
      }, 250);
    });

    
    // lightbox.on("error.simplelightbox", function (event) {
    // console.log(event); // Some usefull information
    // });

}
