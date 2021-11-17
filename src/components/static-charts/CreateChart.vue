<template>
  <div class="chart">
    <canvas id="myChart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  name: "CreateChart",
  props: {
    type: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      chartConfig: {
        labels: ["London", "Cardiff", "Birmingham", "Bristol"],
        datasets: [
          {
            label: "UK Weather",
            // fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
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
            data: ["29", "18", "20", "20"],
            // spanGaps: false,
          },
        ],
      },
    };
  },

  methods: {
    generateChart(chartData) {
      let canvas = document.getElementById("myChart");
      let options = {};
      new Chart(canvas, {
        type: this.type,
        data: chartData,
        options: options,
      });
    },
  },

  mounted() {
    this.generateChart(this.chartConfig);
  },
};
</script>

<style></style>
