<script setup lang="ts">
import {ref, computed, watch, onMounted} from 'vue';

interface ImageItem {
  src: string;
  highResSrc?: string;
  alt?: string;
}

const props = defineProps<{
  images: ImageItem[];
  currentImage: { src: string; highResSrc?: string; alt?: string } | null;
  imageCount?: number; // new optional prop
}>();


const loadedThumbnails = ref<boolean[]>([]);

onMounted(() => {
  loadedThumbnails.value = props.images.map(() => false);

  props.images.forEach((image, index) => {
    const img = new Image();
    img.src = image.src;
    img.onload = () => {
      loadedThumbnails.value[index] = true;
    };
  });
});

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

const displayedSrc = ref<string | null>(null);
const isHighResLoaded = ref(false);

watch(
    currentImage,
    (newImage) => {
      if (!newImage) {
        displayedSrc.value = null;
        isHighResLoaded.value = false;
        return;
      }

      // Always show low-res first
      displayedSrc.value = newImage.src;
      isHighResLoaded.value = false;

      // If high-res exists, load it in background
      if (newImage.highResSrc) {
        const img = new Image();
        img.src = newImage.highResSrc;
        img.onload = () => {
          displayedSrc.value = newImage.highResSrc;
          isHighResLoaded.value = true;
        };
      } else {
        // No high-res available, consider low-res as fully loaded
        isHighResLoaded.value = true;
      }
    },
    {immediate: true}
);


</script>

<template>
  <!-- Thumbnails grid -->

    <div class="gallery-container w-full flex justify-center mt-6">
      <div
          class="grid gap-6 justify-center w-[90%] max-w-[1400px]
           grid-cols-[repeat(auto-fit,minmax(0,400px))] justify-items-center"
      >
        <div
            v-for="(image, index) in images"
            :key="index"
            class="overflow-hidden rounded-xl shadow-lg aspect-square transform transition hover:scale-105 hover:shadow-2xl w-full sm:w-auto"
            @click="open(index)"
        >
          <!-- Placeholder -->
          <div
              v-if="!loadedThumbnails[index]"
              class="w-full h-full bg-gray-300 animate-pulse"
          ></div>

          <!-- Actual image -->
          <img
              v-else
              :src="image.src"
              :alt="image.alt || 'image'"
              class="w-full h-full object-cover transition-all duration-200"
          />
        </div>

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
      <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"
           stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>

    <!-- Prev -->
    <button
        class="absolute left-6 text-white hover:text-gray-300"
        @click="prev"
        aria-label="Previous"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"
           stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
      </svg>
    </button>

    <!-- Image -->
    <div class="flex items-center justify-center w-full min-h-[60vh] sm:min-h-[80vh] p-4 sm:p-8">
      <img
          v-if="displayedSrc"
          :src="displayedSrc"
          :alt="props.currentImage?.alt || 'image'"
          class="max-h-[80vh] max-w-[90vw] sm:max-h-[85vh] sm:max-w-[80vw] object-contain rounded-2xl shadow-2xl transition-opacity duration-500"
          :class="{'opacity-50 blur-xxs': !isHighResLoaded, 'opacity-100 blur-0': isHighResLoaded}"
      />
    </div>


    <!-- Next -->
    <button
        class="absolute right-6 text-white hover:text-gray-300"
        @click="next"
        aria-label="Next"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"
           stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
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
