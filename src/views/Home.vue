<template>
  <Container>
    <div class="home">
      <h1>Graph tool</h1>
      <h2>
        This tool is intended to use for visualizing charts by uploading a csv
        file or by creating a table with the relevant data.
      </h2>
      <h3>Please view some chart examples below.</h3>

      <div class="charts">
        <p>{{ type ? type[0].toUpperCase() + type.slice(1) : "" }} chart</p>
        <br />

        <CreateChart v-if="type === 'line'" :type="type" />
        <!-- <CreateChart v-if="type === 'bar'" :type="getType" /> -->

        <!-- <LineChart
          v-if="type === 'line'"
          :chartData="chartData"
          :chartOptions="chartOptions"
          :width="800"
          :height="400"
        /> -->

        <!-- <BarChart
          v-if="type === 'bar'"
          :chartData="chartData"
          :chartOptions="chartOptions"
          :width="800"
          :height="400"
        /> -->

        <!-- <PieChart
          v-if="type === 'pie'"
          :chartData="chartData"
          :chartOptions="chartOptions"
          :width="800"
          :height="400"
        /> -->

        <!-- <PolarChart
          v-if="type === 'polar'"
          :chartData="chartData"
          :chartOptions="chartOptions"
          :width="800"
          :height="400"
        /> -->

        <!-- <HorizontalBars
          v-if="type === 'horizontal'"
          :chartData="chartData"
          :chartOptions="chartOptions"
          :width="800"
          :height="400"
        /> -->

        <!-- <ScatterChart
          v-if="type === 'scatter'"
          :chartData="chartData"
          :chartOptions="chartOptions"
          :width="800"
          :height="400"
        /> -->

        <!-- <MixedChart
          v-if="type === 'mixed'"
          :chartData="chartData"
          :chartOptions="chartOptions"
          :width="800"
          :height="400"
        /> -->

        <!-- <RadarChart
          v-if="type === 'radar'"
          :chartData="chartData"
          :chartOptions="chartOptions"
          :width="800"
          :height="400"
        /> -->

        <!-- <DoughnutChart
          v-if="type === 'doughnut'"
          :chartData="chartData"
          :chartOptions="chartOptions"
          :width="800"
          :height="400"
        /> -->

        <!-- <BubbleChart
          v-if="type === 'bubble'"
          :chartData="chartData"
          :chartOptions="chartOptions"
          :width="800"
          :height="400"
        /> -->
      </div>

      <ChartTypes @updateChartType="updateChartType" />

      <h3>
        To create a new chart and to see your previouly created charts you need
        to login.
      </h3>
    </div>
  </Container>
</template>

<script>
// @ is an alias to /src
import Container from "@/components/Container.vue";

// charts
import CreateChart from "../components/static-charts/CreateChart.vue";
// import LineChart from "@/components/charts/LineChart.vue";
// import BarChart from "@/components/charts/BarChart.vue";
// import PieChart from "@/components/charts/PieChart.vue";
// import RadarChart from "@/components/charts/RadarChart.vue";
// import PolarChart from "@/components/charts/PolarChart.vue";
// import HorizontalBars from "@/components/charts/HorizontalBars.vue";
// import ScatterChart from "@/components/charts/ScatterChart.vue";
// import MixedChart from "@/components/charts/MixedChart.vue";
// import BubbleChart from "@/components/charts/BubbleChart.vue";
// import DoughnutChart from "@/components/charts/DoughnutChart.vue";

import ChartTypes from "@/components/ChartTypes.vue";

export default {
  name: "Home",
  components: {
    Container,
    ChartTypes,
    CreateChart,
    // BarChart,
    // RadarChart,
    // DoughnutChart,
    // PieChart,
    // PolarChart,
    // HorizontalBars,
    // ScatterChart,
    // MixedChart,
    // BubbleChart,
  },

  data() {
    return {
      type: "line",
      // chart data here
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
            data: [0, 0, 1, 2, 79, 82, 27, 14],
            backgroundColor: "rgba(54,73,93,.5)",
            borderColor: "#36495d",
            borderWidth: 3,
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
      //options
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
        responsive: false,
        maintainAspectRatio: false,
      },
    };
  },

  computed: {
    getType() {
      return this.type;
    },
  },

  methods: {
    updateChartType(type) {
      this.type = type;
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

div.charts {
  margin: 30px auto;
  max-width: 750px;
  max-height: 401px;
  border: 1px solid lightgrey;
}
</style>
