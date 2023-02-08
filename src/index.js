let ramenMenu = document.querySelector("#ramen-menu");
let ramenDetailDiv = document.querySelector("#ramen-detail");
let ramenName = document.querySelector(".name");
let ramenRest = document.querySelector(".restaurant");
let ramenDetailImg = document.querySelector(".detail-image");
let rating = document.querySelector("#rating-display");
let comment = document.querySelector("#comment-display");

let formName = document.querySelector("#new-name");
let formRestaurant = document.querySelector("#new-restaurant");
let formImage = document.querySelector("#new-image");
let formRating = document.querySelector("#new-rating");
let formComment = document.querySelector("#new-comment");
let form = document.getElementsByTagName("input")[4];

fetch("http://localhost:3000/ramens")
  .then((res) => res.json())
  .then((ramen) => {
    ramen.forEach((ramen) => {
      let img = document.createElement("img");
      img.src = ramen.image;
      ramenMenu.append(img);

      //   img.addEventListener("click", clickRamen);

      img.addEventListener("click", (e) => {
        ramenDetailImg.src = ramen.image;
        ramenName.textContent = ramen.name;
        ramenRest.textContent = ramen.restaurant;
        rating.textContent = ramen.rating;
        comment.textContent = ramen.comment;
      });

      form.addEventListener("submit", (e) => {
        e.preventDefault;
      });
    });
  });

// function clickRamen(ramen) {
//   console.log(ramen.image);
//   console.log(ramen.image);
//   ramenDetailImg.src = ramen.image;
//   ramenName.textContent = ramen.name;
//   ramenRest.textContent = ramen.restaurant;
//   rating.textContent = ramen.rating;
//   comment.textContent = ramen.comment;
// }
