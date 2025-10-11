<script setup lang="ts">
defineProps<{
  headline: string
  image?: string
}>()
</script>

<template>
  <div class="relative">
    <!-- Background image placeholder -->
    <div
        class="absolute inset-0 bg-cover bg-center"
        :style="{ backgroundImage: image ? `url(${image})` : '' }"
    ></div>

    <!-- Overlay to make text readable -->
    <div class="absolute inset-0 bg-black/40"></div>

    <!-- Centered headline -->
    <div class="relative z-10 flex items-center justify-center h-full px-8 sm:px-12">
      <h2
          class="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-center max-w-[90%] sm:max-w-[80%] md:max-w-[60%]"
      >
        {{ headline }}
      </h2>
    </div>

  </div>
</template>
