//sum of new prices
export function calculateSumOfNewPrices(data: any[]): number {
    let sum = 0;
  
    data.forEach(item => {
      if (item.condition === "new") {
        const priceString = item.price;
        const priceNumber = parseFloat(priceString.replace(/[^\d.-]/g, ''));
        sum += priceNumber;
      }
    });
  
    return sum;
  }


// average of new prices
export function calculateAverageOfNewPrices(data: any[]): number {
    let sum = 0;
    let count = 0;
  
    data.forEach(item => {
      if (item.condition === "new") {
        const priceString = item.price;
        const priceNumber = parseFloat(priceString.replace(/[^\d.-]/g, ''));
        sum += priceNumber;
        count++;
      }
    });
  
    const average = count > 0 ? sum / count : 0;
    return average;
  }