<template>
  <BarChart :chartData="testData" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { BarChart } from 'vue-chart-3';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default defineComponent({
  name: 'Home',
  components: { BarChart },
  setup() {
    const testData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Bitcoin',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          backgroundColor: '#4bc0c0',
        },
        {
          label: 'Ethereum',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          backgroundColor: '#565656',
        },
      ],
    };

    return { testData };
  },
});
</script>
