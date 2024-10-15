
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);


const SalesOverView = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Total Sales',
            data: [3000, 5000, 4000, 7000, 2000, 6000, 8000], 
            fill: false,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(75,192,192,1)',
            tension: 0.4,
          },
        ],
      };
      
      const options = {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
      };
      


  return (
    <div>
    <h2 className='font-bold text-2xl '>Sales Overview</h2>
    <Line data={data} options={options} />
  </div>
  )
}

export default SalesOverView
