<template>
  <div
      @click.stop="$emit('click')"
      class="relative bg-gray-100 rounded-xl shadow-md cursor-pointer transition-all duration-500 ease-in-out"
      :class="isActive
      ? 'w-screen min-h-[500px] flex flex-col items-center p-0'
      : 'flex items-start min-h-[160px] min-w-[313px] max-w-[600px] w-full flex-row p-0 m-0 gap-0'"
  >
    <!-- Date -->
    <div
        v-if="entry.date"
        class="absolute text-sm text-gray-500 transition-all duration-500"
        :class="isActive ? '-top-8 right-4' : '-top-6 right-5'"
    >
      {{ entry.date }}
    </div>

    <!-- Image -->
    <div
        v-if="entry.image_path && entry.image_path.trim() !== ''"
        class="relative transition-all duration-500 rounded-lg overflow-hidden"
        :class="isActive
        ? 'w-full h-64 md:h-80 mb-6 mx-auto bg-gray-700 rounded-b-none'
        : 'flex-shrink-0 w-full h-60 bg-gray-700'"
        :style="{
        backgroundImage: `url(${entry.image_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
    >
      <!-- Title overlay (shown only when inactive) -->
      <!-- Title overlay (shown only when inactive) -->
      <h3
          v-if="!isActive"
          class="absolute bottom-6 w-full text-white text-xl font-semibold transition-all duration-500"
          :class="{
    'text-center left-1/2 transform -translate-x-1/2': titleAlign === 'center',
    'text-left left-6': titleAlign === 'left',
    'text-right right-6': titleAlign === 'right',
  }"
      >
        {{ entry.title }}
      </h3>

    </div>

    <!-- Text content -->
    <div
        class="flex-1 transition-all duration-500 text-center md:text-left"
        :class="isActive ? 'order-2 w-full md:w-3/4' : ''"
    >
      <!-- Title above description (only when active) -->
      <h3
          v-if="isActive"
          class="text-gray-800 text-xl font-semibold mb-2 text-center md:text-left transition-all duration-500 pt-8 pb-4 pl-6 pr-6"
      >
        {{ entry.title }}
      </h3>

      <p
          v-show="isActive"
          class="text-gray-700 text-left transition-opacity duration-500 mt-2 pl-6 pr-6"
      >
        {{ entry.long_description }}
      </p>

      <div
          v-if="isActive && entry.responsible && entry.responsible.length"
          class="mt-6 pl-6 pr-6 pb-6"
      >
        <h4 class="text-gray-800 font-semibold text-lg mb-2 pt-8 text-left">
          Leiter
        </h4>
        <ul class="list-disc list-inside text-gray-700 space-y-1 text-left">
          <li v-for="(person, index) in entry.responsible" :key="index">
            {{ person }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  entry: {type: Object, required: true},
  isActive: {type: Boolean, default: false},
  titleAlign: {
    type: String,
    default: 'center', // options: 'left' | 'center' | 'right'
  },
});
</script>

<style scoped>
p {
  transition: opacity 0.5s ease-in-out;
}
</style>
