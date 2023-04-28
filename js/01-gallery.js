import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

galleryItems.forEach(element => {
    const {preview, original, description} = element;
    const item = document.createElement("li");
    const image = document.createElement("img");


    image.src = preview;
    image.alt = description;

    image.classList.add("gallery__image");

    item.appendChild(image);


    gallery.appendChild(item);
});

console.log(galleryItems);
