<template>
  <RouterLink
      :to="{ name: to }"
      class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-none"
      active-class="bg-blue-800"
  >
    {{ label }}
  </RouterLink>

</template>

<script setup>
defineProps({
  label: String,
  to: String // this should now match the route name
})
</script>

<style scoped>
.router-link-active {
  font-weight: bold;
}
</style>
