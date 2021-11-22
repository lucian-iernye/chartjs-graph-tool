<template>
  <canvas id="myChart"></canvas>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  name: "BubbleChartStatic",
  props: {},

  data() {
    return {
      chartType: "bubble",
      chartData: {
        labels: "Africa",
        datasets: [
          {
            label: ["China"],
            backgroundColor: "rgba(255,221,50,0.2)",
            borderColor: "rgba(255,221,50,1)",
            data: [
              {
                x: 21269017,
                y: 5.245,
                r: 15,
              },
            ],
          },
          {
            label: ["Denmark"],
            backgroundColor: "rgba(60,186,159,0.2)",
            borderColor: "rgba(60,186,159,1)",
            data: [
              {
                x: 258702,
                y: 7.526,
                r: 10,
              },
            ],
          },
          {
            label: ["Germany"],
            backgroundColor: "rgba(0,0,0,0.2)",
            borderColor: "#000",
            data: [
              {
                x: 3979083,
                y: 6.994,
                r: 15,
              },
            ],
          },
          {
            label: ["Japan"],
            backgroundColor: "rgba(193,46,12,0.2)",
            borderColor: "rgba(193,46,12,1)",
            data: [
              {
                x: 4931877,
                y: 5.921,
                r: 15,
              },
            ],
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
              text: "Happiness",
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
              text: "GDP (PPP)",
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
              text: "Predicted world population (millions) in 2050",
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
