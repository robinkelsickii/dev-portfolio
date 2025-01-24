<script>
import AboutMe from './components/AboutMe.vue'
import Contact from './components/Contact.vue'
import Projects from './components/Projects.vue'
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: { Home, AboutMe, Projects, Contact, Navbar },
}
</script>

<template>
  <Navbar />
  <Home />
  <AboutMe id="about" class="slideIn" />
  <Projects id="projects" class="slideIn" />
  <Contact id="contact" class="slideIn" />
</template>

<style>
.slideIn {
  opacity: 0;
  transform: translateX(-100px); /* Start off-screen */
  animation: slideInFromLeft 1s forwards;
}

@keyframes slideInFromLeft {
  to {
    opacity: 1;
    transform: translateX(0); /* Move to original position */
  }
}
</style>
