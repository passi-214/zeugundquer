<script setup lang="ts">
import NavigationItem from "@/layouts/NavigationItem.vue";

// Import images so Vite resolves them
import lowResImage from "@/assets/images/navigation/oca_title.jpg";
</script>

<template>
  <NavigationItem
      headline="Orchester Con Anima"
      :low-res="lowResImage"
  />
</template>
