<script>
export default {
  name: 'Navbar',
}
</script>

<template>
  <nav class="bg-gray-800 bg-opacity-75 p-4 sticky top-0 z-50">
    <div class="container mx-auto flex justify-between items-center">
      <a href="#home" class="text-white text-2xl font-bold">Bandgeek.dev</a>
      <div>
        <ul class="flex space-x-4">
          <li>
            <a
              href="#home"
              class="nav-link block py-2 px-3 text-gray-300 rounded transition duration-300 ease-in-out transform"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              class="nav-link block py-2 px-3 text-gray-300 rounded transition duration-300 ease-in-out transform"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              class="nav-link block py-2 px-3 text-gray-300 rounded transition duration-300 ease-in-out transform"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              class="nav-link block py-2 px-3 text-gray-300 rounded transition duration-300 ease-in-out transform"
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
