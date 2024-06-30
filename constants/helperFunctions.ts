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

  //sum of used prices
export function calculateSumOfUsedPrices(data: any[]): number {
  let sum = 0;

  data.forEach(item => {
    if (item.condition === "used") {
      const priceString = item.price;
      const priceNumber = parseFloat(priceString.replace(/[^\d.-]/g, ''));
      sum += priceNumber;
    }
  });

  return sum;
}

// average of used prices
export function calculateAverageOfUsedPrices(data: any[]): number {
  let sum = 0;
  let count = 0;

  data.forEach(item => {
    if (item.condition === "used") {
      const priceString = item.price;
      const priceNumber = parseFloat(priceString.replace(/[^\d.-]/g, ''));
      sum += priceNumber;
      count++;
    }
  });

  const average = count > 0 ? sum / count : 0;
  return average;
}

// Sum of cpo prices
export function calculateSumOfCPOPrices(data: any[]): number {
  let sum = 0;

  data.forEach(item => {
    if (item.condition === "cpo") {
      const priceString = item.price;
      const priceNumber = parseFloat(priceString.replace(/[^\d.-]/g, ''));
      sum += priceNumber;
    }
  });

  return sum;
}

// average of cpo prices
export function calculateAverageOfCPOPrices(data: any[]): number {
  let sum = 0;
  let count = 0;

  data.forEach(item => {
    if (item.condition === "cpo") {
      const priceString = item.price;
      const priceNumber = parseFloat(priceString.replace(/[^\d.-]/g, ''));
      sum += priceNumber;
      count++;
    }
  });

  const average = count > 0 ? sum / count : 0;
  return average;
}