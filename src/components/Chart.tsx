import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartData } from '../utils/data';
import { CustomTooltip } from './Tooltip';

interface ChartProps {
  data: ChartData[];
  timeframe: string;
  onTimeframeChange: (timeframe: string) => void;
}

const Chart: React.FC<ChartProps> = ({ data, timeframe, onTimeframeChange }) => {
    const filteredData = data.filter((item) => {
        // Filter data based on the selected timeframe
        switch (timeframe) {
          case 'daily':
            return item.timestamp.includes('-');
          case 'weekly':
            return item.timestamp.startsWith('2024-W');
          case 'monthly':
            return item.timestamp.includes('-05-') || item.timestamp.includes('-06-');
          default:
            return true;
        }
      });

  const handleClick = (data: any) => {
    console.log(data);
    // Display details in a tooltip or modal
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={filteredData}>
      <XAxis dataKey="timestamp" type="category" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" onClick={handleClick} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;