<template>
  <div id="app">
    <main>
      <button v-on:click="showAddForm">ADD NEW COST +</button>
      <PaymentsDisplay :items="store.state.paymentsList"/>
      <AddPaymentForm v-if="isAddPaymentFormActive" v-on:close="hideAddForm" @addNewPayment="addNewPayment "/>
    </main>
  </div>
</template>

<script>

import PaymentsDisplay from "@/components/PaymentsDisplay";
import AddPaymentForm from "@/components/AddPaymentForm";
import {mapMutations} from 'vuex'
import store from './store/index.js'

export default {
  name: 'App',
  components: {PaymentsDisplay, AddPaymentForm},

  data() {
    return {
      store: store,
      isAddPaymentFormActive: false
    }
  },
  created() {
    store.dispatch('fetchData')
  },
  methods: {
    ...mapMutations({
       updatePayments: 'setPaymentsListData'
    }),
    showAddForm() {
      this.isAddPaymentFormActive = true;
    },
    hideAddForm() {
      this.isAddPaymentFormActive = false;
    },
    addNewPayment(data) {
      this.store.commit('setPaymentsListData', data)
    },
  }
}

</script>

<style>
#app {
  border: 1px solid darkslategray;
  padding: 40px 30px;
  width: 600px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-left: 60px;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  width: 180px;
  padding: 6px 10px;
  align-self: flex-end;
  background: #e3efd7;
}
</style>
