export const planetChartData = {
  type: "line",
  data: {
    labels: [
      "Mercury",
      "Venus",
      "Earth",
      "Mars",
      "Jupiter",
      "Saturn",
      "Uranus",
      "Neptune",
    ],
    datasets: [
      {
        label: "Number of Moons",
        data: [0, 0, 1, 2, 79, 82, 27, 14],
        backgroundColor: "rgba(54,73,93,.5)",
        borderColor: "#36495d",
        borderWidth: 3,
      },
      {
        label: "Planetary Mass (relative to the Sun x 10^-6)",
        data: [0.166, 2.081, 3.003, 0.323, 954.792, 285.886, 43.662, 51.514],
        backgroundColor: "rgba(71, 183,132,.5)",
        borderColor: "#47b784",
        borderWidth: 3,
      },
    ],
  },
  options: {
    responsive: true,
    // lineTension: 0,
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 10, // to restrict how many lines will show in the grid
        },
        grid: {
          display: true,
          color: "rgb(233, 209, 106)",
          lineWidth: 0.5,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    // scales: {
    //   y: {
    //     beginAtZero: true,
    //   },
    // },
    plugins: {
      legend: {
        display: true, // display or hide the legend
        position: "top", // position of the legend - top is default
        labels: {
          color: "green", // the color of the top legend
        },
      },
    },
    responsive: false,
    maintainAspectRatio: false,
  },
};

export default planetChartData;
