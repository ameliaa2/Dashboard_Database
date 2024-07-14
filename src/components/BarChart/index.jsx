// src/components/BarChartComponent.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChartComponent = ({label, value}) => {
    const data = {
        // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        labels: label,
        datasets: [
            {
                label: 'People',
                data: value,
                // data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio:false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false,
                // display: true,
                text: 'Chart.js Bar Chart',
            },
        },
    };
    // w-full
    return(
        <div className='max-h-[400px] max-w-[80vw] mx-auto px-5 overflow-y-hidden'>
            <Bar data={data} options={options} />;
        </div>
    ) 
};

export default BarChartComponent;
