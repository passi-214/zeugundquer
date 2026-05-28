<template>
  <div
      :class="[
      'shadow-lg rounded-2xl p-6 sm:p-10',
      data.colors?.containerBg
    ]"
  >
    <!-- Header: Titel links, Gründungsjahr rechts -->
    <div class="pb-8 mb-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
      <h3 :class="['text-3xl font-extrabold tracking-tight', data.colors?.headerTextColor]">
        Steckbrief: <span :class="data.colors?.titleTextColor">{{ data.title }}</span>
      </h3>
      <span :class="['text-lg font-semibold sm:ml-auto opacity-80', data.colors?.headerTextColor]">
        Gegründet: {{ data.foundingYear }}
       </span>
    </div>

    <!-- Kurz-Info (ehemals Projekte & Initiativen) -->
    <div :class="['p-6 sm:p-8 rounded-xl shadow-inner mb-8 w-full', data.colors?.boxBg]">
      <h4 :class="['font-semibold text-2xl mb-4', data.colors?.sectionTitleColor]">Projekte & Initiativen</h4>
      <ul class="list-disc pl-6 space-y-3 text-xl" :class="data.colors?.textColor">
        <template v-for="(item, index) in data.projects" :key="index">
          <!-- Case 1: item is an object with a title -->
          <li v-if="typeof item === 'object' && item && 'title' in item && item.title && item.title.trim() !== ''">
            {{ item.title }}
            <ul v-if="'subitems' in item && item.subitems" class="list-disc pl-6 mt-1 space-y-2 text-lg" :class="data.colors?.subTextColor">
              <li v-for="(sub, subIndex) in item.subitems" :key="subIndex">{{ sub }}</li>
            </ul>
          </li>

          <!-- Case 2: item is an object with no title, just show subitems -->
          <template v-else-if="typeof item === 'object' && item && 'subitems' in item && item.subitems">
            <ul class="list-disc pl-6 space-y-2 text-lg" :class="data.colors?.subTextColor">
              <li v-for="(sub, subIndex) in item.subitems" :key="subIndex">{{ sub }}</li>
            </ul>
          </template>

          <!-- Case 3: item is a simple string -->
          <li v-else-if="typeof item === 'string'">
            {{ item }}
          </li>
        </template>
      </ul>
    </div>

    <!-- Konzerte & Verantwortliche -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pt-8">
      <div
          :class="['p-6 sm:p-8 rounded-xl shadow-md flex flex-col items-start hover:scale-102 transform transition', data.colors?.concertsBoxBg]">
        <span :class="['text-2xl font-bold mb-1', data.colors?.concertsTextColor]">🎵 Konzerte pro Jahr</span>
        <span :class="['text-xl font-medium opacity-90', data.colors?.concertsTextColor]">{{ data.concertsPerYear }}</span>
      </div>

      <div
          :class="['p-6 sm:p-8 rounded-xl shadow-md flex flex-col items-start hover:scale-102 transform transition', data.colors?.responsibleBoxBg]">
        <span :class="['text-2xl font-semibold mb-1', data.colors?.responsibleTextColor]">👥 Verantwortliche</span>
        <span :class="['text-xl font-medium opacity-90', data.colors?.responsibleTextColor]">{{ data.responsible }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ProfileData {
  title: string;
  foundingYear: string | number;
  concertsPerYear: string;
  responsible: string;
  projects: Array<{ title?: string; subitems?: string[] } | string>;
  colors?: {
    containerBg?: string;
    headerTextColor?: string;
    titleTextColor?: string;
    boxBg?: string;
    sectionTitleColor?: string;
    textColor?: string;
    subTextColor?: string;
    concertsBoxBg?: string;
    concertsTextColor?: string;
    responsibleBoxBg?: string;
    responsibleTextColor?: string;
    [key: string]: string | undefined; // Fallback index signature
  };
}

// Accepts the entire JSON object schema via a single "data" prop
defineProps<{
  data: ProfileData;
}>();
</script>