// Write your code here!
//Array of shopping list objects with name and price
const shoppingList = [
    {
        name: "Chicken Breast",
        price: "10.50"
    },
    {
        name: "Paparika",
        price: "3.20"
    }, 
    {
        name: "Chips",
        price: "6.50"
    },
    {
        name: "Eggs",
        price: "4.00"
    },
    {
        name: "Milk",
        price: "7.80"
    }
];


// Will handle displaying every individual item
function displayCartItem(item) {
    const shoppingCart = document.querySelector('#cart');
    const newItem = document.createElement('li');

    const itemName = document.createElement('p');
    const itemPrice = document.createElement('p');

    itemName.textContent = item.name;
    itemPrice.textContent = `$${item.price}`;

    newItem.append(itemName, itemPrice);
    shoppingCart.append(newItem);

}

//Looping through array and using displayCartItem function to display the items.
shoppingList.forEach(item => {
    displayCartItem(item);
});

//Connect Form
const form = document.querySelector('#new-cart-item-form');

function handleSubmit(event) {
    event.preventDefault();

    const newName = document.querySelector('#name-input').value;
    const newPrice = event.target.price.value;

    const newItem = {
        name: newName,
        price: newPrice
    };
    
    shoppingList.push(newItem);
    displayCartItem(newItem);
    form.reset();
}

form.addEventListener("submit", (event) => {
    handleSubmit(event);
})