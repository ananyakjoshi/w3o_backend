
function inputDailySales() {
    const dailySales = [];

    for (let day = 1; day <= 30; day++) {
        let salesAmount;
        do {
            salesAmount = parseFloat(prompt(`Enter sales amount for day ${day}:`));
        } while (isNaN(salesAmount)); 

        dailySales.push(salesAmount);
    }

    return dailySales;
}


function evaluateSalesPerformance(dailySales, salesTarget) {
    let totalSales = 0;

   
    for (const salesAmount of dailySales) {
        totalSales += salesAmount;
    }

    
    while (totalSales < salesTarget) {
        const additionalSales = parseFloat(prompt(`Total sales (${totalSales}) are below target (${salesTarget}). Enter additional sales amount:`));
        if (isNaN(additionalSales)) {
            console.log("Invalid input. Please enter a number.");
            continue;
        }
        totalSales += additionalSales;
    }

    console.log(`Congratulations! Total sales target (${salesTarget}) met. Total sales: ${totalSales}`);
}


function main() {
    const salesTarget = 10000; 

    console.log("Please enter daily sales figures for the month:");
    const dailySales = inputDailySales(); 

    evaluateSalesPerformance(dailySales, salesTarget); 
}


main();
