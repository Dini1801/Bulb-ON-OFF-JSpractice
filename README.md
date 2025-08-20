# Bulb On/Off (Vanilla JS Practice)

A tiny DOM manipulation exercise: render a heading, two buttons (**Turn On** / **Turn Off**), and an image of a light bulb that toggles between ON and OFF when the buttons are clicked.

## Preview
<!-- Replace with your own screenshot or GIF -->
![Bulb Demo](./preview.png)

## Features
- Creates all elements (`<h1>`, buttons, `<img>`) dynamically with JavaScript
- Uses `textContent` correctly (property, not a function)
- Updates `img.src` to switch bulb images on button click
- No frameworks—pure HTML + JavaScript

## Tech Stack
- HTML5
- Vanilla JavaScript (DOM API)

## How to Run
1. Clone or download this repository.
2. Open `index.html` directly in your browser (no server required).

## File Structure
.
├── index.html
└── scriptt.js


## Core Logic (excerpt)
```js
let head = document.createElement("h1");
document.body.appendChild(head);
head.textContent = "hello dinesh";

let buttonOn = document.createElement("button");
document.body.appendChild(buttonOn);
buttonOn.textContent = "Turn On";

let buttonOff = document.createElement("button");
document.body.appendChild(buttonOff);
buttonOff.textContent = "Turn Off";

let img = document.createElement("img");
document.body.appendChild(img);
img.style.width = "150px";
img.src = "https://www.w3schools.com/js/pic_bulboff.gif";

buttonOn.onclick = () => {
  img.src = "https://www.w3schools.com/js/pic_bulbon.gif";
};

buttonOff.onclick = () => {
  img.src = "https://www.w3schools.com/js/pic_bulboff.gif";
};

What I Practiced / Learned

Creating and appending elements with document.createElement and appendChild

Setting content via element.textContent

Handling click events with .onclick

Changing attributes (img.src) dynamically

Possible Improvements

Combine into a single toggle button

Add keyboard accessibility (Enter/Space to toggle)

Style buttons to look like a switch

Preload images to avoid flicker
