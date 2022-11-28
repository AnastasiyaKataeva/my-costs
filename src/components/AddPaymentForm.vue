<template>
  <div class="payment_form">
      <input placeholder="Payment amount" v-model="value"/>
      <input placeholder="Payment category" v-model="category"/>
      <input placeholder="Payment date" v-model="date"/>
      <input placeholder="Payment id" v-model="id"/>
      <button type="button" @click="onSaveClick">ADD +</button>
      <button type="button" @click="$emit('close')">Close</button>
  </div>
</template>

<script>
export default {
  name: "AddPaymentForm",
  data() {
    return {
      value: '',
      category: '',
      date: '',
      id: '',
    }
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate()
      const m = today.getMonth() + 1
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    }
  },
  methods: {
    onSaveClick() {
      const data = {
        id: this.id,
        value: this.value,
        category: this.category,
        date: this.date || this.getCurrentDate,
      }
      this.$emit('addNewPayment', data)
    }
  }
}
</script>

<style scoped>
.payment_form {
  margin-top: 60px;
  width: 300px;
  display: flex;
  flex-direction: column;
}

button {
  width: 80px;
  padding: 6px 10px;
  align-self: flex-end;
  background: #e3efd7;

}
</style>
