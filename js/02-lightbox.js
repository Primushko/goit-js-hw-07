import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
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
console.log(galleryItemsMarkup);







// gallery.insertAdjacentHTML("beforeend", galleryItemsMarkup);

// gallery.addEventListener(`click`, onGalleryClick);

// function onGalleryClick(event) {

    // event.preventDefault();
    
//   const target = event.target;
//   if (target.nodeName !== `IMG`) {
//     return;
//   }
    
//   const instance = basicLightbox.create(
//     `<img src="${target.dataset.source}" width="800" height="600">`,
//     {
//       onShow: () => {
//         document.addEventListener(`keydown`, onEscapePress);
//       },
//       onClose: () => {
//         document.removeEventListener(`keydown`, onEscapePress);
//       },
//     }
//   );

//   instance.show();
    
//   function onEscapePress(event) {
//     if (event.code === `Escape`) {
//       instance.close();
//     }
//   }
  // console.log(event.target);
// } 