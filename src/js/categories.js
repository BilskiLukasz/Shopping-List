const categories = [
    'Art. spożywcze', 
    'Chemia gospodarcza', 
    'Kosmetyki', 
    'Elektronika', 
    'Lekarstwa',
    'Art. hignieniczne'
];

//Return array of categories
const getCategoriesArray = () => {
    return categories;
}

//Return true = category has been added, false = category exist in list and doesn't added
//Prepared for future features
const addNewCategory = (category) => {
    if (isCategoryExist(category)) {
        return false;
    } else {
        categories.push(category);
        return true;
    }
}

//Return true = category exist in list, false = category doesn't exist
//Prepared for future features
const isCategoryExist = (category) => {
    return categories.includes(category);
}

export {getCategoriesArray };
