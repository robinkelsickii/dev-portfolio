<script>
export default {
  name: 'Contact',
}
</script>

<template>
  <section class="py-16 bg-purple-600">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
        <div class="lg:col-span-2 lg:py-12">
          <p class="max-w-xl text-lg text-white">
            If you would like to get in touch with me, leave your name, email, and a message. I
            respond within 24 hours.
          </p>
        </div>

        <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
          <form action="https://formspree.io/f/xeoeqglr" method="POST" class="space-y-4">
            <div>
              <label class="sr-only" for="name">Name</label>
              <input
                class="w-full rounded-lg border-gray-300 p-3 text-sm bg-gray-100 focus:bg-white focus:border-purple-500 focus:outline-none shadow-sm"
                placeholder="Name"
                type="text"
                id="name"
                name="name"
              />
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label class="sr-only" for="email">Email</label>
                <input
                  class="w-full rounded-lg border-gray-300 p-3 text-sm bg-gray-100 focus:bg-white focus:border-purple-500 focus:outline-none shadow-sm"
                  placeholder="Email address"
                  type="email"
                  id="email"
                  name="email"
                />
              </div>

              <div>
                <label class="sr-only" for="phone">Phone</label>
                <input
                  class="w-full rounded-lg border-gray-300 p-3 text-sm bg-gray-100 focus:bg-white focus:border-purple-500 focus:outline-none shadow-sm"
                  placeholder="Phone Number"
                  type="tel"
                  id="phone"
                  name="phone"
                />
              </div>
            </div>
            <div>
              <label class="sr-only" for="message">Message</label>

              <textarea
                class="w-full rounded-lg border-gray-300 p-3 text-sm bg-gray-100 focus:bg-white focus:border-purple-500 focus:outline-none shadow-sm"
                placeholder="Message"
                rows="8"
                id="message"
                name="message"
              ></textarea>
            </div>

            <div class="mt-4">
              <button
                type="submit"
                class="inline-block w-full rounded-lg bg-purple-600 px-5 py-3 font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 sm:w-auto"
              >
                Send Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Add any styles specific to this component here */
</style>
