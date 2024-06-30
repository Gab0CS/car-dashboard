"use client"
import React, { useState } from 'react'
import DropDownDealer from './DropDownDealer';
import FilterButton from './FilterButton';
import { dealers } from '../../constants/dealers';
import { MdFilterList } from "react-icons/md";

const Header = () => {
    const [selectedDealer, setSelectedDealer] = useState('AAA Mitsubishi Dealer');
    const handleDealerChange = (value: string) => {
        setSelectedDealer(value)
    }
  return (
    <div className='flex my-7 justify-between items-center'>
        <div className=''>
            <h2 className='text-3xl font-semibold'>Inventory</h2>
        </div>
        <div className='flex items-center'>
            
            <p className='font-medium'>
                Select Dealer
            </p>
            
            <DropDownDealer 
                    options={dealers} 
                    defaultValue={selectedDealer} 
                    onChange={handleDealerChange} 
                    styles='mx-4 px-2 cursor-pointer border-lg py-2'/>
            <FilterButton />
        </div>
    </div>
  )
}

export default Header