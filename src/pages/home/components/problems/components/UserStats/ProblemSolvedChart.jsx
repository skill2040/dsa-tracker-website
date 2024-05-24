import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { format, addDays, subDays } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './ProblemSolved.css'

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Set global font options
ChartJS.defaults.font.family = 'Poppins, sans-serif';

const ProblemSolvedChart = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [data, setData] = useState([4, 3, 7, 3, 5, 2, 2]);

  const handlePreviousWeek = () => {
    setCurrentDate(subDays(currentDate, 7));
  };

  const handleNextWeek = () => {
    setCurrentDate(addDays(currentDate, 7));
  };

  const generateLabels = (startDate) => {
    const labels = [];
    for (let i = 0; i < 7; i++) {
      labels.push(format(addDays(startDate, i), 'd'));
    }
    return labels;
  };

  const chartData = {
    labels: generateLabels(currentDate),
    datasets: [
      {
        label: 'Problems Solved',
        data: data,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.4, // Adjust this value to control the smoothness
        pointRadius: 5,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        labels: {
          font: {
            family: 'Poppins, sans-serif',
          },
        },
      },
      tooltip: {
        bodyFont: {
          family: 'Poppins, sans-serif',
        },
        titleFont: {
          family: 'Poppins, sans-serif',
        },
      },
    },
  };

  return (
    <div className="ProblemSolvedFrame">
      <div className="ProblemsSolvedHeader">
        <h3>Problems Solved</h3>
        <div className="ProblemSolvedNavigation">
          <button onClick={handlePreviousWeek}>
            <FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: '1.2em' }} />
          </button>
          <span>{format(currentDate, 'yyyy MMM')}</span>
          <button onClick={handleNextWeek}>
            <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: '1.2em' }} />
          </button>
        </div>
      </div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default ProblemSolvedChart;
