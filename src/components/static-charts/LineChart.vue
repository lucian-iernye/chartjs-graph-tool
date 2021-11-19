<template>
  <canvas id="myChart"></canvas>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  name: "LineChart",
  props: {},

  data() {
    return {
      type: "line",
      chartData: {
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
            label: "This week",
            // fill: false,
            lineTension: 0.1,
            // borderCapStyle: "butt",
            // borderDash: [],
            // borderDashOffset: 0.0,
            // borderJoinStyle: "miter",
            // pointBorderColor: "rgba(75,192,192,1)",
            // pointBackgroundColor: "#fff",
            // pointBorderWidth: 1,
            // pointHoverRadius: 5,
            // pointHoverBackgroundColor: "rgba(75,192,192,1)",
            // pointHoverBorderColor: "rgba(220,220,220,1)",
            // pointHoverBorderWidth: 2,
            // pointRadius: 1,
            // pointHitRadius: 10,
            data: [0, 0, 1, 2, 79, 82, 27, 14],
            backgroundColor: "rgba(54,73,93,.5)",
            borderColor: "#36495d",
            borderWidth: 3,
            // spanGaps: false,
          },
          {
            label: "Last week",
            data: [
              0.166, 2.081, 3.003, 0.323, 954.792, 285.886, 43.662, 51.514,
            ],
            backgroundColor: "rgba(71, 183,132,.5)",
            borderColor: "#47b784",
            borderWidth: 3,
          },
        ],
      },
      chartOptions: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                display: true,
              },
              title: {
                display: true,
                text: "World population per region (in millions)",
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
        plugins: {
          legend: {
            display: true, // display or hide the legend
            position: "top", // position of the legend - top is default
            labels: {
              color: "green", // the color of the top legend
            },
          },
        },
        responsive: true,
        maintainAspectRatio: true,
      },
    };
  },

  methods: {},

  mounted() {
    let canvas = document.getElementById("myChart");
    new Chart(canvas, {
      type: this.type,
      data: this.chartData,
      options: this.chartOptions,
    });
  },
};
</script>

<style lang="scss" scoped></style>
