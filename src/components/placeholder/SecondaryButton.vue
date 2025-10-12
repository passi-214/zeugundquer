<template>
  <div class="flex flex-col items-center py-8 px-6">
    <div class="text-center inline-block">
      <!-- Only render the paragraph if it’s not empty -->
      <p
          v-if="paragraph"
          class="text-lg text-gray-700 mb-6 pb-2"
      >
        {{ paragraph }}
      </p>

      <a
          :href="link"
          target="_blank"
          rel="noopener noreferrer"
          :class="[
          'block border border-gray-800 text-gray-800 font-semibold px-6 py-2 rounded-md transition-all duration-300 hover:bg-gray-800 hover:text-white',
          widthClass
        ]"
      >
        {{ buttonText }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  paragraph?: string
  buttonText: string
  link?: string
  widthClass?: string // allows external Tailwind width classes
}>()
</script>
