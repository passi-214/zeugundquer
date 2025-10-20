<script setup lang="ts">
import NavigationItem from "@/layouts/NavigationItem.vue";

// Import images so Vite resolves them
import lowResImage from "@/assets/images/schall_und_rauch/schall_und_rauch.png";
</script>

<template>
  <NavigationItem
      headline="Schall und Rauch"
      :low-res="lowResImage"
  />
</template>
