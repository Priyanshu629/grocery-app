// Import necessary libraries
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the necessary chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const SalesPerCategory = () => {
  // Data for the pie chart representing grocery category sales
  const data = {
    labels: ['Fruits', 'Vegetables', 'Dairy', 'Meat', 'Snacks'],
    datasets: [
      {
        label: 'Grocery Sales',
        data: [3000, 2500, 1500, 2000, 1800], // Sales data for each category
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)', // Color for Fruits
          'rgba(54, 162, 235, 0.6)', // Color for Vegetables
          'rgba(255, 206, 86, 0.6)', // Color for Dairy
          'rgba(75, 192, 192, 0.6)', // Color for Meat
          'rgba(153, 102, 255, 0.6)', // Color for Snacks
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
        position: 'top', // Position of the legend
      },
      tooltip: {
        enabled: true, // Enable tooltips on hover
      },
    },
  };

  return (
    <div className='md:w-[50%] mx-auto'>
      <h2 className='my-3 font-bold text-2xl'>Grocery Sales Of Last Month (September)</h2>
      {/* Render the Pie Chart */}
      <Pie  data={data} options={options} />
    </div>
  );
};

export default SalesPerCategory;
