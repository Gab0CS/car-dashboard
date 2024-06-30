import React from 'react';
import StatShower from '@/components/StatShower';
import { 
  newUnitsCount,
  formattedPrice,
  formattedAverageNewPrices,
  usedUnitsCount,
  formattedUsedPrices,
  formattedAverageUsedPrices,
  cpoUnitsCount,
  formattedsumCPOPrices,
  formattedAverageCPOPrices
} from '../../constants/values';


const DataShower = () => {
  return (
    <div>
      <h3>Recent Gathered Data 04/01/2024</h3>
      <div className='flex flex-wrap my-9 justify-strech'>
        
        <StatShower 
          value={newUnitsCount.toString()}
          title='# New Units'/>
          
        <StatShower 
          value={formattedPrice}
          title='# New MSRP'/>

        <StatShower 
          value={formattedAverageNewPrices}
          title='New Avg. MSRP'
        />

        <StatShower 
          value={usedUnitsCount.toString()}
          title='# Used Units'
        />

        <StatShower 
          value={formattedUsedPrices}
          title='Used MSRP'
        />

        <StatShower 
          value={formattedAverageUsedPrices}
          title='Used Avg. MSRP'
        />

        <StatShower 
          value={cpoUnitsCount.toString()}
          title='# CPO Units'
        />

        <StatShower 
          value={formattedsumCPOPrices}
          title='CPO MSRP'
        />

        <StatShower 
          value={formattedAverageCPOPrices.toString()}
          title='Avg. CPO MSRP'
        />
      </div>
    </div>
  );
};

export default DataShower;
