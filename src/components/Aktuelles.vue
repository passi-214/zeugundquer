<script setup lang="ts">
import NavigationItem from "@/layouts/NavigationItem.vue";

// Import images so Vite resolves them
import lowResImage from "@/assets/images/navigation/aktuelles_title.png";
</script>

<template>
  <NavigationItem
      headline="Aktuelles"
      :low-res="lowResImage"
  />
</template>
