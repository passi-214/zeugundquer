<template>
  <button
      class="w-24 h-24 flex items-center justify-center font-bold text-lg border-2 border-gray-400 rounded-lg hover:bg-gray-100 transition-colors"
      @click="goToRoute"
  >
    {{ title }}
  </button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { defineProps } from 'vue'

const props = defineProps<{
  title: string
  route: string
}>()

const router = useRouter()

const goToRoute = () => {
  router.push(props.route)
}
</script>
