"use client"
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { processData } from '../../constants/chartsProcessors';
import CustomChartButton from './CustomChartButton';
import CustomChartButton2 from './CustomChartButton2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

interface NewCarsChartProps {
  data: any[];
}

const NewCarsChart: React.FC<NewCarsChartProps> = ({ data }) => {
  const processedData = processData(data);

  const chartData = {
    labels: processedData.map(item => item.date),
    datasets: [
      {
        data: processedData.map(item => item.count),
        backgroundColor: 'orange',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'New Cars by Month',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div>
        <div className='flex items-center my-3'>
            <h3 className='font-semibold mr-4'>Inventory Count</h3>
            <CustomChartButton title='NEW' />
            <CustomChartButton2 title='USED' />
            <CustomChartButton2 title='CPO' />
        </div>
        <div style={{ height: '400px' }}>
            <Bar data={chartData} options={options} />
        </div>
    </div>
    
  );
};

export default NewCarsChart;
