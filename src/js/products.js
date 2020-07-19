class Product{
    constructor(name, category, unit, amount){
        this.name = name;
        this.category = category;
        this.unit = unit;
        this.amount = amount;
        this.isChecked = false;
    }
};

const listOfProducts = [];

//This method completes the list of sample products
(() => {
    listOfProducts.push(new Product('Chleb', 'Art. spożywcze', 'szt.', '2'));
    listOfProducts.push(new Product('Mleko', 'Art. spożywcze', 'szt.', '1'));
    listOfProducts.push(new Product('Sok pomarańczowy', 'Art. spożywcze', 'lit.', '2'));
    listOfProducts.push(new Product('Dezodorant', 'Kosmetyki', 'szt.', '1'));
    listOfProducts.push(new Product('Płyn do naczyń', 'Chemia gospodarcza', 'szt.', '4'));
    listOfProducts.push(new Product('Mąka', 'Art. spożywcze', 'kg.', '5'));
})();

export { listOfProducts, Product };