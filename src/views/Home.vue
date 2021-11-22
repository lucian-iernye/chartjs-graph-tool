<template>
  <Container>
    <div class="home">
      <h1>Graph tool</h1>
      <h2>
        This tool is intended to use for visualizing charts by uploading a csv
        file or by creating a table with the relevant data.
      </h2>
      <h3>Please view some chart examples below.</h3>

      <div class="example-charts">
        <p>
          {{ chartType ? chartType[0].toUpperCase() + chartType.slice(1) : "" }}
          chart
        </p>
        <br />

        <div class="chart-container">
          <line-chart-static v-if="chartType === 'line'" />
          <bar-chart-static v-if="chartType === 'bar'" />
          <horizontal-bar-static v-if="chartType === 'horizontal'" />
          <pie-chart-static v-if="chartType === 'pie'" />
          <doughnut-chart-static v-if="chartType === 'doughnut'" />
          <radar-chart-static v-if="chartType === 'radar'" />
          <polar-chart-static v-if="chartType === 'polar'" />
          <scatter-chart-static v-if="chartType === 'scatter'" />
          <mixed-chart-static v-if="chartType === 'mixed'" />
          <bubble-chart-static v-if="chartType === 'bubble'" />
        </div>
      </div>

      <ChartTypes @updateChartType="updateChartType" />

      <h3>
        To create a new chart and to see your previouly created charts you need
        to login.
      </h3>
      <button class="btn btn-primary new-chart-btn">Create a new chart</button>
    </div>
  </Container>
</template>

<script>
// @ is an alias to /src
import Container from "@/components/Container.vue";

// charts
import ChartTypes from "@/components/ChartTypes.vue";
import LineChartStatic from "../components/static-charts/LineChartStatic.vue";
import BarChartStatic from "../components/static-charts/BarChartStatic.vue";
import HorizontalBarStatic from "../components/static-charts/HorizontalBarStatic.vue";
import PieChartStatic from "../components/static-charts/PieChartStatic.vue";
import DoughnutChartStatic from "../components/static-charts/DoughnutChartStatic.vue";
import RadarChartStatic from "../components/static-charts/RadarChartStatic.vue";
import PolarChartStatic from "../components/static-charts/PolarChartStatic.vue";
import ScatterChartStatic from "../components/static-charts/ScatterChartStatic.vue";
import MixedChartStatic from "../components/static-charts/MixedChartStatic.vue";
import BubbleChartStatic from "../components/static-charts/BubbleChartStatic.vue";

export default {
  name: "Home",
  components: {
    Container,
    ChartTypes,
    LineChartStatic,
    BarChartStatic,
    HorizontalBarStatic,
    PieChartStatic,
    DoughnutChartStatic,
    RadarChartStatic,
    PolarChartStatic,
    ScatterChartStatic,
    MixedChartStatic,
    BubbleChartStatic,
  },

  data() {
    return {
      chartType: "line",
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

  computed: {},

  methods: {
    updateChartType(type) {
      this.chartType = type;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("../styles/normalization.scss");

h2 {
  margin-top: 40px;
}

h3 {
  margin-top: 40px;
}

.example-charts {
  width: 750px;
  max-width: 750px;
  margin: 30px auto;
  border: 1px solid rgba(212, 212, 212, 0.4);
  padding: 16px;
}

.chart-container {
  width: 100%;
  height: 100%;
  background-color: rgb(235, 235, 235);
}

.new-chart-btn {
  margin: 50px auto;
}
</style>
