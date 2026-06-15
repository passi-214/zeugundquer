<template>
  <ProjectContentBase
      :showSponsorships="true"
      class="bg-gradient-to-b from-[#012420]/40 via-[#014F4F]/30 to-[#32CCCC]/20 min-h-screen"
  >

    <template #profile>
      <Profile :data="singingHandsData"/>
      <div class="h-12 sm:h-12"></div>
    </template>

    <template #description>
      <section class="flex flex-col items-center px-6 py-20 text-[#E0F7F7] leading-relaxed">
        <div class="w-full max-w-4xl space-y-8 text-left md:text-justify text-lg md:text-xl">
          <h2 class="text-3xl font-semibold text-[#012420]">Über Singende Hände</h2>
          <p class="pt-8">
            Wir sind ein Ensemble aus hörenden und Tauben Menschen in Freiburg und verbinden Chormusik und
            Gebärdenpoesie.
            Im Gebärdenchor geht es uns grundlegend um den Austausch und das Miteinander von Tauben und hörenden
            Menschen.
            Wir wollen diesen Austausch zudem in die Öffentlichkeit bringen und durch Kunst und Kultur Brücken bauen.
            <br>
            Zurzeit besteht unser Chor aus ca. 20 Leuten und wir freuen uns über jeden, der mitmachen möchte! Weitere
            Infos findet ihr hier auf der Website.
            <br>
            Bei Fragen könnt ihr uns gerne per E-Mail kontaktieren.
          </p>

          <div class="flex gap-4 flex-wrap pt-8">
            <SecondaryButton
                button-text="Mail"
                link="mailto:singendehaendefreiburg@gmail.com"
                bgColor="#32CCCC"
                textColor="#012420"
                hoverBgColor="#014F4F"
                width-class="w-50"
            />
            <SecondaryButton
                button-text="Instagram"
                link="https://www.instagram.com/singendehaendefreiburg/"
                bgColor="#32CCCC"
                textColor="#012420"
                hoverBgColor="#014F4F"
                width-class="w-50"
            />
          </div>

          <h2 class="text-3xl font-semibold text-[#012420] pt-12">Zeitungsberichte</h2>
          <div class="flex flex-wrap gap-4 pt-6">
            <SecondaryButton
                button-text="SWR-Artikel"
                link="https://www.swr.de/swraktuell/baden-wuerttemberg/suedbaden/gehoerlosen-chor-freiburg-singende-haende-100.html"
                bgColor="#32CCCC"
                textColor="#012420"
                hoverBgColor="#014F4F"
                width-class="w-50"
            />
            <SecondaryButton
                button-text="Chilli Artikel"
                link="https://www.chilli-freiburg.de/musik/wenn-gehoerlose-singen-freiburg-hat-einen-wohl-einzigartigen-inklusiven-chor/"
                bgColor="#32CCCC"
                textColor="#012420"
                hoverBgColor="#014F4F"
                width-class="w-50"
            />
          </div>

          <!-- Image -->
          <div class="pt-8 pb-16 w-full flex justify-center">
            <div
                class="relative w-full max-w-4xl aspect-[16/9] rounded-2xl overflow-hidden shadow-lg flex items-center justify-center bg-[#014F4F]">
              <img
                  :src="imageSrc"
                  alt="Singende Hände Freiburg"
                  class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                  @error="handleImageError"
              />
              <div v-if="imageSrc === placeholder"
                   class="absolute inset-0 flex items-center justify-center text-[#E0F7F7] text-base md:text-lg bg-[#012420]/70">
                Bild wird geladen oder ist nicht verfügbar
              </div>
            </div>
          </div>
          <section class="flex flex-col items-center px-6 py-15 text-[#012420]  leading-relaxed">
            <div class="w-full max-w-4xl space-y-8 text-justify md:text-justify text-lg md:text-xl">
              <h2 class="text-3xl font-bold mb-4 px-4 sm:px-10 pt-12 sm:pt-25 text-center pb-20">
                Termine
              </h2>
              <h3 class="text-2xl font-bold mb-4 px-4 text-center">
                Konzerte
              </h3>
            </div>
          </section>

          <div class="flex flex-col items-center gap-20 px-4 md:px-6 lg:px-8 w-full min-h-160 pb-10">
            <ConcertCard
                v-for="(concert, index) in concerts"
                :key="index"
                :title="concert.title"
                :date="concert.date"
                :location="concert.location"
                :maps-url="concert.mapsUrl"
                class="w-full max-w-2xl transform hover:scale-[1.02] transition-transform duration-300"
                borderColor="#012420"
                fontColor="#012420"
                titleColor="#012420"
                textColor="#012420"
                linkColor="#012420"
            />
          </div>
          <section class="flex flex-col items-center px-6 py-20 text-[#012420]  leading-relaxed">
            <div class="w-full max-w-4xl space-y-8 text-justify md:text-justify text-lg md:text-xl">
              <h3 class="text-2xl font-bold mb-4 px-4 text-center">
                Proben
              </h3>
            </div>
          </section>
          <div class="flex flex-col items-center gap-20 px-4 md:px-6 lg:px-8 w-full min-h-240">
            <ConcertCard
                v-for="(rehearsal, index) in rehearsal"
                :key="index"
                :title="rehearsal.title"
                :date="rehearsal.date"
                :location="rehearsal.location"
                :maps-url="rehearsal.mapsUrl"
                class="w-full max-w-2xl transform hover:scale-[1.02] transition-transform duration-300"
                borderColor="#012420"
                fontColor="#012420"
                titleColor="#012420"
                textColor="#012420"
                linkColor="#012420"
            />
          </div>
        </div>
      </section>

      <CollapsibleGallery
          :images="galleryImages"
          class="pt-0"
          bgColor="bg-[#329999]"
          hoverBgColor="bg-[#329999]"
          textColor="#32CCCC"
          pulseFrom="#329999"
          pulseTo="#32CCCC"
      />
    </template>

    <template #sponsorships>
      <Sponsors :sponsors="sponsors"/>
    </template>
  </ProjectContentBase>


