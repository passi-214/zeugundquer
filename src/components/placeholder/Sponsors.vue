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
              :src="sponsorImages[sponsor.url]"
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
              :src="sponsorImages[sponsor.url]"
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
import aventis from '@/assets/images/sponsor/aventis_foundation.avif'
import bundesregierung from '@/assets/images/sponsor/bundesregierung.avif'
import bwKunst from '@/assets/images/sponsor/bw_kunst.avif'
import bwSoziales from '@/assets/images/sponsor/bw_soziales.avif'
import deutscheOrchesterStiftung from '@/assets/images/sponsor/deutsche_orchester_stiftung.avif'
import kulturStiftungDerLaender from '@/assets/images/sponsor/kultur_stiftung_der_laender.avif'
import kulturamtFreiburg from '@/assets/images/sponsor/kulturamt_freiburg.avif'
import lbbw from '@/assets/images/sponsor/lbbw.avif'
import neustartkultur from '@/assets/images/sponsor/neustartkultur.avif'
import prohelvetia from '@/assets/images/sponsor/prohelvetia.avif'
import sickStiftung from '@/assets/images/sponsor/sick_stiftung.avif'
import sparkasse from '@/assets/images/sponsor/sparkasse.avif'

interface Sponsor {
  id: number;
  url: string;
  name: string;
  current: boolean;
}

const props = defineProps<{
  sponsors: Sponsor[];
}>()

const sponsorImages: Record<string, string> = {
  aventis,
  bundesregierung,
  bwKunst,
  bwSoziales,
  deutscheOrchesterStiftung,
  kulturStiftungDerLaender,
  kulturamtFreiburg,
  lbbw,
  neustartkultur,
  prohelvetia,
  sickStiftung,
  sparkasse,
}

const currentSponsors = computed(() => props.sponsors.filter(s => s.current));
const pastSponsors = computed(() => props.sponsors.filter(s => !s.current));
</script>
