<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  props: {
    label: {
      type: String,
    },
    chartData: {
      type: Object,
    },
    options: {
      type: Object,
    },
  },

  data() {
    return {};
  },

  mounted() {
    this.renderChart(
      {
        labels: this.chartData.labels,
        datasets: this.chartData.datasets,
      },
      this.options
    );
  },

  watch: {
    chartData() {
      this.renderChart();
    },
  },
};
</script>
