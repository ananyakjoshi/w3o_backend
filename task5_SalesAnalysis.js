
function calculateTotalSales(dailySales) {
    return dailySales.reduce((total, sales) => total + sales, 0);
}


function calculateAverageDailySales(dailySales) {
    const totalSales = calculateTotalSales(dailySales);
    return totalSales / dailySales.length;
}


function findBestSellingDay(dailySales) {
    const maxSales = Math.max(...dailySales);
    const bestSellingDays = [];
    dailySales.forEach((sales, index) => {
        if (sales === maxSales) {
            bestSellingDays.push(index + 1); 
        }
    });
    return bestSellingDays;
}


const sampleSalesData1 = [100, 150, 200, 250, 300, 200, 150]; 
const sampleSalesData2 = [80, 120, 90, 200, 150, 175, 250, 300]; 


const totalSales1 = calculateTotalSales(sampleSalesData1);
const averageDailySales1 = calculateAverageDailySales(sampleSalesData1);
const bestSellingDay1 = findBestSellingDay(sampleSalesData1);

const totalSales2 = calculateTotalSales(sampleSalesData2);
const averageDailySales2 = calculateAverageDailySales(sampleSalesData2);
const bestSellingDay2 = findBestSellingDay(sampleSalesData2);


console.log("Sample Sales Data 1:");
console.log("Total Sales:", totalSales1);
console.log("Average Daily Sales:", averageDailySales1);
console.log("Best Selling Day(s):", bestSellingDay1);

console.log("\nSample Sales Data 2:");
console.log("Total Sales:", totalSales2);
console.log("Average Daily Sales:", averageDailySales2);
console.log("Best Selling Day(s):", bestSellingDay2);
