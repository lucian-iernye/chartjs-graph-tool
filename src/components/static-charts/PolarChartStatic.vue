<template>
  <canvas id="myChart"></canvas>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  name: "PolarChartStatic",
  props: {},

  data() {
    return {
      chartType: "polarArea",
      chartData: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: [
              "#3e95cd",
              "#8e5ea2",
              "#3cba9f",
              "#e8c3b9",
              "#c45850",
            ],
            data: [2478, 5267, 734, 784, 433],
          },
        ],
      },
      chartOptions: {
        // scales: {
        //   y: {
        //     ticks: {
        //       beginAtZero: true,
        //     },
        //     gridLines: {
        //       display: true,
        //     },
        //     // different ways to position the title
        //     title: {
        //       display: true,
        //       text: "World population per region (in millions)",
        //       // color: "red",
        //     },
        //   },

        //   x: {
        //     gridLines: {
        //       display: false,
        //     },
        //     // different ways to position the title
        //     title: {
        //       display: true,
        //       text: "Country",
        //       // color: "red",
        //     },
        //   },
        // },

        plugins: {
          legend: {
            display: true, // display or hide the legend
            position: "top", // position of the legend - top is default
            labels: {
              color: "green", // the color of the top legend
            },
            title: {
              display: true,
              text: "Predicted world population (millions) in 2050",
              align: "start",
              // color: "red",
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
      type: this.chartType,
      data: this.chartData,
      options: this.chartOptions,
    });
  },
};
</script>

<style lang="scss" scoped>
#myChart {
  max-height: 500px;
}
</style>
