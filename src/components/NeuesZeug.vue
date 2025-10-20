<script setup lang="ts">
import NavigationItem from "@/layouts/NavigationItem.vue";

// Import images so Vite resolves them
import lowResImage from "@/assets/images/navigation/neues_zeugs_title.jpeg";
</script>

<template>
  <NavigationItem
      headline="Neues Zeugs"
      :low-res="lowResImage"
  />
</template>
