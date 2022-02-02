import React from 'react';
import { Line, Bar } from 'react-chartjs-2'

const Charts = () => {
  const label = ['Jan', 'Feb', "Mar", `Apr`, `May`, "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]


  return (<div>
    <Line width={400} height={400} options={{ maintainAspectRatio: false }}
      data={{
        labels: ['Jan', 'Feb', "Mar", `Apr`, `May`, "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
        datasets: [{
          label: 'No of Stocks',
          data: [20, 33, 24, 45, 23, 13, 63, 32, 78, 22, 54, 12],
          backgroundColor: '#06152b',
          borderColor: "#06152b",
          fill: false
        },
        {
          label: "No of Remaining Stocks",
          data: [43, 22, 54, 33, 12, 44, 23, 35, 66, 44, 35, 76],
          backgroundColor: '#2db2ff',
          borderColor: "#2db2ff",
          fill: false
        }]
      }
      } />
  </div>);
}

export default Charts;