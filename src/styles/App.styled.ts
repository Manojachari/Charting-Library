import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

export const ChartContainer = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const ControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;

  button {
    margin: 0 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;