// import Vue from 'vue';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import BaseCard from './components/BaseCard.vue';
import Chartkick from 'vue-chartkick';
import 'chartkick/chart.js';

const app = createApp(App);
app.use(Chartkick);
app.component('base-card',BaseCard);
app.use(store);
app.use(router)
app.mount('#app');
