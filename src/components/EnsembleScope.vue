<script setup lang="ts">
import NavigationItem from "@/layouts/NavigationItem.vue";

// Import images so Vite resolves them
import lowResImage from "@/assets/images/navigation/ensemble_scope_title.jpg";
</script>

<template>
  <NavigationItem
      headline="ensemble s c o p e"
      :low-res="lowResImage"
  />
</template>
