import React, { useState } from 'react';
import Chart from './components/Chart';
import { AppContainer, ChartContainer, ControlsContainer } from './styles/App.styled';
import { data } from './utils/data';

const App: React.FC = () => {
  const [timeframe, setTimeframe] = useState<string>('daily');

  const handleTimeframeChange = (newTimeframe: string) => {
    setTimeframe(newTimeframe);
  };

  return (
    <AppContainer>
      <ChartContainer>
        <ControlsContainer>
          <button onClick={() => handleTimeframeChange('daily')}>Daily</button>
          <button onClick={() => handleTimeframeChange('weekly')}>Weekly</button>
          <button onClick={() => handleTimeframeChange('monthly')}>Monthly</button>
        </ControlsContainer>
        <Chart data={data} timeframe={timeframe} onTimeframeChange={handleTimeframeChange} />
      </ChartContainer>
    </AppContainer>
  );
};

export default App;