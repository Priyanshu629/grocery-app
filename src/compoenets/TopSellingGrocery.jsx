import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const TopSellingGrocery = () => {
  // Sample data for top-selling products
  const data = {
    labels: ['Apples', 'Bananas', 'Milk', 'Bread', 'Chicken'],
    datasets: [
      {
        label: 'Top Selling Groceries',
        data: [1200, 1500, 800, 950, 1300], // Sales data for each product
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)', // Color for Apples
          'rgba(54, 162, 235, 0.6)', // Color for Bananas
          'rgba(255, 206, 86, 0.6)', // Color for Milk
          'rgba(75, 192, 192, 0.6)', // Color for Bread
          'rgba(153, 102, 255, 0.6)', // Color for Chicken
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const dataset = tooltipItem.dataset;
            const total = dataset.data.reduce((acc, value) => acc + value, 0);
            const currentValue = dataset.data[tooltipItem.dataIndex];
            const percentage = ((currentValue / total) * 100).toFixed(2);
            return `${tooltipItem.label}: ${currentValue} units (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <div  className='md:w-[50%] mx-auto'> 
      <h2 className='my-2 font-bold text-2xl'>Top Selling Grocery</h2>
     
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default TopSellingGrocery;
