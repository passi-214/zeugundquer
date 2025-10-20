<template>
  <div class="flex flex-col items-center py-8 px-6">
    <div class="text-center inline-block">
      <p v-if="paragraph" class="text-lg text-gray-700 mb-6 pb-2">
        {{ paragraph }}
      </p>

      <a
          :href="link"
          target="_blank"
          rel="noopener noreferrer"
          :class="[
          'block font-semibold px-6 py-2 rounded-md transition-all duration-300',
          widthClass
        ]"
          :style="{
          backgroundColor: bgColor,
          color: textColor
        }"
          @mouseover="hovering = true"
          @mouseleave="hovering = false"
      >
        {{ buttonText }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  paragraph?: string
  buttonText: string
  link?: string
  widthClass?: string
  bgColor?: string
  hoverBgColor?: string
  textColor?: string
}>()

const hovering = ref(false)

const bgColor = props.bgColor || '#D1D5DB'
const textColor = props.textColor || '#000000'
const hoverBgColor = props.hoverBgColor || '#9CA3AF'

watch(hovering, (val) => {
  const el = document.querySelector(`a[href='${props.link}']`) as HTMLElement
  if (el) el.style.backgroundColor = val ? hoverBgColor : bgColor
})
</script>
