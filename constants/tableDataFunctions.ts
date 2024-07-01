import { format } from 'date-fns';

interface RawData {
  condition: string;
  description: string;
  title: string;
  brand: string;
  price: string;
  product_type: string;
  custom_label_0: string;
  timestamp: string;
}

interface InventoryData {
  date: string;
  newInventory: number;
  newTotalMsrp: number;
  newAverageMsrp: number;
  usedInventory: number;
  usedTotalMsrp: number;
  usedAverageMsrp: number;
}

const transformData = (rawData: RawData[]): InventoryData[] => {
  const groupedData = rawData.reduce((acc, item) => {
    const timestamp = new Date(item.timestamp);
    if (isNaN(timestamp.getTime())) {
      console.error('Invalid timestamp:', item.timestamp);
      return acc;
    }

    const month = format(timestamp, 'MMM dd, yy');
    if (!acc[month]) {
      acc[month] = {
        date: month,
        newInventory: 0,
        newTotalMsrp: 0,
        newAverageMsrp: 0,
        usedInventory: 0,
        usedTotalMsrp: 0,
        usedAverageMsrp: 0,
      };
    }

    const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));

    if (item.condition === 'new') {
      acc[month].newInventory += 1;
      acc[month].newTotalMsrp += price;
      acc[month].newAverageMsrp = acc[month].newTotalMsrp / acc[month].newInventory;
    } else {
      acc[month].usedInventory += 1;
      acc[month].usedTotalMsrp += price;
      acc[month].usedAverageMsrp = acc[month].usedTotalMsrp / acc[month].usedInventory;
    }

    return acc;
  }, {} as Record<string, InventoryData>);

  return Object.values(groupedData).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};

export { transformData };    
export type { RawData, InventoryData };

