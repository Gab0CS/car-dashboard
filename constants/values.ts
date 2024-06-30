import jsonData from '../server/data/csvjson.json'
import { 
    calculateSumOfNewPrices, 
    calculateAverageOfNewPrices,
    calculateSumOfUsedPrices,
    calculateAverageOfUsedPrices,
    calculateSumOfCPOPrices,
    calculateAverageOfCPOPrices
} from './helperFunctions';

export const newUnitsCount = jsonData.filter(car => car.condition === 'new').length;

const sumNewPrices = calculateSumOfNewPrices(jsonData);
export const formattedPrice = sumNewPrices.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

const averageNewPrices = calculateAverageOfNewPrices(jsonData)
export const formattedAverageNewPrices = averageNewPrices.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

export const usedUnitsCount = jsonData.filter(car => car.condition === 'used').length;

const sumUsedPrices = calculateSumOfUsedPrices(jsonData);
export const formattedUsedPrices = sumUsedPrices.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

const averageUsedPrices = calculateAverageOfUsedPrices(jsonData);
export const formattedAverageUsedPrices = averageUsedPrices.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

export const cpoUnitsCount = jsonData.filter(car => car.condition === 'cpo').length;

const sumCPOPrices = calculateSumOfUsedPrices(jsonData);
export const formattedsumCPOPrices = sumCPOPrices.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

const averageCPOPrices = calculateAverageOfCPOPrices(jsonData);
export const formattedAverageCPOPrices = averageCPOPrices.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
