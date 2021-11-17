<script>
import { Bubble } from "vue-chartjs";

export default {
  extends: Bubble,
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
