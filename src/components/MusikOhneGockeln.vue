<script setup lang="ts">
import NavigationItem from "@/layouts/NavigationItem.vue";

// Import images so Vite resolves them
import lowResImage from "@/assets/images/navigation/musik_ohne_gockeln_title.jpg";
</script>

<template>
  <NavigationItem
      headline="Musik ohne Gockeln"
      :low-res="lowResImage"
  />
</template>
