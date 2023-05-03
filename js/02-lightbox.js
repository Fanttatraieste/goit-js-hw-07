import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.es";
// Change code below this line



let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
	// do something…
    console.log(gallery);
});





// const gallery = document.querySelector(".gallery");


// for (let i = 0; i < galleryItems.length; i++) {
//     const element = galleryItems[i];
//     const index = i;

//     const {preview, original, description} = element;
//     const item = document.createElement("li");
//     const link = document.createElement("a");
//     const image = document.createElement("img");


//     image.src = preview;
//     image.alt = description;
//     link.href = original;

//     image.classList.add("gallery__image");
//     link.classList.add("gallery__link");
    
//     link.appendChild(image);
//     item.appendChild(link);


//     gallery.appendChild(item);
// }
