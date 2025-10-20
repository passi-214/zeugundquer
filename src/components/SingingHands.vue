<script setup lang="ts">
import NavigationItem from "@/layouts/NavigationItem.vue";

// Import images so Vite resolves them
import lowResImage from "@/assets/images/navigation/singing_hands_title.jpg";
</script>

<template>
  <NavigationItem
      headline="Singende Hände"
      :low-res="lowResImage"
  />
</template>
