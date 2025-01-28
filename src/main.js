import './index.css';
import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons'; // Import the icon

// Add the icon to the library
library.add(faGithub, faLinkedin, faDownload);

// Create the Vue app and use the FontAwesomeIcon component globally
createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon) // Register FontAwesome globally
  .mount('#app');
