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
          'inline-flex items-center justify-center gap-2 font-semibold px-6 py-2 rounded-md transition-all duration-300',
          widthClass
        ]"
          :style="{
          backgroundColor: bgColor,
          color: textColor
        }"
          @mouseover="hovering = true"
          @mouseleave="hovering = false"
      >
        <!-- Optional External Link Icon -->
        <svg
            v-if="showExternalIcon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.2"
            stroke="currentColor"
            class="w-4 h-4 shrink-0"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>

        <span>{{ buttonText }}</span>
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
  showExternalIcon?: boolean // Added optional prop
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