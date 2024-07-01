// utils/dataProcessor.ts
import { parseISO, format } from 'date-fns';

interface Car {
  condition: string;
  description: string;
  title: string;
  brand: string;
  price: string;
  product_type: string;
  custom_label_0: string;
  timestamp: string;
}

interface ProcessedData {
  date: string;
  count: number;
}

interface ProcessedMsrpData {
  date: string;
  averagePrice: number;
}

export const processData = (data: Car[]): ProcessedData[] => {
  const newCars = data.filter(car => car.condition === 'new');

  const groupedData: { [key: string]: number } = {};
  newCars.forEach(car => {
    const date = format(parseISO(car.timestamp), 'yyyy-MM');
    if (groupedData[date]) {
      groupedData[date] += 1;
    } else {
      groupedData[date] = 1;
    }
  });

  return Object.keys(groupedData)
    .map(date => ({
      date,
      count: groupedData[date],
    }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};

export const processAverageMsrpData = (data: Car[]): ProcessedMsrpData[] => {

  const newCars = data.filter(car => car.condition === 'new');

  const groupedData: { [key: string]: { total: number; count: number } } = {};
  newCars.forEach(car => {
    const date = format(parseISO(car.timestamp), 'yyyy-MM');
    const price = parseFloat(car.price.replace(/[^\d.-]/g, '')); // Remove any non-numeric characters and parse the price
    if (groupedData[date]) {
      groupedData[date].total += price;
      groupedData[date].count += 1;
    } else {
      groupedData[date] = { total: price, count: 1 };
    }
  });

  return Object.keys(groupedData)
    .map(date => ({
      date,
      averagePrice: groupedData[date].total / groupedData[date].count,
    }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};
