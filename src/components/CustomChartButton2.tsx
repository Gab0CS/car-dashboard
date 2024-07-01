import React from 'react'
interface props {
    title: string;
}
const CustomChartButton2 = ({ title }: props) => {
  return (
    <button className='mr-3 bg-white px-6 py-4 rounded-md'
    style={{ border: '1px solid orange' }}>
        {title}
    </button>
  )
}

export default CustomChartButton2