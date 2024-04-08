// Clothing object representing a clothing item entity
const Clothing = {
    type: "Shirt",
    brand: "Nike", 
    size: "M", 
    color: "Red", 
    price: 2599,
    quantityInStock: 50,

    isOnSale: true, 

   
    updateQuantity: function(newQuantity) {
        this.quantityInStock = newQuantity;
    },

    
    applyDiscount: function(discountPercentage) {
        const discountAmount = this.price * (discountPercentage / 100);
        this.price -= discountAmount;
    },

    
    isAvailableInSize: function(searchedSize) {
        return this.size === searchedSize;
    }
};


console.log("Initial Clothing Object:", Clothing);

Clothing.updateQuantity(40);
console.log("Updated Quantity in Stock:", Clothing.quantityInStock);


const discountPercentage = 10;
Clothing.applyDiscount(discountPercentage);
console.log("Discounted Price:", Clothing.price);

const searchedSize = "L";
console.log("Is the clothing item available in size L?", Clothing.isAvailableInSize(searchedSize));

