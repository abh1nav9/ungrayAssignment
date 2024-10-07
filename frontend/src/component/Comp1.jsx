import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Comp1 = () => {
  // State variables
  const [data, setData] = useState({
    purchases: 4294,
    revenue: 322000, // Updated to match fetched data structure
    refunds: 8200,   // Updated to match fetched data structure
  });
  const [profitLossPercentage, setProfitLossPercentage] = useState({
    purchases: 0,
    revenue: 0,
    refunds: 0,
  });
  const [error, setError] = useState(''); // State for error handling

  useEffect(() => {
    const fetchExternalData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/comp1/'); // Use Axios to fetch data
        console.log('Fetched external data:', response.data);
        calculateProfitLossPercentage(response.data); // Call calculateProfitLossPercentage with the fetched data
        setData(response.data); // Update the state with the fetched data
      } catch (error) {
        console.error('Error fetching external data:', error);
        setError(error.message); // Set the error message
      }
    };

    fetchExternalData(); // Call the function
  }, []);

  const calculateProfitLossPercentage = (data) => {
    const purchases = data.purchases || 0; // Default to 0 if undefined
    const revenue = data.revenue || 0; // Ensure a number is used
    const refunds = data.refunds || 0;

    const purchasesPL = ((purchases - 4000) / 4000) * 100; 
    const revenuePL = ((revenue - 300000) / 300000) * 100; 
    const refundsPL = ((refunds - 7000) / 7000) * 100; 

    setProfitLossPercentage({
      purchases: purchasesPL,
      revenue: revenuePL,
      refunds: refundsPL,
    });
  };

  return (
    <div className="p-4 border border-slate-200 rounded-lg shadow-sm">
      {error && <p className="text-red-500 text-center">{error}</p>} {/* Display error message if any */}
      <div className="flex justify-between">
        <div className="text-3xl font-bold">Dashboard</div>
        <div className="flex gap-3">
          <div className="text-gray-500 text-lg">Compare to</div>
          <div className="text-gray-500 text-lg border-2 border-gray-500 rounded-full w-28 text-center hover:bg-slate-300 hover:text-black pt-0.5">
            Last year
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {['Purchases', 'Revenue', 'Refunds'].map((label, index) => (
          <div key={index} className="border-2 rounded-lg p-4 w-full flex flex-col justify-between h-24 border-slate-200">
            <div className="text-lg text-slate-500">{label}</div>
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold">{data[label.toLowerCase()]}</div>
              <div className={`text-center rounded-full w-16 ${profitLossPercentage[label.toLowerCase()] >= 0 ? 'text-green-800 bg-green-200 border-green-400' : 'text-red-800 bg-red-200 border-red-400'} border-2`}>
                {profitLossPercentage[label.toLowerCase()].toFixed(2)}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comp1;
