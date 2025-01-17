import React from 'react'
interface props {
    title: string;
}
const CustomChartButton = ({ title }: props) => {
  return (
    <button className='mr-3 bg-white px-6 py-4 rounded-md'
    style={{ background: 'orange' }}>
        {title}
    </button>
  )
}

export default CustomChartButton