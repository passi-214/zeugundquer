<template>
  <ProjectContentBase>
    <template #profile>
      <Profile title="Singende Hände Freiburg" foundingYear="2023"
               :projects="[ { title: '', subitems: [ 'ca. 20 Musizierende'] } ]"
               concertsPerYear="3-4 Konzerte im Jahr" responsible="Sophia Kirstein und Stephanie Mündel-Möhr"
               containerBg="bg-gradient-to-br from-indigo-50 to-purple-50" headerTextColor="text-purple-700"
               titleTextColor="text-purple-900" badgeTitleBg="bg-purple-200" badgeTitleText="text-purple-900"
               badgeYearBg="bg-indigo-200" badgeYearText="text-indigo-900" boxBg="bg-white"
               sectionTitleColor="text-indigo-700" textColor="text-gray-800" subTextColor="text-gray-600"
               concertsBoxBg="bg-yellow-100" concertsTextColor="text-yellow-900" responsibleBoxBg="bg-green-100"
               responsibleTextColor="text-green-800"/>
      <div class="h-12 sm:h-12"></div>
    </template>

    <template #description>
      <section class="flex flex-col items-center px-6 py-20 text-gray-800 leading-relaxed">
        <!-- ✅ Left-aligned title, justified text only on larger screens -->
        <div class="w-full max-w-4xl space-y-8 text-left md:text-justify text-lg md:text-xl">
          <h2 class="text-3xl font-semibold text-amber-700">
            Über uns
          </h2>
          <p class="pt-8">
            Wir sind ein Ensemble aus hörenden und Tauben Menschen in Freiburg und verbinden Chormusik und
            Gebärdenpoesie.
            Im Gebärdenchor geht es uns grundlegend um den Austausch und das Miteinander von Tauben und hörenden
            Menschen.
            Wir wollen diesen Austausch zudem in die Öffentlichkeit bringen und durch Kunst und Kultur Brücken bauen.
            <br>
            Zurzeit besteht unser Chor aus ca. 20 Leuten und wir freuen uns über jeden, der mitmachen möchte! Weitere
            Infos
            findet ihr hier auf der Website.
            <br>
            Bei Fragen könnt ihr uns gerne per E-Mail kontaktieren.
          </p>

          <SecondaryButton button-text="Mail" link="mailto:singendehaendefreiburg@gmail.com"/>
          <SecondaryButton button-text="Instagram" link="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjm6Y-y07CQAxWARPEDHSdyBvkQFnoECBkQAQ&url=https%3A%2F%2Fwww.instagram.com%2Fsingendehaendefreiburg%2F&usg=AOvVaw08oT8hmG0YLzu2LS-QBKts&opi=89978449"/>


          <h2 class="text-3xl font-semibold text-amber-700 pt-8">
            Zeitungsberichte
          </h2>
          <div class="self-start flex flex-wrap gap-4 -ml-6 justify-center">
            <SecondaryButton
                buttonText="SWR-Artikel"
                link="https://www.swr.de/swraktuell/baden-wuerttemberg/suedbaden/gehoerlosen-chor-freiburg-singende-haende-100.html"
            />
            <SecondaryButton
                button-text="Chilli Artikel"
                link="https://www.chilli-freiburg.de/musik/wenn-gehoerlose-singen-freiburg-hat-einen-wohl-einzigartigen-inklusiven-chor/"
            />
          </div>

          <!-- Image -->
          <div class="pt-8 pb-16 w-full flex justify-center">
            <div
                class="relative w-full max-w-4xl aspect-[16/9] bg-gray-100 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center">
              <img
                  :src="imageSrc"
                  alt="Con Anima Orchester"
                  class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                  @error="handleImageError"
              />
              <div
                  v-if="imageSrc === placeholder"
                  class="absolute inset-0 flex items-center justify-center text-gray-500 text-base md:text-lg bg-gray-50"
              >
                Bild wird geladen oder ist nicht verfügbar
              </div>
            </div>
          </div>

          <h2 class="text-3xl font-semibold text-amber-700 pt-8">
            Termine
          </h2>
          <h3 class="text-2xl font-semibold text-amber-700 pt-8 pb-8">
            Konzerte
          </h3>

          <div class="flex flex-col items-left space-y-12 gap-12 pb-10">
            <ConcertCard
                v-for="(concert, index) in concerts"
                :key="index"
                :title="concert.title"
                :date="concert.date"
                :location="concert.location"
                :maps-url="concert.mapsUrl"
                class="w-full max-w-2xl transform hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
          <h3 class="text-2xl font-semibold text-amber-700 pt-16 pb-8">
            Proben
          </h3>
          <div class="flex flex-col items-left space-y-12 gap-12 pb-10">
            <ConcertCard
                v-for="(rehearsal, index) in rehearsal"
                :key="index"
                :title="rehearsal.title"
                :date="rehearsal.date"
                :location="rehearsal.location"
                :maps-url="rehearsal.mapsUrl"
                class="w-full max-w-2xl transform hover:scale-[1.02] transition-transform duration-300"
            />
          </div>


        </div>
      </section>
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

import {ref, onMounted} from 'vue'
import ConcertCard from "@/components/placeholder/ConcertCard.vue";

const imageSrc = ref('/images/orchestra.jpg')
const placeholder = 'https://via.placeholder.com/800x500?text=Con+Anima+Orchester'

const handleImageError = () => {
  imageSrc.value = placeholder
}

const sponsors = [
  {id: 1, url: '/images/sponsor/bw_soziales.avif', name: 'Sponsor 1', current: true},
];

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

function sendEmail()
{
  window.location = "mailto:xyz@yourapplicationdomain.com";
}

onMounted(async () => {
  try {
    const response = await fetch('/data/singing_hands_concerts.json')
    if (!response.ok) throw new Error('Failed to load concert data')
    concerts.value = await response.json()
  } catch (error) {
    console.error('Error loading concert data:', error)
  }

  try {
    const response = await fetch('/data/singing_hands_probe.json')
    if (!response.ok) throw new Error('Failed to load rehearsal data')
    rehearsal.value = await response.json()
  } catch (error) {
    console.error('Error loading rehearsal data:', error)
  }
})
</script>
