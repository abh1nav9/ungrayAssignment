import React from 'react';
import Comp3 from '../component/Comp3';
import Comp4 from '../component/Comp4';
import Comp5 from '../component/Comp5';

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="w-full max-w-md p-4 border border-slate-200 bg-white rounded-md shadow-sm">
        <Comp3 />
      </div>
      <div className="w-full max-w-md p-4 border border-slate-200 bg-white rounded-md shadow-sm">
        <Comp4 />
      </div>
      <div className="w-full max-w-md p-4 border border-slate-200 bg-white rounded-md shadow-sm">
        <Comp5 />
      </div>
    </div>
  );
};

export default Dashboard;
