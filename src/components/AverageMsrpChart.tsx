"use client"
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { processAverageMsrpData } from '../../constants/chartsProcessors';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

interface AverageMsrpChartProps {
  data: any[];
}

const AverageMsrpChart: React.FC<AverageMsrpChartProps> = ({ data }) => {
  const processedData = processAverageMsrpData(data);

  const chartData = {
    labels: processedData.map(item => item.date),
    datasets: [
      {
        data: processedData.map(item => item.averagePrice),
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
        text: 'Average MSRP by Month',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value: number) {
            return '$' + value.toLocaleString();
          },
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{ height: '400px' }} className='my-10'>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default AverageMsrpChart;
