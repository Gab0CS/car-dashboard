// components/FilterComponent.tsx
import React from 'react';
import { IoIosCloseCircle } from "react-icons/io";

interface FilterComponentProps {
  onClose: () => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ onClose }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
        
        <div className='flex justify-between items-center'>
        <h3 className="text-lg font-semibold mb-4">
            Filter Data By
        </h3>
        <button
            className="mb-5"
            onClick={onClose}>
            <IoIosCloseCircle 
            size={30}
            />
        </button>
        </div> 
        
        
        <div className="mb-4">
            <h4 className="font-semibold mb-2">
                Make
            </h4>
            <ul>
                <li>
                    <input type="checkbox" className="mr-2" /> Ford
                </li>
                <li>
                    <input type="checkbox" className="mr-2" /> Cadillac
                </li>
                <li>
                    <input type="checkbox" className="mr-2" /> Jeep
                </li>
            </ul>
        </div>
      <div className="mb-4">
        <h4 className="font-semibold mb-2">
            Duration
        </h4>
        <ul>
            <li>
                <input type="checkbox" className="mr-2" /> Last Month
            </li>
            <li>
                <input type="checkbox" className="mr-2" /> This Month
            </li>
            <li>
                <input type="checkbox" className="mr-2" /> Last 3 Months
            </li>
            <li>
                <input type="checkbox" className="mr-2" /> Last 6 Months
            </li>
            <li>
                <input type="checkbox" className="mr-2" /> This Year
            </li>
            <li>
                <input type="checkbox" className="mr-2" /> Last Year
            </li>
        </ul>
      </div>
      <div className="flex justify-between">
        <button 
        className="bg-orange-500 text-white py-2 px-4 rounded font-semibold">
            Apply Filter
        </button>
        <button 
        className="bg-white border border-gray-300 py-2 px-4 rounded font-semibold">
            Remove All Filters
        </button>
      </div>
    </div>
  );
};

export default FilterComponent;