</template>

<script setup lang="ts">
import ProjectContentBase from "@/layouts/ProjectContentBase.vue";
import Profile from "@/components/placeholder/Profile.vue";
import SecondaryButton from "@/components/placeholder/SecondaryButton.vue";
import {onMounted, ref} from 'vue'
import ConcertCard from "@/components/placeholder/ConcertCard.vue";
import bwSoziales from '@/assets/images/sponsor/bw_soziales.avif'
import {useGallery} from "@/composables/useGallery";
import CollapsibleGallery from "@/components/placeholder/CollapsibleGallery.vue";
import singingHandsData from '@/assets/data/singing_hands/singing_hands_steckbrief.json';
import singingHandsContent from '@/assets/data/singing_hands/singing_hands_content.json';

const imageSrc = ref('/images/orchestra.jpg')

const placeholder = 'https://via.placeholder.com/800x500?text=Singing_Hands'

const BASE_URL = import.meta.env.BASE_URL

const handleImageError = () => {
  imageSrc.value = placeholder
}

const sponsors = singingHandsContent.sponsor

const rehearsal = ref<Array<{
  title: string
  date: string
  location: string
  mapsUrl: string
}>>([])

const concerts = ref<Array<{
  title: string
  date: string
  location: string
  mapsUrl: string
}>>([])

function sendEmail() {
  window.location = "mailto:xyz@yourapplicationdomain.com";
}

onMounted(async () => {

  try {
    const cloudinaryUrl = import.meta.env.VITE_CLOUDINARY_SINGING_HANDS_CONCERTS;
    const res = await fetch(cloudinaryUrl);
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    concerts.value = await res.json();
  } catch (err) {
    console.error('Failed to fetch singing hands concert data:', err);
  }

  try {
    const cloudinaryUrl = import.meta.env.VITE_CLOUDINARY_SINGING_HANDS_PROBE;
    const res = await fetch(cloudinaryUrl);
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    rehearsal.value = await res.json();
  } catch (err) {
    console.error('Failed to fetch singing hands rehearsal data:', err);
  }
})

// Low-res images
const lowResMusik = import.meta.glob('@/assets/images/singing_hands/*.{jpg,jpeg}', {
  eager: true,
  import: 'default'
});

// High-res images (optional)
const highResMusik = import.meta.glob('@/assets/images/singing_hands/high_quality/*.{jpg,jpeg}', {
  eager: true,
  import: 'default'
});

const galleryImages = useGallery(lowResMusik, highResMusik);
</script>
