import React from 'react';
import { 
  newUnitsCount,
  formattedPrice,
  formattedAverageNewPrices,
} from '../../constants/values';


const DataShower = () => {
  return (
    <div>
      <h1>Data Display</h1>
      <p>{newUnitsCount}</p>
      <p>{formattedPrice}</p>
      <p>{formattedAverageNewPrices}</p>
    </div>
  );
};

export default DataShower;
