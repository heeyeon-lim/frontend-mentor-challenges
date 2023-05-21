import React, { useEffect, useRef, useContext } from "react";
import Chart from "chart.js";
import data from "../../data.json";
import { ThemeContext } from "styled-components";

const BarChart = () => {
  const chartRef = useRef(null);

  const theme = useContext(ThemeContext);

  const ids = data.map((el) => el.id);
  const days = data.map((el) => el.day);
  const amount = data.map((el) => el.amount);

  // Sunday = 0, Saturday = 6
  const today = new Date().getDay();

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: days,
        datasets: [
          {
            data: amount,
            backgroundColor: ids.map((id) =>
              id === today
                ? theme.primaryColors.cyan
                : theme.primaryColors.softRed
            ),
            borderRadius: "10px", //! value가 num값?
            borderWidth: 1,
          },
        ],
      },
      options: {
        legend: {
          display: false, // hide the legend
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false, // hide the vertical grid
              },
            },
          ],
          yAxes: [
            {
              display: false, // hide the y-axis and horizontal grid
            },
          ],
        },
      },
    });
  }, []);

  return <canvas ref={chartRef} />;
};

export default BarChart;
