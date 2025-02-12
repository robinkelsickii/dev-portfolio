<template>
  <div class="flex flex-row justify-center gap-6">
    <div
      v-for="skill in skills"
      :key="skill.id"
      class="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 w-full max-w-xs"
    >
      <div class="flex flex-col items-center">
        <img
          :src="skill.image || 'https://via.placeholder.com/50'"
          alt="Skill icon"
          class="w-12 h-12 mb-3"
        />
        <h3 class="text-lg font-bold text-gray-900 dark:text-white">{{ skill.skillName }}</h3>

        <!-- Star Rating System -->
        <div class="flex mt-2">
          <span
            v-for="n in 5"
            :key="n"
            class="text-yellow-400 text-xl"
          >
            {{ n <= skill.rating ? '★' : '☆' }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      skills: [
        {
          id: 1,
          image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
          skillName: "JavaScript",
          rating: 5,
        },
        {
          id: 2,
          image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
          skillName: "Vue.js",
          rating: 4,
        },
        {
          id: 3,
          image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
          skillName: "React",
          rating: 4,
        },
        {
          id: 4,
          image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
          skillName: "Postgres",
          rating: 5,
        },
        {
          id: 5,
          image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/C-Sharp_Logo.svg",
          skillName: "C#",
          rating: 1,
        },
        {
          id: 6,
          image: "https://upload.wikimedia.org/wikipedia/commons/0/00/Mongodb-svgrepo-com.svg",
          skillName: "MongoDb",
          rating: 3,
        },
        {
          id: 7,
          image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
          skillName: "Python",
          rating: 3,
        },
      ]
    };
  }
};
</script>
