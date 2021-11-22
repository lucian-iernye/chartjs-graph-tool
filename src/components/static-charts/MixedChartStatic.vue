<template>
  <canvas id="myChart"></canvas>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  name: "MixedChartStatic",
  props: {},

  data() {
    return {
      chartType: "bar",
      chartData: {
        labels: ["1900", "1950", "1999", "2050"],
        datasets: [
          {
            label: "Europe",
            type: "line",
            borderColor: "#8e5ea2",
            data: [408, 547, 675, 734],
            fill: false,
          },
          {
            label: "Africa",
            type: "line",
            borderColor: "#3e95cd",
            data: [133, 221, 783, 2478],
            fill: false,
          },
          {
            label: "Europe",
            type: "bar",
            backgroundColor: "#3cba9f",
            data: [408, 547, 675, 734],
          },
          {
            label: "Africa",
            type: "bar",
            backgroundColor: "#e8c3b9",
            backgroundColorHover: "#3e95cd",
            data: [133, 221, 783, 2478],
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
            // different ways to position the title
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
              text: "Country",
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
              text: "Population growth (millions): Europe & Africa",
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
}
</style>
