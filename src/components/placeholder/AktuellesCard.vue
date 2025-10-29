<template>
  <div
      @click.stop="$emit('click')"
      class="relative bg-gray-100 rounded-xl shadow-md cursor-pointer transition-all duration-500 ease-in-out"
      :class="isActive
        ? 'w-screen min-h-[500px] flex flex-col items-center p-6' // reduced height
        : 'flex items-start gap-4 min-h-[160px] min-w-[313px] max-w-[600px] w-full mx-auto p-4 flex-row'"
  >
    <!-- Date -->
    <div
        v-if="entry.date"
        class="absolute text-sm text-gray-500 transition-all duration-500"
        :class="isActive ? '-top-10 right-6' : '-top-6 right-5'"
    >
      {{ entry.date }}
    </div>

    <!-- Image -->
    <div
        v-if="entry.image_path"
        :style="{
    backgroundImage: `url(${entry.image_path})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }"
        :class="[
    'rounded-lg bg-gray-200 transition-all duration-500',
    isActive
      ? 'w-full md:w-3/4 h-64 md:h-80 mb-6 mx-auto'
      : 'w-40 h-50 flex-shrink-0'
  ]"
    />


    <!-- Text content -->
    <div
        class="flex-1 transition-all duration-500 text-center md:text-left"
        :class="isActive ? 'order-2 w-full md:w-3/4' : ''"
    >
      <h3
          class="text-lg font-semibold mb-2 transition-all duration-500"
          :class="isActive ? 'mt-0' : ''"
      >
        {{ entry.title }}
      </h3>

      <!-- Short description fades out -->
      <p
          v-show="!isActive"
          class="text-gray-700 transition-opacity duration-500"
      >
        {{ entry.short_description }}
      </p>

      <!-- Long description fades in -->
      <p
          v-show="isActive"
          class="text-gray-700 transition-opacity duration-500 mt-2"
      >
        {{ entry.long_description }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  entry: { type: Object, required: true },
  isActive: { type: Boolean, default: false },
});
</script>

<style scoped>
p {
  transition: opacity 0.5s ease-in-out;
}
</style>
