<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';

interface ImageItem {
  src: string;
  highResSrc?: string;
  alt?: string;
  photographer?: string;
  license?: string;
}

const props = defineProps<{
  images: ImageItem[];
  imageCount?: number;
}>();

const loadedThumbnails = ref<boolean[]>([]);
const currentIndex = ref<number | null>(null);

onMounted(() => {
  loadedThumbnails.value = props.images.map(() => false);
  props.images.forEach((image, index) => {
    const img = new Image();
    img.src = image.src;
    img.onload = () => { loadedThumbnails.value[index] = true; };
  });
});

// Das SVG-Grid-Icon als String für die dynamische Injektion
const gridIconSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
`;

// Funktion, die den globalen Button abfängt
const handleGlobalCloseClick = (event: Event) => {
  if (currentIndex.value !== null) {
    event.preventDefault(); // Verhindert das Router-Routing im globalen Button
    close(); // Schließt nur die Galerie-Anansicht
  }
};

// Überwacht den Zustand des Vollbilds, um den globalen Button zu manipulieren
watch(currentIndex, (newIndex) => {
  const globalBtn = document.getElementById('global-close-btn');
  const iconContainer = globalBtn?.querySelector('.close-icon-content');

  if (newIndex !== null) {
    // 1. Event-Listener hinzufügen, wenn Vollbild aktiv wird
    window.addEventListener('global-close-click', handleGlobalCloseClick);

    // 2. Icon zu Grid-Symbol ändern & Title anpassen
    if (iconContainer && globalBtn) {
      iconContainer.innerHTML = gridIconSVG;
      globalBtn.setAttribute('title', 'Zurück zur Übersicht');
    }
  } else {
    // 3. Wenn Vollbild schließt: Event entfernen und Icon zurücksetzen
    window.removeEventListener('global-close-click', handleGlobalCloseClick);
    if (iconContainer && globalBtn) {
      iconContainer.innerHTML = '✕';
      globalBtn.setAttribute('title', 'Schließen');
    }
  }
});

// Cleanup, falls die Galerie-Komponente unmounted wird während sie offen ist
onUnmounted(() => {
  window.removeEventListener('global-close-click', handleGlobalCloseClick);
});

const open = (index: number) => { currentIndex.value = index; };
const close = () => { currentIndex.value = null; };

const next = () => {
  if (currentIndex.value !== null) {
    currentIndex.value = (currentIndex.value + 1) % props.images.length;
  }
};

const prev = () => {
  if (currentIndex.value !== null) {
    currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
  }
};

const currentImage = computed(() => {
  if (currentIndex.value !== null) return props.images[currentIndex.value];
  return null;
});

const displayedSrc = ref<string | null>(null);
const isHighResLoaded = ref(false);

watch(currentImage, (newImage) => {
  if (!newImage) { displayedSrc.value = null; isHighResLoaded.value = false; return; }
  displayedSrc.value = newImage.src;
  isHighResLoaded.value = false;

  if (newImage.highResSrc) {
    const img = new Image();
    img.src = newImage.highResSrc;
    img.onload = () => {
      displayedSrc.value = newImage.highResSrc;
      isHighResLoaded.value = true;
    };
  } else {
    isHighResLoaded.value = true;
  }
}, { immediate: true });
</script>

<template>
  <div class="gallery-container w-full flex justify-center mt-6">
    <div
        class="grid gap-6 justify-center w-[90%] max-w-[1400px]
         grid-cols-[repeat(auto-fit,minmax(0,400px))] justify-items-center"
    >
      <div
          v-for="(image, index) in images"
          :key="index"
          class="group relative overflow-hidden rounded-xl shadow-lg aspect-square transform transition hover:scale-105 hover:shadow-2xl w-full sm:w-auto cursor-pointer"
          @click="open(index)"
      >
        <div
            v-if="!loadedThumbnails[index]"
            class="w-full h-full bg-gray-300 animate-pulse"
        ></div>

        <template v-else>
          <img
              :src="image.src"
              :alt="image.alt || 'image'"
              class="w-full h-full object-cover transition-all duration-200"
          />

          <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white text-xs">
            <p v-if="image.photographer" class="font-medium">📷 {{ image.photographer }}</p>
            <p v-if="image.license" class="text-gray-300 text-[10px] mt-0.5">{{ image.license }}</p>
          </div>
        </template>
      </div>
    </div>
  </div>

  <div
      v-if="currentIndex !== null"
      class="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center z-50 p-4"
  >
    <button
        class="absolute left-6 text-white hover:text-gray-300"
        @click="prev"
        aria-label="Previous"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
      </svg>
    </button>

    <div class="flex flex-col items-center max-h-[90vh] max-w-[90vw] sm:max-w-[80vw]">
      <img
          v-if="displayedSrc"
          :src="displayedSrc"
          :alt="currentImage?.alt || 'image'"
          class="max-h-[75vh] object-contain rounded-2xl shadow-2xl transition-all duration-500"
          :class="{'opacity-50 blur-xxs': !isHighResLoaded, 'opacity-100 blur-0': isHighResLoaded}"
      />

      <div v-if="currentImage?.photographer || currentImage?.license" class="mt-4 text-center text-white/80 space-y-0.5 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-xl">
        <p v-if="currentImage?.photographer" class="text-sm font-medium tracking-wide">
          Foto: {{ currentImage.photographer }}
        </p>
        <p v-if="currentImage?.license" class="text-xs text-gray-400">
          Lizenz: {{ currentImage.license }}
        </p>
      </div>
    </div>

    <button
        class="absolute right-6 text-white hover:text-gray-300"
        @click="next"
        aria-label="Next"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
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
