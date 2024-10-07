import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';

const Comp2 = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/data');
        const table1Data = response.data.table1;

        const months = table1Data.map(item => item.Month);
        const lastYearData = table1Data.map(item => parseInt(item.Last_year));
        const thisYearData = table1Data.map(item => parseInt(item.This_year));

        if (chartInstance.current) {
          chartInstance.current.destroy(); // Reset chart before re-rendering
        }

        const ctx = chartRef.current.getContext('2d');
        chartInstance.current = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: months,
            datasets: [
              {
                label: 'Last Year',
                data: lastYearData,
                backgroundColor: 'rgba(135, 206, 235, 0.5)', // SkyBlue with transparency
                borderColor: 'rgba(135, 206, 235, 1)', // SkyBlue
              },
              {
                label: 'This Year',
                data: thisYearData,
                backgroundColor: 'rgba(0, 0, 255, 0.5)', // Blue with transparency
                borderColor: 'rgba(0, 0, 255, 1)', // Blue
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
            plugins: {
              legend: {
                display: true,
                position: 'bottom',
              },
            },
          },
        });
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 border border-slate-200 rounded-lg shadow-sm">
      <div className="flex justify-between">
        <div className="text-xl font-bold">Comparison</div>
        <div className="flex">
          <div className="text-gray-500 text-lg border-2 border-gray-500 rounded-full w-28 text-center hover:bg-slate-300 hover:text-black">
            6 months
          </div>
        </div>
      </div>
      <div className="w-full max-w-4xl mx-auto mt-6">
        <canvas ref={chartRef} width="100" height="50"></canvas>
      </div>
    </div>
  );
};

export default Comp2;