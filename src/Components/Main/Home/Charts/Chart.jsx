import React from "react";
import data from "./chartData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const Chart = () => {
  
  return (
    <div className="">
      <LineChart
        width={800}
        height={300}
        data={data}
        margin={{
          top:10,
          right: 0,
          left: 10,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default Chart;
