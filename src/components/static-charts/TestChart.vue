<template>
  <canvas id="myChart"></canvas>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  name: "TestChart",
  props: {
    chartType: {
      type: String,
    },
    chartData: {
      type: Object,
    },
    chartOptions: {
      type: Object,
    },
  },

  data() {
    return {
      //   type: "",
      //   data: {},
      //   options: {},
      newChart: null,
    };
  },
  watch: {
    chartType() {
      this.destroyChart();
      this.renderChart();
    },
  },

  methods: {
    // updateChart() {
    //   this.type = this.chartType;
    //   this.data = this.chartData;
    //   this.options = this.chartOptions;
    // },
    renderChart() {
      let canvas = document.getElementById("myChart");
      this.newChart = new Chart(canvas, {
        type: this.chartType,
        data: this.chartData,
        options: this.chartOptions,
      });
    },
    destroyChart() {
      this.newChart.destroy();
    },
  },

  mounted() {
    // this.updateChart();
    this.renderChart();
  },
};
</script>

<style lang="scss" scoped></style>
