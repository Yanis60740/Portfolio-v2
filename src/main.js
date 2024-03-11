import { createApp } from 'vue'; // Importez createApp depuis 'vue' pour Vue 3
import App from './App.vue';
import store from './mixins/store';

createApp(App)
  .use(store) // Utilisez le store en tant que plugin
  .mount('#app');
