<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          id: 1,
          name: 'Bird Watching',
          image: '/src/assets/birdwatchingScreenshot.png',
          description:
            "This is my first attempt at any website that I have ever done so it is a bit rough but it shows where I've been.",
          stack: ['HTML', 'CSS', 'JavaScript'],
          githubLink: 'https://github.com/robinkelsickii/birdwatching-project',
          liveDemo: 'https://robinkelsickii.github.io/birdwatching-project/',
        },
        {
          id: 2,
          name: 'Bouncing Balls',
          image: '/src/assets/bouncingBallsScreenshot.png',
          description:
            'I decided to take on the bouncing balls from Microsoft Learn. You simply open the site and see balls flying on the page, changing color on any contact.',
          stack: ['HTML', 'CSS', 'JavaScript'],
          githubLink: 'https://github.com/robinkelsickii/bouncing-balls',
          liveDemo: 'https://robinkelsickii.github.io/bouncing-balls/',
        },
        {
          id: 3,
          name: 'The Mind Reader',
          image: '/src/assets/mindReaderScreenshot.png',
          description:
            'This website is supposed to have you think of a number, perform a calculation, then guess that number. Naturally it was my earlier days so it is a bit rough around the edges. Still it was fun because I love complex math calculations in programming.',
          stack: ['HTML', 'CSS', 'JavaScript'],
          githubLink: 'https://github.com/robinkelsickii/mindreaders',
          liveDemo: 'https://robinkelsickii.github.io/mindreaders/',
        },
      ],
    }
  },
}
</script>

<template>
  <div class="container mx-auto p-6">
    <h1 class="text-4xl font-bold mb-6 text-center">Projects</h1>
    <div class="flex flex-wrap justify-center gap-6">
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-1/2 lg:w-1/3"
      >
        <div class="flex justify-center items-center h-48 bg-gray-100">
          <img :src="project.image" :alt="project.name" class="object-contain h-full pt-2" />
        </div>
        <div class="p-4">
          <h2 class="text-2xl font-bold mb-2">{{ project.name }}</h2>
          <p class="text-gray-700 mb-4">{{ project.description }}</p>
          <div class="mb-4">
            <span
              v-for="tech in project.stack"
              :key="tech"
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {{ tech }}
            </span>
          </div>
          <div class="flex justify-between">
            <a :href="project.githubLink" target="_blank" class="btn btn-ghost">GitHub</a>
            <a :href="project.liveDemo" target="_blank" class="btn btn-ghost">Live Demo</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any styles specific to this component here */
</style>
