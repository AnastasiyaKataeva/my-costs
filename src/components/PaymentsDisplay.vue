<template>
  <div class="payments_display">
    <h1>My personal costs</h1>

    <table>
      <tr class="payments_list">
        <th>#</th>
        <th>Date</th>
        <th>Category</th>
        <th>Value</th>
      </tr>
      <tr v-for="item of items" v-bind:key="item.id" class="payments_list">
        <td class="category_list">{{ item.id }}</td>
        <td class="category_list">{{ item.date }}</td>
        <td class="category_list">{{ item.category }}</td>
        <td class="category_list">{{ item.value }}</td>
      </tr>
    </table>

  </div>
</template>

<script>
import AddPaymentForm from "@/components/AddPaymentForm";
export default {
  name: 'PaymentsDisplay',
  components: {AddPaymentForm},

  props: {
    items: {
      type: Array,
      default: [],
    }
  },
}
</script>

<style scoped>
.payments_display {
  width: 600px;
}
table {
  text-align: center;
  width: 100%;
  margin-top: 40px;
  border-spacing: 0;
}
td, th {
  border-bottom: 1px solid grey;
}
h1 {
  color: #0e4e3b;
}

</style>
