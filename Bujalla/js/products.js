const activeImage = document.querySelector("#item01 .product-image .active");
const productImages = document.querySelectorAll("#item01 .image-list img");
const navItem = document.querySelector('#item01 a.toggle-nav');

const activeImage2 = document.querySelector("#item02 .product-image .active");
const productImages2 = document.querySelectorAll("#item02 .image-list img");
const navItem2 = document.querySelector('#item02 a.toggle-nav');

function changeImage(e) {
  activeImage.src = e.target.src;
  activeImage2.src = e.target.src;
}

function toggleNavigation(){
  this.nextElementSibling.classList.toggle('active');
}

productImages.forEach(image => image.addEventListener("click", changeImage));
productImages2.forEach(image => image.addEventListener("click", changeImage));

