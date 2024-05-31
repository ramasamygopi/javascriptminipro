const overlay = document.querySelector(".overlay");
const boxopen = document.querySelector(".boxopen");
const addbutton = document.querySelector(".add-button");
const cancel = document.getElementById("cancel");


addbutton.addEventListener("click", function () {
    overlay.style.display = "block";
    boxopen.style.display = "block";
    
   
    bookTitle.value = "";
    bookAuthor.value = "";
    shortDescription.value = "";
});

cancel.addEventListener('click', function (event) {
    event.preventDefault();
    overlay.style.display = "none";
    boxopen.style.display = "none";
});

const container = document.querySelector(".container");
const bookTitle = document.getElementById("book-title");
const bookAuthor = document.getElementById("book-author");
const shortDescription = document.getElementById("short-description");
const add = document.getElementById("add");

add.addEventListener('click', function (event) {
    event.preventDefault();
    var div = document.createElement("div");
    div.className = "content-container";
    div.innerHTML = `
        <h2>${bookTitle.value}</h2>
        <h3>${bookAuthor.value}</h3>
        <p>${shortDescription.value}</p>
        <button onclick="deletefun(event)">Delete</button>
    `;
    container.appendChild(div);
    overlay.style.display = "none";
    boxopen.style.display = "none";
});

function deletefun(event) {
    event.target.parentElement.remove();
}
