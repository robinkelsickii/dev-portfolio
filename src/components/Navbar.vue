<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<template>
  <nav class="bg-gray-800 bg-opacity-75 p-4 sticky top-0 z-50">
    <div class="container mx-auto flex justify-between items-center">
      <a href="#home" class="text-white text-2xl font-bold">Bandgeek.dev</a>
      <div class="block lg:hidden">
        <button @click="toggleMenu" class="text-gray-300 hover:text-white focus:outline-none">
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <div
        :class="{ block: isOpen, hidden: !isOpen }"
        class="w-full lg:flex lg:items-center lg:w-auto"
      >
        <ul class="flex flex-col lg:flex-row lg:space-x-4">
          <li>
            <a
              href="#home"
              class="nav-link block py-2 px-3 text-gray-300 rounded transition duration-300 ease-in-out transform hover:bg-gray-100 hover:text-blue-700 hover:scale-105"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              class="nav-link block py-2 px-3 text-gray-300 rounded transition duration-300 ease-in-out transform hover:bg-gray-100 hover:text-blue-700 hover:scale-105"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              class="nav-link block py-2 px-3 text-gray-300 rounded transition duration-300 ease-in-out transform hover:bg-gray-100 hover:text-blue-700 hover:scale-105"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              class="nav-link block py-2 px-3 text-gray-300 rounded transition duration-300 ease-in-out transform hover:bg-gray-100 hover:text-blue-700 hover:scale-105"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-link {
  transition: transform 0.3s ease-in-out;
}

.nav-link:hover {
  transform: rotate(-5deg) scale(1.1);
}
</style>
