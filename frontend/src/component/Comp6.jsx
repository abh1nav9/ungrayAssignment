import React, { useEffect, useState } from "react";
import axios from "axios";

const Comp6 = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/data");
      setProducts(response.data.table2); // assuming your API returns the data in the mentioned format
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-4 border border-slate-200 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-3">Top Products</h2>
      <table className="min-w-full table-auto border-collapse">
        <thead className="bg-gray-50">
          <tr>
            <th className="text-left text-sm p-2">Product</th>
            <th className="text-left text-sm p-2">Sold</th>
            <th className="text-left text-sm p-2">Unit Price</th>
            <th className="text-left text-sm p-2">Revenue</th>
            <th className="text-left text-sm p-2">Rating</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="border-t">
              <td className="text-sm p-2">{product.Product}</td>
              <td className="text-sm p-2">{product.sold_amount}</td>
              <td className="text-sm p-2">{product.unit_price}</td>
              <td className="text-sm p-2">{product.revenue}</td>
              <td className="text-sm p-2">{product.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Comp6;
