import React from "react";
import { LineChart, Line, XAxis, YAxis } from "recharts";
const data = [
  {
    id: 1,
    phy: 85,
    che: 78,
    math: 92,
  },
  {
    id: 2,
    phy: 90,
    che: 88,
    math: 95,
  },
  {
    id: 3,
    phy: 72,
    che: 65,
    math: 80,
  },
  {
    id: 4,
    phy: 95,
    che: 92,
    math: 98,
  },
  {
    id: 5,
    phy: 68,
    che: 70,
    math: 75,
  },
];
const Chart = () => {
  return (
    <div className="max-w-7xl mx-auto mt-12">
      <LineChart width={400} height={400} data={data}>
        <XAxis dataKey={"phy"}></XAxis>
        <YAxis dataKey={"math"}></YAxis>
        <Line type="monotone" dataKey="phy" stroke="#8884d8" />
        <Line type="monotone" dataKey="che" stroke="#8884d8" />
        <Line type="monotone" dataKey="math" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default Chart;
