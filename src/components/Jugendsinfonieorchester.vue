<script setup lang="ts">
import NavigationItem from "@/layouts/NavigationItem.vue";

// Import images so Vite resolves them
import lowResImage from "@/assets/images/navigation/musi_casa_title.png";
</script>

<template>
  <NavigationItem
      headline="Jugendsinfonieorchester Freiburg"
      :low-res="lowResImage"
  />
</template>
