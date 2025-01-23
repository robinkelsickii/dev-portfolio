<script>
import AboutMe from './components/AboutMe.vue'
import Contact from './components/Contact.vue'
import Projects from './components/Projects.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: { AboutMe, Projects, Contact, Navbar },
}
</script>

<template>
  <div>
    <Navbar />
    <div
      class="home flex items-center justify-center min-h-screen px-4 py-16 sm:px-6 lg:px-8"
      id="home"
    >
      <div class="hero min-h-screen flex items-center justify-center">
        <div class="hero-content text-center">
          <div class="max-w-md mx-auto">
            <h1 class="typingEffect text-5xl sm:text-6xl font-roboto-mono">Hi! I'm Robin!</h1>
            <p class="py-6 font-roboto-mono text-lg sm:text-xl">
              I'm a full-stack software developer from Kentucky. Together, we can build anything
              from scratch if we put our minds to it. Explore my life and passion projects, and
              let's turn your dream into reality.
            </p>
            <a href="#contact" class="btn btn-primary mt-4"> Contact Me </a>
          </div>
        </div>
      </div>
    </div>
    <section id="about" class="py-16">
      <div class="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <AboutMe />
      </div>
    </section>
    <section id="projects" class="py-16">
      <div class="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <Projects />
      </div>
    </section>
    <section id="contact" class="py-16">
      <div class="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <Contact />
      </div>
    </section>
  </div>
</template>

<style>
/* Add any global styles here */
</style>
