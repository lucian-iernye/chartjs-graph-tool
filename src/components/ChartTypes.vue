<template>
  <section class="chart-types">
    <div class="first-row">
      <div class="bar-chart" @click="changeChartType('bar')">
        <img src="../assets/bars.png" alt="bar chart image" />
        <p>Bar chart</p>
      </div>
      <div class="line-chart" @click="changeChartType('line')">
        <img src="../assets/line.png" alt="line chart image" />
        <p>Line chart</p>
      </div>
      <div class="pie-chart" @click="changeChartType('pie')">
        <img src="../assets/pie.png" alt="pie chart image" />
        <p>Pie chart</p>
      </div>
      <div class="radar-chart" @click="changeChartType('radar')">
        <img src="../assets/radar.png" alt="radar chart image" />
        <p>Radar chart</p>
      </div>
      <div class="polar-chart" @click="changeChartType('polar')">
        <img src="../assets/polar.png" alt="polar chart image" />
        <p>Polar chart</p>
      </div>
    </div>

    <div class="second-row">
      <div class="doughnut-chart" @click="changeChartType('doughnut')">
        <img src="../assets/doughnut.png" alt="doughnut chart image" />
        <p>Doughnut chart</p>
      </div>
      <div class="horizontal-bars-chart" @click="changeChartType('horizontal')">
        <img src="../assets/horizontal.png" alt="horizontal bars chart image" />
        <p>Horizontal bars</p>
      </div>
      <div class="scatter-chart" @click="changeChartType('scatter')">
        <img
          src="../assets/nvvxuthhlzemg_retina.png"
          alt="scatter chart image"
        />
        <p>Scatter chart</p>
      </div>
      <div class="mixed-chart" @click="changeChartType('mixed')">
        <img src="../assets/mixed.png" alt="mixed chart image" />
        <p>Mixed chart</p>
      </div>
      <div class="bubble-chart" @click="changeChartType('bubble')">
        <img src="../assets/bubbles.png" alt="bubble chart image" />
        <p>Bubble chart</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ChartTypes",
  props: {
    type: {
      String,
    },
  },
  data() {
    return {};
  },
  methods: {
    changeChartType(type) {
      this.$emit("updateChartType", type);
    },
  },
};
</script>

<style lang="scss" scoped>
section.chart-types {
  .first-row,
  .second-row {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    div {
      border: 1px solid rgba(141, 141, 141, 0.3);
      width: 140px;
      height: 120px;
      background: rgba(219, 216, 216, 0.6);
      border-radius: 5px;
      box-shadow: 2px 2px 2px rgba(202, 201, 201, 0.9);
      margin: 4px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &:hover {
        transform: scale(1.07);
        cursor: pointer;
      }

      img {
        width: 100px;
        background: transparent;
      }

      p {
        background: transparent;
        font-size: 12px;
        margin-top: 8px;
      }
    }

    .scatter-chart {
      img {
        width: 80px;
      }
    }
  }
}
</style>
