<template>
  <div
      :style="{
      borderColor: borderColor,
      backgroundColor: bgColor,
      color: fontColor
    }"
      class="border rounded-2xl p-8 pt-6 max-w-lg shadow-sm hover:shadow-md transition-shadow"
  >

    <!-- Title -->
    <h2 :style="{ color: titleColor }" class="text-2xl font-semibold mb-8 pb-4">
      {{ title }}
    </h2>

    <!-- Date -->
    <div :style="{ color: textColor }" class="flex items-center mb-4 text-lg pb-2">
      <span class="mr-5 text-xl pr-2">📅</span>
      <span>{{ date }}</span>
    </div>

    <!-- Location -->
    <div :style="{ color: textColor }" class="flex items-center text-lg">
      <span class="mr-5 text-xl pr-2">📍</span>
      <a
          :href="googleMapsLink"
          target="_blank"
          rel="noopener noreferrer"
          :style="{ color: linkColor }"
          class="hover:underline"
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
  borderColor?: string
  bgColor?: string
  fontColor?: string
  titleColor?: string
  textColor?: string
  linkColor?: string
}

const props = defineProps<Props>()

const googleMapsLink = computed(() => {
  const query = encodeURIComponent(props.location)
  return `https://www.google.com/maps/search/?api=1&query=${query}`
})

// Fallbacks for optional props
const borderColor = computed(() => props.borderColor || '#9CA3AF') // Tailwind gray-400
const bgColor = computed(() => props.bgColor || 'transparent')
const fontColor = computed(() => props.fontColor || '#111827') // Tailwind gray-900
const titleColor = computed(() => props.titleColor || fontColor.value)
const textColor = computed(() => props.textColor || '#374151') // Tailwind gray-700
const linkColor = computed(() => props.linkColor || '#1F2937') // Tailwind gray-800
</script>

<style scoped>
div:hover {
  border-color: #6b7280; /* Tailwind gray-500 for hover accent */
}
</style>
