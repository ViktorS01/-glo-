"use strict";

let body = document.querySelector("body");
let adv = document.querySelector(".adv");
let books = document.querySelectorAll(".book");

let container2 =books[0].querySelector("ul");
let chapters2 = books[0].querySelector("ul").querySelectorAll("li");

let container5 =books[5].querySelector("ul");
let chapters5 = books[5].querySelector("ul").querySelectorAll("li");

let container6 =books[2].querySelector("ul");
let chapters6 = books[2].querySelector("ul").querySelectorAll("li");

//console.log(books);
//console.log(chapters2[0].textContent);


books[0].before(books[1]);
books[2].before(books[4]);
books[4].after(books[3]);
books[3].after(books[5]);

body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";
books[4].querySelector('h2').querySelector('a').textContent = "Книга 3. this и Прототипы Объектов";
adv.remove();

container2.append(chapters2[0]);
container2.append(chapters2[1]);
container2.append(chapters2[3]);
container2.append(chapters2[6]);
container2.append(chapters2[8]);
container2.append(chapters2[4]);
container2.append(chapters2[5]);
container2.append(chapters2[7]);
container2.append(chapters2[9]);
container2.append(chapters2[2]);
container2.append(chapters2[10]);

container5.append(chapters5[0]);
container5.append(chapters5[1]);
container5.append(chapters5[9]);
container5.append(chapters5[3]);
container5.append(chapters5[4]);
container5.append(chapters5[2]);
container5.append(chapters5[6]);
container5.append(chapters5[7]);
container5.append(chapters5[5]);
container5.append(chapters5[8]);
container5.append(chapters5[10]);

const newElem = document.createElement("li");
newElem.textContent = "Глава 8: За пределами ES6";

chapters6[8].after(newElem);