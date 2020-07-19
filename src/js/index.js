import { getCategoriesArray } from './categories';
import { listOfProducts, Product } from './products';

const list = document.querySelector('#list');
const form = document.querySelector('#form');
const selectCategory = document.querySelector('#categoryName');

//This listener add Product element do DOM with given variables fromm form
form.addEventListener('submit', (event) => {
  event.preventDefault()

  const product = new Product();

    product.name = form.productName.value;
    product.category = selectCategory.value;
    product.unit = form.unit.value;
    product.amount = form.amount.value;

    listOfProducts.push(product);
    insertProductToDOM(product);
    form.reset();
})

//This method return div element with given attribute
const createCategoryElement = (category) => {

  let newCategory = document.createElement(`div`);
    newCategory.classList.add('border', 'text-center', 'w-100' , 'mb-1', 'py-1', 'font-weight-bolder');
    newCategory.setAttribute('category-name', category);
    newCategory.innerText = category;

  return newCategory;
}

//This method return button element with nested fontawesome element
const createOptionButton = (buttonClass, iconClas) => {

  const fontawesomeIcon = document.createElement('i');
    fontawesomeIcon.classList.add('fas', iconClas);

  const optionButton = document.createElement('button');
    optionButton.setAttribute('type', 'button');
    optionButton.classList.add('btn', 'btn-floating','ml-2',buttonClass);
    optionButton.appendChild(fontawesomeIcon);
 
  return optionButton;
}

//This method create entire product element with all neccesary childs.
const createProductElement = (Product) => {

  const amountInfo = document.createElement('span');
    amountInfo.classList.add('badge', 'bg-primary', 'm-1', 'p-1');
    amountInfo.innerText = `${Product.amount} ${Product.unit}`;

  const deleteButton = createOptionButton('btn-outline-danger', 'fa-trash');
  deleteButton.addEventListener('click', (event) => {
    const toRemove = event.target.closest('div');
    removeProductFromDOM(toRemove);
  })

  const newProductElement = document.createElement(`div`);
    newProductElement.classList.add('bg-white', 'd-flex', 'justify-content-center', 'align-items-center', 'rounded', 'border', 'border-light', 'm-1', 'p-1', 'font-weight-normal');
    newProductElement.setAttribute('value', Product.name);
    newProductElement.innerText = Product.name;
    newProductElement.appendChild(amountInfo);
    newProductElement.appendChild(deleteButton);

  return newProductElement;
}

//Check if given category exist in DOM. Return boolean.
const categoryExistInDOM = (categoryName) => {
  const listAveCat = list.querySelectorAll('[category-name]');

  if (!listAveCat.length) {
    return false;
  } else {
    for (let nodeElement of listAveCat){
      if(nodeElement.getAttribute('category-name') === categoryName){
        return true;
      } else {
        continue;
      }
    }
    return false;
  }
}

//This method remove given product from DOM. If category from given element is empty it will be removed too.
const removeProductFromDOM = (productToRemove) => {
  const parentElement = productToRemove.parentElement;

  productToRemove.remove();

  if(!parentElement.querySelector('div')) {
    parentElement.remove();
  }
}

//This method insert given Product to DOM in shape of Product Element
const insertProductToDOM = (Product) => {
  if(!categoryExistInDOM(Product.category)){
    list.append(createCategoryElement(Product.category))
  }

  const categoryInDOM = list.querySelector(`[category-name='${Product.category}']`);

  categoryInDOM.append(createProductElement(Product));
}

//Fill the category list, prepared for future features
const insertListCategoriesToDOM = () => {
  const arr = getCategoriesArray();
  selectCategory.length = 1;
  
  for(let cat of arr){
    const newOption = document.createElement('option');
    newOption.innerText = cat;
    newOption.setAttribute('value', cat);

    selectCategory.add(newOption);
  }
}

//THIS IS INITIAL METHOD TO FILL SAMPLE ELEMENTS TO DOM
(() => {
  for(let el of listOfProducts){
    insertProductToDOM(el)
  }
  insertListCategoriesToDOM()
})()