<template>
  <div class="grid gap-8">
    <!-- Current Sponsors -->
    <div v-if="currentSponsors.length">
      <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center">
        <div
            v-for="sponsor in currentSponsors"
            :key="sponsor.id"
            class="flex justify-center items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition"
        >
          <img
              :src="sponsor.url"
              :alt="sponsor.name"
              class="max-h-24 sm:max-h-28 w-full object-contain"
          />
        </div>
      </div>
    </div>

    <!-- Past Sponsors -->
    <div v-if="pastSponsors.length" class="mt-8">
      <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center opacity-50">
        <div
            v-for="sponsor in pastSponsors"
            :key="sponsor.id"
            class="flex justify-center items-center p-4 bg-gray-100 rounded-lg"
        >
          <img
              :src="sponsor.url"
              :alt="sponsor.name"
              class="max-h-24 sm:max-h-28 w-full object-contain grayscale"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';

interface Sponsor {
  id: number;
  url: string;
  name: string;
  current: boolean;
}

const props = defineProps<{
  sponsors: Sponsor[];
}>()

const currentSponsors = computed(() => props.sponsors.filter(s => s.current));
const pastSponsors = computed(() => props.sponsors.filter(s => !s.current));
</script>
