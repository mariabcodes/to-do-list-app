const form = document.querySelector('form');
const ul = document.querySelector('ul');
const clearButton = document.getElementById('clear');
const input = document.getElementById('listItems');
const createCategoryButton = document.getElementById('categories');
const categoriesBoxes = document.getElementById('category-boxes');

// check if localStorage already exists, if not, create an empty array
const itemsArray = localStorage.getItem('listItems') ? JSON.parse(localStorage.getItem('listItems')) : [];
const categoriesBox = localStorage.getItem('category-boxes') ? JSON.parse(localStorage.getItem('category-boxes')) : [];

// categories box is added to local storage and is on the front end.
localStorage.setItem('category-boxes', JSON.stringify(categoriesBox));
const categoriesBoxesData = JSON.parse(localStorage.getItem('category-boxes'));

// create list item each time, in text type
const listMaker = (text) => {
  const li = document.createElement('li')
  li.textContent = text
  ul.appendChild(li);
};

// add event listener for submit event
form.addEventListener('submit', function (e) {
  e.preventDefault();

  // push new input value to array and then set the Local Storage to the updated value
  const categoryName = prompt('Enter your category name:');
  prompt(chooseCategory);
  listMaker(input.value);
  itemsArray.push(input.value);
  categoriesBoxesData.push(categoryName);
  input.value = '';
  localStorage.setItem('listItems', JSON.stringify(itemsArray));
  localStorage.setItem('category-boxes', JSON.stringify(categoriesBox));
  // input.value = '';
  // categoriesBox.push(input.value);
});

// input value needs to be added to localStorage and appear on front end
// create localStorage key called listitems, store them in an array
const arrayData = JSON.parse(localStorage.getItem('listItems'));
localStorage.setItem('listItems', JSON.stringify(itemsArray));

// loop through existing local storage items and display them at the top of the list
arrayData.forEach((item) => {
  listMaker(item);
});

function createCategory (categoryName) {
  categoryName = prompt('Enter category name:');
  if (categoryName !== null) {
  const categoryElement = document.createElement('div');
  categoryElement.classList.add('category');
  categoryElement.textContent = categoryName;
  categoriesBoxes.appendChild(categoryElement);
  categoriesBoxesData.push(categoryName);
  localStorage.setitem('category-boxes', JSON.stringify(categoriesBoxesData));
  } else {
    undefined;
  }
};
// now adding a loop to check through local storage categories and display them on front end
categoriesBoxesData.forEach((category) => {
  createCategory(category);
});

// now we are adding a new button that will create a new category
createCategoryButton.addEventListener('click', createCategory);

// clear all button to remove all items from local storage and front end
// add client event listener to remove items and categories from local storage & remove every child from list
clearButton.addEventListener('click', function () {
  localStorage.clear();

  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }

  while (categoriesBoxes.firstChild) {
    categoriesBoxes.removeChild(categoriesBoxes.firstChild)
  };
});

// now we are creating a function that will be used to create many categories come up when a task is entered.
function chooseCategory () {
  e.preventDefault();
  categoryElement.classList.add('category');
  categoryElement.textContent = categoryName;
  categoriesBoxes.appendChild(categoryElement);
  categoriesBoxesData.push(categoryName);
  localStorage.setItem('category-boxes', JSON.stringify(categoriesBoxes));
  categoryElement.classList.toggle('active');
}

// ***** need to update on of the current functions, so that the ul is created underneath the div of the category.****
// need to sort out the buttons at promt - even if press cancel, it goes forward
