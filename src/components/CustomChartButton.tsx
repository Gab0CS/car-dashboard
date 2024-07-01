import React from 'react'
interface props {
    title: string;
}
const CustomChartButton = ({ title }: props) => {
  return (
    <button className='mr-3 bg-white'>
        {title}
    </button>
  )
}

export default CustomChartButton