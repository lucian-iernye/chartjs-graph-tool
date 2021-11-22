<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
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

  methods: {
    saveChart() {
      const file = this.toBase64Image();
      console.log(file);
      return file;
    },
  },

  mounted() {
    this.renderChart(
      {
        labels: this.chartData.labels,
        datasets: this.chartData.datasets,
      },
      this.options
    );
    const btn = this.$createElement("button");
    btn.data = "Helllo";
    console.log(btn);
  },

  watch: {
    chartData() {
      this.renderChart();
    },
  },
};
</script>
