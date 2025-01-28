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
  <div class="flex flex-col items-center justify-center m-auto">
    <Navbar class="w-full" />
    <Home />
    <AboutMe id="about"/>
    <!-- <Projects id="projects"/> -->
    <!-- <Contact id="contact"/> -->
  </div>
</template>

<style>

</style>
