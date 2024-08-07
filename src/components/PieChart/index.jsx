// "use client"
// components/PieChart.js
// import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({label, value}) => {
    console.log(label)
    console.log(value)
    const data = {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        labels: label,
        datasets: [
            {
                label: '# of Votes',
                // data: [12, 19, 3, 5, 2, 3],
                data: value,
                backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)',
                    // 'rgba(75, 192, 192)',
                    // 'rgba(153, 102, 255)',
                    // 'rgba(255, 159, 64)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    // 'rgba(75, 192, 192, 1)',
                    // 'rgba(153, 102, 255, 1)',
                    // 'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, 
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: 'Pie Chart Example',
            },
        },
    };

    return (
        <div className='max-h-[400px] w-[600px] overflow-y-hidden'>
            <Pie data={data} options={options} />;
        </div>
    )
};

export default PieChart;
