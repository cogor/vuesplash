import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueMasonry from 'vue-masonry-css'
import VueProgressiveImage from 'vue-progressive-image'

Vue.use(VueProgressiveImage)

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
