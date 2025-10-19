<script setup lang="ts">
import { ref, computed, watch } from 'vue';

interface ImageItem {
  src: string;
  alt?: string;
}

const props = defineProps<{
  images: ImageItem[];
}>();

const currentIndex = ref<number | null>(null);

const open = (index: number) => {
  currentIndex.value = index;
};

const close = () => {
  currentIndex.value = null;
};

const next = () => {
  if (currentIndex.value !== null) {
    currentIndex.value = (currentIndex.value + 1) % props.images.length;
  }
};

const prev = () => {
  if (currentIndex.value !== null) {
    currentIndex.value =
        (currentIndex.value - 1 + props.images.length) % props.images.length;
  }
};

const currentImage = computed(() => {
  if (currentIndex.value !== null) return props.images[currentIndex.value];
  return null;
});

// Disable scroll when lightbox is open

</script>

<template>
  <!-- Thumbnails grid -->
  <div class="gallery-container w-full flex justify-center mt-6">
    <div
        class="grid gap-12 w-full
         grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
        style="grid-template-columns: repeat(auto-fit, minmax(400px, 1fr))"
    >
    <button
          v-for="(image, index) in images"
          :key="index"
          class="overflow-hidden rounded-xl shadow-lg aspect-square transform transition hover:scale-105 hover:shadow-2xl"
          @click="open(index)"
      >
        <img
            :src="image.src"
            :alt="image.alt || 'image'"
            class="w-full h-full object-cover transition-all duration-200"
        />

      </button>
    </div>
  </div>

  <!-- Lightbox Overlay -->
  <div
      v-if="currentIndex !== null"
      class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
  >
    <!-- Close -->
    <button
        class="absolute top-6 right-6 text-white hover:text-gray-300"
        @click="close"
        aria-label="Close"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <!-- Prev -->
    <button
        class="absolute left-6 text-white hover:text-gray-300"
        @click="prev"
        aria-label="Previous"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <!-- Image -->
    <div class="flex items-center justify-center max-h-[90vh] max-w-[90vw] rounded-lg overflow-hidden shadow-2xl">
      <img
          v-if="currentImage"
          :src="currentImage.src"
          :alt="currentImage.alt || 'image'"
          class="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-lg"
      />
    </div>

    <!-- Next -->
    <button
        class="absolute right-6 text-white hover:text-gray-300"
        @click="next"
        aria-label="Next"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.gallery-container button img {
  transition: transform 0.2s ease;
}
.gallery-container button:hover img {
  transform: scale(1.05);
}
</style>
