<script setup lang="ts">
import NavigationItem from "@/layouts/NavigationItem.vue";

// Import images so Vite resolves them
import lowResImage from "@/assets/images/navigation/vereinszeug_title.jpeg";
</script>

<template>
  <NavigationItem
      headline="Vereinszeug"
      :low-res="lowResImage"
  />
</template>
