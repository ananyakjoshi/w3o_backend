
const inventoryItems = [
    { name: "Chair", quantity: 20 },
    { name: "Table", quantity: 15 },
    { name: "Glasses", quantity: 10 },
    { name: "Curtains", quantity: 20 },
    { name: "Water Bottles", quantity: 25 }
];


for (let i = 0; i < inventoryList.length; i++) {
    const item = inventoryList[i];
    console.log(`Item: ${item.name}, Stock Level: ${item.quantity}`);
}
