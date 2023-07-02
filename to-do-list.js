const form = document.querySelector("form");
const ul = document.querySelector("ul");
const clearButton = document.getElementById("clear");
const input = document.getElementById("listItems");
const createCategoryButton = document.getElementById('categories');
const categoriesBoxes = document.getElementById('category-boxes');

//check if localStorage already exists, if not, create an empty array
let itemsArray = localStorage.getItem("listItems") ? JSON.parse(localStorage.getItem("listItems")) : [];
let categoriesBox = localStorage.getItem("category-boxes") ? JSON.parse(localStorage.getItem("category-boxes")) : [];


//categories box is added to local storage and is on the front end. 
localStorage.setItem('category-boxes', JSON.stringify(Array.from(categoriesBoxes.children)));
const categoriesBoxesData = JSON.parse(localStorage.getItem('category-boxes'));


//input value needs to be added to localStorage and appear on front end; create localStorage key called listitems, store them in an array
localStorage.setItem("listItems", JSON.stringify(itemsArray));
const arrayData = JSON.parse(localStorage.getItem("listItems"));


// create list item each time, in text type
const listMaker = (text) => {
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li)
};


//add event listener for submit event
form.addEventListener("submit", function (e) {
    e.preventDefault();
    //push new input value to array and then set the Local Storage to the updated value
    itemsArray.push(input.value);
    localStorage.setItem("listItems", JSON.stringify(itemsArray));
    listMaker(input.value);
    input.value = ""
});


//loop through existing local storage items and display them at the top of the list 
arrayData.forEach((item) => {
    listMaker(item)
});

categoriesBoxesData.forEach((category) => {
    createCategory(category.textContent);
});


//now we are adding a new button that will create a new categrory
createCategoryButton.addEventListener('click', createCategory);

function createCategory() {
    const categoryName = prompt("Enter category name:");
    const categoryElement = document.createElement("div");
    categoryElement.classList.add("category");
    categoryElement.textContent = categoryName;

    categoriesBoxes.appendChild(categoryElement);  
};


//clear all button to remove all items from local storage and front end
//add client event listener to remove items and categories from local storage and remove every child node from list
clearButton.addEventListener("click", function() {
    localStorage.clear();

    while (ul.firstChild) {
        ul.removeChild(ul.firstChild)
    }

    while (categoriesBoxes.firstChild) {
        categoriesBoxes.removeChild(categoriesBoxes.firstChild)
    }
});
