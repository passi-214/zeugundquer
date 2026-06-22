<template>
  <div
      @click="$emit('click')"
      class="relative bg-gray-100 rounded-xl shadow-md cursor-pointer transition-all duration-500 ease-in-out"
      :class="isActive
        ? 'w-screen min-h-[500px] flex flex-col items-center p-6'
        : 'flex items-start gap-4 min-h-[160px] min-w-[313px] max-w-[600px] w-full mx-auto p-4 flex-row'"
  >
    <!--
    -->
    <div
        v-if="isActive"
        class="absolute top-6 right-6 sm:right-10 md:right-12 lg:right-16 flex flex-col items-end gap-16 z-30 pointer-events-none"
    >
      <!-- Date stays pinned cleanly to the top right -->
      <div v-if="entry.date" class="text-sm text-gray-500 font-medium whitespace-nowrap">
        {{ entry.date }}
      </div>

      <span
          @click.stop="$emit('close')"
          class="pointer-events-auto flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/5 hover:bg-black/10 transition-all duration-300 group select-none cursor-pointer mx-auto"
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            class="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:rotate-90"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
        </svg>
      </span>
    </div>

    <!-- Fallback default position for the date when the card is minimized -->
    <div
        v-if="entry.date && !isActive"
        class="absolute text-sm text-gray-500 -top-6 right-5"
    >
      {{ entry.date }}
    </div>

    <!-- Image asset layer -->
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
            ? 'w-full md:w-3/4 h-150 mt-6'
            : 'w-40 h-50 flex-shrink-0'
        ]"
    />

    <!-- Text content container -->
    <div
        class="flex-1 transition-all duration-500 text-center md:text-left"
        :class="isActive ? 'order-2 w-full md:w-3/4' : ''"
    >
      <h2
          class="text-lg font-semibold mb-2 transition-all duration-500"
          :class="isActive ? 'mt-4 text-xl text-left pt-8 pb-8' : ''"
      >
        {{ entry.title }}
      </h2>

      <!-- Short description description layer -->
      <p
          v-show="!isActive"
          class="text-gray-700 transition-opacity duration-500"
      >
        {{ entry.short_description }}
      </p>

      <!-- Long description text block layer -->
      <p
          v-show="isActive"
          class="text-gray-700 transition-opacity duration-500 mt-6 text-left leading-relaxed text-base md:text-lg"
      >
        {{ entry.long_description }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  entry: {type: Object, required: true},
  isActive: {type: Boolean, default: false},
});

defineEmits(['click', 'close']);
</script>

<style scoped>
p {
  transition: opacity 0.5s ease-in-out;
}
</style>