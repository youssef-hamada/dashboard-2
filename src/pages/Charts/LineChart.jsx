import React from "react";
import { Header, LineChart } from "../../components";

const Line = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Chart" title="Inflation Rate in Percentage" />

      <div className="w-full h-400">
        <LineChart />
      </div>
    </div>
  );
};

export default Line;
