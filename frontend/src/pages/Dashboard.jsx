import React from 'react';
import Comp1 from '../component/Comp1';
import Comp2 from '../component/Comp2';
import Comp6 from '../component/Comp6';

const Dashboard = () => {
  return (
    <div className="flex flex-col space-y-4">
      <Comp1 />
      <Comp2 />
      <Comp6 />
    </div>
  );
};

export default Dashboard;