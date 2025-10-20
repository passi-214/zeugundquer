<template>
  <div
      class="border border-gray-400 rounded-2xl p-8 pt-6  max-w-lg shadow-sm hover:shadow-md transition-shadow bg-transparent"
  >
    <!-- Title -->
    <h2 class="text-2xl font-semibold text-gray-900 mb-8 pb-4">
      {{ title }}
    </h2>

    <!-- Date -->
    <div class="flex items-center text-gray-700 mb-4 text-lg pb-2">
      <span class="mr-5 text-xl pr-2">📅</span>
      <span>{{ date }}</span>
    </div>

    <!-- Location -->
    <div class="flex items-center text-gray-700 text-lg">
      <span class="mr-5 text-xl pr-2">📍</span>
      <a
          :href="googleMapsLink"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-800 hover:underline"
      >
        {{ location }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  title: string
  date: string
  location: string
}

const props = defineProps<Props>()

const googleMapsLink = computed(() => {
  const query = encodeURIComponent(props.location)
  return `https://www.google.com/maps/search/?api=1&query=${query}`
})
</script>

<style scoped>
div:hover {
  border-color: #6b7280; /* Tailwind gray-500 for hover accent */
}
</style>
