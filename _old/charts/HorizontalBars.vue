<script>
import { HorizontalBar } from "vue-chartjs";

export default {
  extends: HorizontalBar,
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
