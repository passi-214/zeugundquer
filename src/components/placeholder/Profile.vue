<template>
  <div
      :class="[
      'shadow-lg rounded-2xl p-4 sm:p-10',
      containerBg
    ]"
  >
    <!-- Header -->
    <div class="border-b pb-6 mb-8">
      <h3 :class="['text-3xl font-extrabold', headerTextColor]">
        Projekt-Steckbrief: <span :class="titleTextColor">{{ title }}</span>
      </h3>
    </div>

    <div class="h-6 sm:h-8"></div>

    <!-- Badges -->
    <div class="flex flex-wrap gap-4 mb-8">
      <span
          class="flex-1 min-w-[180px] font-semibold text-lg px-4 py-3 rounded-full shadow-sm hover:scale-102 transform transition text-center"
          :class="[badgeTitleBg, badgeTitleText]"
      >
        Projekttitel: {{ title }}
      </span>
      <span
          class="flex-1 min-w-[180px] font-semibold text-lg px-4 py-3 rounded-full shadow-sm hover:scale-102 transform transition text-center"
          :class="[badgeYearBg, badgeYearText]"
      >
        Gründungsjahr: {{ foundingYear }}
      </span>
    </div>

    <div class="h-6 sm:h-8"></div>

    <!-- Projekte & Initiativen -->
    <div :class="['p-6 sm:p-8 rounded-xl shadow-inner mb-8 w-full sm:w-auto', boxBg]">
      <h4 :class="['font-semibold text-2xl mb-4', sectionTitleColor]">Projekte & Initiativen</h4>
      <ul class="list-disc pl-6 space-y-3 text-xl" :class="textColor">
        <template v-for="(item, index) in projects" :key="index">
          <li>
            {{ item.title || item }}
            <ul v-if="item.subitems" class="list-disc pl-6 mt-1 space-y-4 text-lg" :class="subTextColor">
              <li v-for="(sub, subIndex) in item.subitems" :key="subIndex">{{ sub }}</li>
            </ul>
          </li>
        </template>
      </ul>
    </div>


    <!-- Spacer -->
    <div class="h-6 sm:h-8"></div>

    <!-- Konzerte & Verantwortliche -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      <div :class="['p-6 sm:p-8 rounded-xl shadow-md flex flex-col items-start hover:scale-105 transform transition', concertsBoxBg]">
        <span :class="['text-3xl font-bold mb-3', concertsTextColor]">🎵 {{ concertsPerYear }}</span>
        <span :class="['text-lg font-medium', concertsTextColor]">Konzerte pro Jahr</span>
      </div>

      <div :class="['p-6 sm:p-8 rounded-xl shadow-md flex flex-col items-start hover:scale-105 transform transition', responsibleBoxBg]">
        <span :class="['text-2xl font-semibold mb-3', responsibleTextColor]">👥 {{ responsible }}</span>
        <span :class="['text-lg font-medium', responsibleTextColor]">Verantwortliche</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  foundingYear: string | number;
  projects: Array<{ title: string; subitems?: string[] } | string>;
  concertsPerYear: string;
  responsible: string;

  /** Color props (Tailwind classes) */
  containerBg?: string;
  headerTextColor?: string;
  titleTextColor?: string;
  badgeTitleBg?: string;
  badgeTitleText?: string;
  badgeYearBg?: string;
  badgeYearText?: string;
  boxBg?: string;
  sectionTitleColor?: string;
  textColor?: string;
  subTextColor?: string;
  concertsBoxBg?: string;
  concertsTextColor?: string;
  responsibleBoxBg?: string;
  responsibleTextColor?: string;
}>();
</script>
