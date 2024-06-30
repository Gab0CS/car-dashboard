import jsonData from '../server/data/csvjson.json'
import { 
    calculateSumOfNewPrices, 
    calculateAverageOfNewPrices 
} from './helperFunctions';

export const newUnitsCount = jsonData.filter(car => car.condition === 'new').length;

const sumNewPrices = calculateSumOfNewPrices(jsonData);
export const formattedPrice = sumNewPrices.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

const averageNewPrices = calculateAverageOfNewPrices(jsonData)
export const formattedAverageNewPrices = averageNewPrices.toLocaleString('en-US', { style: 'currency', currency: 'USD' });