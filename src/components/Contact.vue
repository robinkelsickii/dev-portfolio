<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    }
  },
  methods: {
    submitForm() {
      // Handle form submission
      console.log('Form submitted:', this.form)
    },
  },
}
</script>

<template>
  <div class="container mx-auto p-6">
    <h2 class="text-4xl font-bold mb-6 text-center">Contact Me</h2>
    <div class="contact-form bg-white p-6 rounded-lg shadow-lg">
      <form @submit.prevent="submitForm">
        <div class="form-group mb-4">
          <label for="name" class="block text-gray-700 font-bold mb-2">Name:</label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            required
            class="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div class="form-group mb-4">
          <label for="email" class="block text-gray-700 font-bold mb-2">Email:</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            required
            class="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div class="form-group mb-4">
          <label for="message" class="block text-gray-700 font-bold mb-2">Message:</label>
          <textarea
            id="message"
            v-model="form.message"
            required
            class="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        <button type="submit" class="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
          Send
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.contact-form {
  max-width: 600px;
  margin: 0 auto;
}
</style>
