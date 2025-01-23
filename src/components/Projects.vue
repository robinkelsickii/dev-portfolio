<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          id: 1,
          name: 'Bird Watching',
          image: '/assets/birdWatchngSs.png',
          description:
            "This is my first attempt at any website that I have ever done so it is a bit rough but it shows where I've been.",
          stack: ['HTML', 'CSS', 'JavaScript'],
          githubLink: 'https://github.com/robinkelsickii/birdwatching-project',
          liveDemo: 'https://robinkelsickii.github.io/birdwatching-project/',
        },
        {
          id: 2,
          name: 'Bouncing Balls',
          image: '/assets/bouncingBallsSs.png',
          description:
            'I decided to take on the bouncing balls from Microsoft Learn. You simply open the site and see balls flying on the page, changing color on any contact.',
          stack: ['HTML', 'CSS', 'JavaScript'],
          githubLink: 'https://github.com/robinkelsickii/bouncing-balls',
          liveDemo: 'https://robinkelsickii.github.io/bouncing-balls/',
        },
        {
          id: 3,
          name: 'The Mind Reader',
          image: '/assets/mindReaderSs.png',
          description:
            'This website is supposed to have you think of a number, perform a calculation, then guess that number. Naturally it was my earlier days so it is a bit rough around the edges. Still it was fun because I love complex math calculations in programming.',
          stack: ['HTML', 'CSS', 'JavaScript'],
          githubLink: 'https://github.com/robinkelsickii/mindreaders',
          liveDemo: 'https://robinkelsickii.github.io/mindreaders/',
        },
        {
          id: 4,
          name: 'Silly Stories',
          image: '/assets/sillyStorySs.png',
          description:
            'Here, I created a little silly story that takes any input that you put in and adlibs it into a silly story.',
          stack: ['HTML', 'CSS', 'JavaScript'],
          githubLink: 'https://github.com/robinkelsickii/silly-story',
          liveDemo: 'https://robinkelsickii.github.io/silly-story/',
        },
        {
          id: 5,
          name: 'Alarm Clock',
          image: '/assets/alarmClockSs.png',
          description:
            'This alarm clock displays the relative time to you based on your location. It also doubles as an alarm clock that sends a notification to your browser when it is time to go.',
          stack: ['HTML', 'CSS', 'JavaScript'],
          githubLink: 'https://github.com/robinkelsickii/alarm-clock',
          liveDemo: 'https://robinkelsickii.github.io/alarm-clock/',
        },
        {
          id: 6,
          name: 'Url Shortener',
          image: '/assets/urlShortnerSs.png',
          description:
            'This is one of my more recent projects using Vue. It was a way for me to get back into my skills after taking a break from programming. It is a simple site that uses an API to shorten a url so that you don"t have to type in a super long one.',
          stack: ['Vue 3', 'Axios', 'is.gd Api', 'JavaScript'],
          githubLink: 'https://github.com/robinkelsickii/url-shortner',
          liveDemo: 'https://bobinos-url-shortner.netlify.app/',
        },
        {
          id: 6,
          name: 'Mind Mingle',
          image:
            'https://fakeimg.pl/600x400?text=This+Project+is+in+progress&font=lobster&font_size=36',
          description:
            'My first project That I decided to go live with one day. It is a site that will connect people struggling with mental illness with other people, resources, and a plan to use an AI therapist that will not replace a real therapist. It is to provide insight and to help navigate thoughts.',
          stack: ['Mongo', 'Express', 'React', 'NodeJs'],
          githubLink: 'https://github.com/robinkelsickii/Mind-Mingle/tree/main/client',
          liveDemo: 'https://github.com/robinkelsickii/Mind-Mingle/tree/main/client',
        },
      ],
    }
  },
}
</script>

<template>
  <div class="container mx-auto p-6 mb-16">
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
