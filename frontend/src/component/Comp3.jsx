import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Comp3 = () => {
  const [data, setData] = useState({
    score: 30,
    title: 'You are Good.',
    message: 'Your sales performance is better than others',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/comp3/');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const radius = 80; 
  const normalizedRadius = radius - 8; 
  const circumference = normalizedRadius * Math.PI;
  const strokeDashoffset = circumference - (data.score / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md border border-gray-300 max-w-lg mx-auto">
      <h1 className="text-xl font-semibold mb-4 text-center text-gray-800">Performance Score</h1>
      <div className="relative flex items-center justify-center mb-4">
        <svg height={radius * 2} width={radius * 2}>
          <circle
            cx={radius}
            cy={radius}
            r={normalizedRadius}
            stroke="#f0f0f0"
            fill="transparent"
            strokeWidth={8}
          />
          <circle
            cx={radius}
            cy={radius}
            r={normalizedRadius}
            stroke="#4ade80"
            fill="transparent"
            strokeWidth={8}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{ transition: 'stroke-dashoffset 0.5s ease' }}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute flex items-center justify-center w-full h-full">
          <span className="text-2xl font-bold text-gray-800">{data.score}</span>
        </div>
      </div>
      <h2 className="text-lg font-medium text-gray-700">{data.title}</h2>
      <p className="text-sm text-gray-500 text-center mt-2">{data.message}</p>
    </div>
  );
};

export default Comp3;
