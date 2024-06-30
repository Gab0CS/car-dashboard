// components/FilterButton.tsx
import React, { useState } from 'react';
import { MdFilterList } from 'react-icons/md';
import FilterComponent from './FilterComponent';

const FilterButton: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(prevShowFilters => !prevShowFilters);
  };

  return (
    <div>
      <button
        className="flex items-center px-4 py-2 border font-semibold bg-white"
        onClick={toggleFilters}
      >
        <MdFilterList className="mt-1 mr-2" style={{ color: 'orange' }} />
        FILTER DATA BY
      </button>
      {showFilters && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start pt-20">
          <FilterComponent onClose={toggleFilters} />
        </div>
      )}
    </div>
  );
};

export default FilterButton;
