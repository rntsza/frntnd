import React from "react";
import ModelCarousel from "../ModelCarousel";
import RecentCreations from '../RecentCreations';

// react function component
const Dashboard: React.FC = () => {
  return (
    <>
      {/* <h1 className="text-white">Dashboard</h1> */}
      {/* <hr></hr> */}
      <div className="bg-black p-8 flex justify-center">
        <ModelCarousel />
      </div>
      <div className="min-h-screen bg-black p-8">
        <RecentCreations />
      </div>
    </>
  );
};

export default Dashboard;
