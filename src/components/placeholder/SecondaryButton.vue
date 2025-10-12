<template>
  <div class="flex flex-col items-center py-16 px-6">
    <div class="text-center inline-block">
      <p class="text-lg text-gray-700 mb-6 pb-5">
        {{ paragraph }}
      </p>

      <a
          :href="link"
          target="_blank"
          rel="noopener noreferrer"
          class="block border border-gray-800 text-gray-800 font-semibold px-6 py-2 rounded-md transition-all duration-300 hover:bg-gray-800 hover:text-white w-full"
      >
        {{ buttonText }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  paragraph: string
  buttonText: string
  link?: string
}>()
</script>
