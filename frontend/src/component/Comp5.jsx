import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Comp5 = () => {
  const [data, setData] = useState({
    negative: 12,
    positive: 134,
    neutral: 34,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/comp5/');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const total = data.positive + data.neutral + data.negative;
  const positivePercentage = total ? (data.positive / total) * 100 : 0;
  const neutralPercentage = total ? (data.neutral / total) * 100 : 0;
  const negativePercentage = total ? (data.negative / total) * 100 : 0;

  const totalWidth = 300;
  const positiveWidth = (positivePercentage / 100) * totalWidth;
  const neutralWidth = (neutralPercentage / 100) * totalWidth;
  const negativeWidth = (negativePercentage / 100) * totalWidth;

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md border border-slate-300">
      <h1 className="text-xl font-bold mb-4 text-center">Community Feedback</h1>

      <div className="flex w-full h-2 mx-auto my-2">
        <div
          style={{ width: `${negativePercentage}%`, backgroundColor: '#f87171' }}
          className="h-2"
        ></div>
        <div
          style={{ width: `${neutralPercentage}%`, backgroundColor: '#fcd34d' }}
          className="h-2"
        ></div>
        <div
          style={{ width: `${positivePercentage}%`, backgroundColor: '#4ade80' }}
          className="h-2"
        ></div>
      </div>

      <div className="mt-4 text-center">
        <div className="flex justify-around text-sm font-medium text-gray-600">
          <span className="text-red-400">Negative</span>
          <span className="text-yellow-300">Neutral</span>
          <span className="text-green-400">Positive</span>
        </div>
        <div className="flex justify-around text-lg font-bold mt-1">
          <span>{data.negative}</span>
          <span>{data.neutral}</span>
          <span>{data.positive}</span>
        </div>
      </div>
    </div>
  );
};

export default Comp5;
