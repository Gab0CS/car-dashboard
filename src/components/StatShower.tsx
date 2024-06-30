import React from 'react'

interface StatShowerProps {
  value: string;
  title: string;
}

const StatShower = ({ value, title }: StatShowerProps ) => {
  return (
    <div 
    className='px-8 py-6 border font-semibold bg-white 
    mx-2 rounded-md w-1/8'
    // style={{ minWidth: '100px', maxWidth: '100%'}}
    >
      
      <h4 className='text-md mb-2 nowrap'>
        {value}
      </h4>
      
      <h5 className='text-xs text-orange-500 nowrap'>
        {title}
      </h5>

    </div>
  )
}

export default StatShower