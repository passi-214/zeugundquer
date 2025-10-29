<script setup lang="ts">
import {onMounted, ref} from 'vue'
import ConcertCard from "@/components/placeholder/ConcertCard.vue";

const concerts = ref<Array<{
  title: string
  date: string
  location: string
  mapsUrl: string
}>>([])

onMounted(async () => {
  try {
    const response = await fetch('/data/con_anima/con_anima_concerts.json')
    if (!response.ok) throw new Error('Failed to load concert data')
    concerts.value = await response.json()
  } catch (error) {
    console.error('Error loading concert data:', error)
  }
})
</script>

<template>

  <h3 class="text-3xl font-bold text-gray-900 mb-4 p-20 pb-10 text-center">Der aktuelle Newsletter</h3>


  <h3 class="text-3xl font-bold text-gray-900 mb-4 p-20 pb-10 text-center">Konzerte im Jahr 2025</h3>

  <div class="flex flex-col items-center space-y-12 gap-12 pb-10 ">
    <ConcertCard
        v-for="(concert, index) in concerts"
        :key="index"
        :title="concert.title"
        :date="concert.date"
        :location="concert.location"
        :maps-url="concert.mapsUrl"
        class="w-full max-w-2xl transform hover:scale-[1.02] transition-transform duration-300"
        borderColor="#C40F3C"
        bgColor="#F5B95F33"
        fontColor="#2A2A2A"
        titleColor="#A34865"
        textColor="#2A2A2A/80"
        linkColor="#2A2A2A/80"
    />


    <section class="max-w-3xl mx-auto px-6 pt-16 items-center">
      <!-- Image Placeholder -->
      <div class="flex justify-center mb-8">
        <div
            class="w-48 h-48 bg-gray-200 rounded-full shadow-md flex items-center justify-center text-gray-500 text-sm italic"
        >
          Bild von Hannah
        </div>
      </div>

      <!-- Poem -->
      <p class="italic text-gray-700 text-lg leading-relaxed mb-10 whitespace-pre-line pt-8">
        Du hast gerade begonnen zu blühen
        und doch standst du schon voller Farben.
        Einige Knospen konnten noch nicht aufgehen
        und sahen nur kurz das Erdenlicht.
        Vieles kannst du nicht mehr selbst entfalten.
        Und doch hast du deinen Samen gesät
        und wirst in voller Blüte stehen
        zu Zeiten, in denen manche sagen werden,
        dass du nicht mehr da seist.
      </p>

      <!-- Main Text -->
      <p class="text-gray-800 text-lg leading-relaxed text-justify pt-8">
        Voller Trauer müssen wir von unserer lieben, engagierten Querflötenlehrerin Hannah Schütz Abschied nehmen.
        Hannah
        verstarb am 18. Februar im Alter von nur 27 Jahren nach kurzer, schwerer Krankheit. Hannah war eine liebevolle
        Seele
        in Con Anima, die zuverlässig und mit selbstlosem Einsatz unterrichtete, mit Leidenschaft und großer Freude
        Musik
        machte und immer genau dort ganz dezent, geduldig und ruhig zur Stelle war, wo Hilfe gebraucht wurde. Sie war
        uns
        Austauschpartnerin zu pädagogischen Fragen und Inspirationsquelle für musikalische und pädagogische Visionen.
        Unverzichtbar war ihre kontinuierliche Unterstützung und Motivation während der Lockdowns im Onlineunterricht
        und
        bei den durch die Coronabestimmungen insbesondere für BläserInnen erschwerten Proben. Zuletzt half Hannah beim
        Aufbau und den allerersten Schritten unserer neuen Mozart-Gruppe mit. Gerne hätten wir mit Dir, liebe Hannah,
        dieses
        Projekt fortgeführt und uns gewünscht, dass du die Früchte Deiner Arbeit noch sehen kannst. Ohne Dich wären
        viele
        Proben, Aufnahmen und unsere Sommerkonzerte 2021 gar nicht möglich gewesen.
        <br/><br/>
        Liebe Hannah, Du hinterlässt hier eine große Lücke –
        Aber du hinterlässt uns auch Deinen lebensfrohen Geist: Wir erinnern Dein Lächeln, Deine Freude beim Musikmachen
        und
        Unterrichten, Dein Zuvorkommen, Deinen liebevollen und wertschätzenden Umgang mit Deinen Mitmenschen. Dein Licht
        bleibt und wir werden es in unseren Herzen bewahren und in die Welt hinaus tragen.
        <br/><br/>
        Du hast uns geprägt, liebe Hannah! Für die (viel zu kurze) Zeit mit Dir sind wir zutiefst dankbar!
        Unsere Gedanken und unser Mitgefühl sind bei Hannahs Familie und engen Angehörigen.
      </p>
    </section>
  </div>

</template>

<style scoped>

</style>