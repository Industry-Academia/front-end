import api from '../../api/axios';
import React from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

const BarChart = () => {
  api.get('/child').then((res) => {
    console.log(res);
  });

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        type: 'line',
        label: 'Dataset 1',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 2,
        data: [1, 2, 3, 4, 5, 6, 7],
      },
      {
        type: 'bar',
        label: 'Dataset 2',
        backgroundColor: 'rgb(255, 99, 132)',
        data: [1, 2, 3, 4, 5, 6, 7],
        borderColor: 'red',
        borderWidth: 2,
      },
      {
        type: 'bar',
        label: 'Dataset 3',
        backgroundColor: 'rgb(75, 192, 192)',
        data: [1, 2, 3, 4, 5, 6, 7],
      },
    ],
  };
  return (
    <Container>
      <Line type="line" data={data} />
    </Container>
  );
};

export default BarChart;

const Container = styled.div`
  width: 90vw;
  max-width: 900px;
`;
