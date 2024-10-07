import React, { useEffect, useState } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const Comp4 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dummyData = [
      { webSales: 50, offlineSales: 30 },
      { webSales: 70, offlineSales: 40 },
      { webSales: 90, offlineSales: 50 },
      { webSales: 60, offlineSales: 80 },
      { webSales: 100, offlineSales: 20 },
    ];

    setData(dummyData);
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const webSalesData = data.map(entry => entry.webSales);
      const offlineSalesData = data.map(entry => entry.offlineSales);
      const labels = data.map((_, index) => index + 1);

      const ctx = document.getElementById('myChart').getContext('2d');

      new Chart(ctx, {
        type: 'line',
        data: {
          labels,
          datasets: [
            {
              label: 'Web Sales',
              data: webSalesData,
              borderColor: 'rgba(135, 206, 235, 1)',
              backgroundColor: 'rgba(135, 206, 235, 0.5)',
              borderWidth: 2,
              fill: false,
            },
            {
              label: 'Offline Sales',
              data: offlineSalesData,
              borderColor: 'rgba(0, 0, 255, 1)',
              backgroundColor: 'rgba(0, 0, 255, 0.5)',
              borderWidth: 2,
              fill: false,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              display: false,
            },
            y: {
              title: {
                display: true,
                text: 'Sales Count',
                font: { size: 12 },
              },
              beginAtZero: true,
            },
          },
          plugins: {
            legend: {
              display: true,
              labels: {
                boxWidth: 12,
                font: { size: 12 },
              },
            },
          },
        },
      });
    }
  }, [data]);

  return (
    <div className="p-4 max-w-lg mx-auto bg-gray-50 rounded-md shadow-md border border-slate-300">
      <h1 className="text-lg font-semibold mb-2 text-center">Sales Performance</h1>
      <canvas id="myChart"></canvas>
    </div>
  );
};

export default Comp4;