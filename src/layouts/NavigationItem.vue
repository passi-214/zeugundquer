<script setup lang="ts">
const props = defineProps<{
  headline: string;
  lowRes?: string;
}>();
</script>

<template>
  <div class="relative h-[400px]">
    <!-- Background image with blur -->
    <div
        class="absolute inset-0 bg-cover bg-center blur-xs"
        :style="{ backgroundImage: props.lowRes ? `url(${props.lowRes})` : '' }"
    ></div>

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/40"></div>

    <!-- Headline -->
    <div class="relative z-10 flex items-center justify-center h-full px-8 sm:px-12">
      <h2
          class="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-center max-w-[90%] sm:max-w-[80%] md:max-w-[60%]"
      >
        {{ props.headline }}
      </h2>
    </div>
  </div>
</template>
