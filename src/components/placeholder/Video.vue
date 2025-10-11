<template>
  <div class="video-wrapper">
    <iframe
        v-if="embedUrl"
        :src="embedUrl"
        :title="title"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="youtube-iframe"
    ></iframe>
    <p v-else class="text-red-600 text-center mt-4">Ungültiger YouTube-Link</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  /** Standard YouTube URL (e.g. https://www.youtube.com/watch?v=abc123) */
  url: string;
  /** Optional title for accessibility */
  title?: string;
}

const props = defineProps<Props>();

/**
 * Extracts the video ID from YouTube URLs like:
 * - https://www.youtube.com/watch?v=abc123
 * - https://youtu.be/abc123
 * and builds an embeddable URL.
 */
const embedUrl = computed(() => {
  if (!props.url) return "";
  const match = props.url.match(
      /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/
  );
  return match ? `https://www.youtube.com/embed/${match[1]}` : "";
});
</script>

<style scoped>
.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 ratio */
  height: 0;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
}

.youtube-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 12px;
}
</style>
