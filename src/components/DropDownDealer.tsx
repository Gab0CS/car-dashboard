import React from 'react';

interface DropDownDealerProps {
  options: { value: string; label: string }[];
  defaultValue?: string;
  onChange: (value: string) => void;
  styles: string;
}

const DropDownDealer: React.FC<DropDownDealerProps> = ({
  options,
  defaultValue,
  onChange,
  styles
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return (
    <select 
        defaultValue={defaultValue} 
        onChange={handleChange}
        className={styles}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default DropDownDealer;
