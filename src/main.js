// main.js - Vue.js entry point
import { createApp } from 'vue';
import App from '/src/App.vue';
import router from '/src/router';
import vuetify from './plugins/vuetify';

const app = createApp(App);

// Use router and Vuetify
app.use(router);
app.use(vuetify);

app.mount('#app');
