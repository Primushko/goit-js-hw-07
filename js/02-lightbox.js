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
            <img class="gallery__image"
            src="${preview}"            
            alt="${description}"/>     
            </a>
    </li>`, ``
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
  // Ініціалізація галереї після створення і додання елементів галереї
    const lightbox = new SimpleLightbox(".gallery a");
    lightbox.on("show.simplelightbox", function () {
    // Do something…
    });
}
