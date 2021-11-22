<template>
  <canvas id="myChart"></canvas>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  name: "RadarChartStatic",
  props: {},

  data() {
    return {
      chartType: "radar",
      chartData: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [
          {
            label: "1950",
            fill: true,
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "#3e95cd",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(179,181,198,1)",
            data: [8.77, 55.61, 21.69, 6.62, 6.82],
          },
          {
            label: "2050",
            fill: true,
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "#8e5ea2",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            data: [25.48, 54.16, 7.61, 8.06, 4.45],
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
              text: "Distribution in % of world population",
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
