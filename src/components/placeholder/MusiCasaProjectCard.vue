<template>
  <div
      class="w-full mx-auto transition-all duration-500 ease-in-out list-none will-change-transform rounded-lg"
      :class="[
      isActive
        ? 'md:col-span-2 lg:col-span-3 scale-100 z-10 shadow-xl'
        : anyActive
          ? 'opacity-40 hover:opacity-90 scale-95 pointer-events-none md:pointer-events-auto'
          : 'scale-100'
    ]"
  >
    <div
        @click.stop="$emit('click')"
        class="relative bg-gray-100 rounded-xl shadow-md cursor-pointer transition-all duration-500 ease-in-out"
        :class="[
          isActive
            ? 'rounded-b-none min-h-[160px] flex flex-col p-0 m-0 gap-0 shadow-none'
            : 'flex flex-col md:flex-row items-start min-h-[160px] p-0 m-0 gap-0 hover:shadow-lg'
        ]"
    >
      <div
          v-if="entry.date"
          class="absolute text-sm text-gray-500 transition-all duration-500 z-10"
          :class="isActive ? '-top-8 right-4' : '-top-6 right-5'"
      >
        {{ entry.date }}
      </div>

      <div
          v-if="entry.image_path && entry.image_path.trim() !== ''"
          class="relative transition-all duration-500 rounded-lg overflow-hidden w-full"
          :class="isActive
            ? 'h-64 md:h-80 mx-auto bg-gray-700 rounded-b-none'
            : 'flex-shrink-0 h-60 bg-gray-700'"
          :style="{
            backgroundImage: `url(${entry.image_path})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }"
      >
        <h3
            v-if="!isActive"
            class="absolute bottom-6 w-full text-white text-xl font-semibold transition-all duration-500 px-4"
            :class="{
              'text-center left-1/2 transform -translate-x-1/2': titleAlign === 'center',
              'text-left left-6': titleAlign === 'left',
              'text-right right-6': titleAlign === 'right',
            }"
        >
          {{ entry.title }}
        </h3>
      </div>

      <button
          v-if="isActive"
          @click.stop="$emit('close')"
          class="absolute top-4 right-4 z-20 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition-colors"
          title="Zurück zur Übersicht"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <div
        class="bg-gray-100 transition-all duration-500 ease-in-out text-left overflow-hidden"
        :class="isActive ? 'opacity-100 h-auto pb-8' : 'opacity-0 h-0 pointer-events-none'"
    >
      <div class="pt-6 pb-2 px-6 md:px-8 border-b border-gray-200/40 mb-4">
        <h3 class="text-gray-900 text-2xl font-bold tracking-tight text-center md:text-left">
          {{ entry.title }}
        </h3>
      </div>

      <p class="text-gray-700 text-base md:text-lg leading-relaxed px-6 md:px-8">
        {{ entry.long_description }}
      </p>

      <div
          v-if="entry.responsible && entry.responsible.length"
          class="mt-6 pt-6 px-6 md:px-8 border-gray-200/60"
      >
        <h4 class="text-gray-800 font-semibold text-lg mb-2 text-left">
          Leiter
        </h4>
        <ul class="list-disc list-inside text-gray-700 space-y-1 text-left pl-1">
          <li v-for="(person, index) in entry.responsible" :key="index">
            {{ person }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  entry: {type: Object, required: true},
  isActive: {type: Boolean, default: false},
  anyActive: {type: Boolean, default: false},
  titleAlign: {
    type: String,
    default: 'center',
  },
});

defineEmits(['click', 'close']);
</script>

<style scoped>
p {
  transition: opacity 0.5s ease-in-out;
}
</style>