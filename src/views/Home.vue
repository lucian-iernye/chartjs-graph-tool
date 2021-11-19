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
        <p>
          {{
            chartType ? chartType[0].toUpperCase() + chartType.slice(1) : ""
          }}
          chart
        </p>
        <br />

        <!-- <LineChart v-if="type === 'line'" />
        <BarChart v-if="type === 'bar'" /> -->
        <TestChart
          :chartType="chartType"
          :chartData="chartData"
          :chartOptions="chartOptions"
        />

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
// import LineChart from "../components/static-charts/LineChart.vue";
// import BarChart from "../components/static-charts/BarChart.vue";
import TestChart from "../components/static-charts/TestChart.vue";

import ChartTypes from "@/components/ChartTypes.vue";

export default {
  name: "Home",
  components: {
    Container,
    ChartTypes,
    // LineChart,
    // BarChart,
    TestChart,
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

div.charts {
  margin: 30px auto;
  max-width: 750px;
  max-height: 401px;
  border: 1px solid lightgrey;
}
</style>
