<template>
  <div class="relative bg-gray-100 rounded-xl shadow-md p-4 flex items-start gap-4 min-h-[160px] min-w-[313px] max-w-[600px] w-full mx-auto break-words">
    <!-- Date in top-right corner, higher above the card -->
    <div v-if="entry.date" class="absolute -top-6 right-5 text-sm text-gray-500">
      {{ entry.date }}
    </div>

    <!-- Text content -->
    <div class="flex-1">
      <h3 class="text-lg font-semibold mb-2">{{ entry.title }}</h3>
      <p class="text-gray-700">{{ entry.short_description }}</p>
    </div>

    <!-- Image placeholder -->
    <div v-if="entry.image_path && entry.image_path.trim() !== ''" class="w-40 h-50 bg-gray-700 rounded-lg flex-shrink-0"></div>
  </div>
</template>

<script setup>
defineProps({
  entry: {
    type: Object,
    required: true,
  }
});
</script>

<style scoped>
div:hover {
  transition: box-shadow 0.3s;
}
</style>
