import React from 'react';
import { TooltipProps } from 'recharts';

export const CustomTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label}`}</p>
        <p className="value">{`Value: ${payload[0].value}`}</p>
        {/* Add more custom tooltip content */}
      </div>
    );
  }

  return null;
};