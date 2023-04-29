import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");



for (let i = 0; i < galleryItems.length; i++) {
    const element = galleryItems[i];
    const index = i;

    const {preview, original, description} = element;
    const item = document.createElement("li");
    const image = document.createElement("img");


    image.src = preview;
    image.alt = description;

    image.classList.add("gallery__image");
    image.setAttribute('id', `${index}`);

    item.appendChild(image);


    gallery.appendChild(item);
}

const modal = document.querySelector("[data-modal]");
gallery.addEventListener("click", (event) => {
    modal.classList.toggle("is-hidden");

    const clickedImage = event.target;
    const id = clickedImage.id;
    const url = galleryItems[id].original;
    const descr = galleryItems[id].description;

    const image = document.getElementById("modal-image");
    image.src = url;
    image.alt = descr;
   
    console.log(image);
})

modal.addEventListener("click", (event) => {
    modal.classList.toggle("is-hidden");
})