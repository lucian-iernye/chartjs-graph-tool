<template>
  <canvas id="myChart"></canvas>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  name: "ScatterChartStatic",
  props: {},

  data() {
    return {
      chartType: "scatter",
      chartData: {
        labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
        datasets: [
          {
            data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
            label: "Africa",
            borderColor: "#3e95cd",
            backgroundColor: "#3e95cd",
            fill: false,
          },
          {
            data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
            label: "Asia",
            borderColor: "#8e5ea2",
            backgroundColor: "#8e5ea2",
            fill: false,
          },
          {
            data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
            label: "Europe",
            borderColor: "#3cba9f",
            backgroundColor: "#3cba9f",
            fill: false,
          },
          {
            data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
            label: "Latin America",
            borderColor: "#e8c3b9",
            backgroundColor: "#e8c3b9",
            fill: false,
          },
          {
            data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
            label: "North America",
            borderColor: "#c45850",
            backgroundColor: "#c45850",
            fill: false,
          },
        ],
      },
      chartOptions: {
        scales: {
          y: {
            ticks: {
              beginAtZero: true,
            },
            gridLines: {
              display: true,
            },
            title: {
              display: true,
              text: "World population per region (in millions)",
              // color: "red",
            },
          },

          x: {
            gridLines: {
              display: false,
            },
            // different ways to position the title
            title: {
              display: true,
              text: "Year",
              // color: "red",
            },
          },
        },

        plugins: {
          legend: {
            display: true, // display or hide the legend
            position: "top", // position of the legend - top is default
            labels: {
              color: "green", // the color of the top legend
            },
            title: {
              display: true,
              text: "World population per region (in millions)",
              align: "start",
              // color: "red",
            },
          },
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },

  methods: {},

  mounted() {
    let canvas = document.getElementById("myChart");
    new Chart(canvas, {
      type: this.chartType,
      data: this.chartData,
      options: this.chartOptions,
    });
  },
};
</script>

<style lang="scss" scoped>
#myChart {
  height: 500px;
  max-height: 500px;
}
</style>
