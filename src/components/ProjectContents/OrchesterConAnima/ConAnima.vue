<script setup>
import { ref } from 'vue'
import SecondaryButton from "@/components/placeholder/SecondaryButton.vue";

const imageSrc = ref('/images/orchestra.jpg')
const placeholder = 'https://via.placeholder.com/800x500?text=Con+Anima+Orchester'

const handleImageError = () => {
  imageSrc.value = placeholder
}
</script>

<template>
  <section class="max-w-5xl mx-auto px-6 py-20 text-gray-800 leading-relaxed">
    <!-- Intro Text -->
    <div class="space-y-10 text-lg md:text-xl">
      <p>
        <span class="font-semibold text-amber-700 text-2xl">con anima</span> – mit Herz, Mut, Geist und Leidenschaft
        spielen und lernen wir vom instrumentalen Neuling bis zum Profi mit- und voneinander.
      </p>

      <p class="pt-8">
        Wir sind ein Orchester mit Menschen unterschiedlicher sozialer und kultureller Herkunft, unterschiedlicher
        musikalischer Vorkenntnisse und verschiedener Generationen – vom Jugendlichen bis zum jungen oder jung gebliebenen
        Erwachsenen. Gemeinsam musizieren wir unterschiedliches Repertoire – von europäischer Klassik über Pop- und
        Filmmusik bis hin zu Arrangements über Lieder und Werke aus den Herkunftsländern unserer Mitglieder. Auch in
        Workshops entstandene Eigenkompositionen kamen bereits zur Aufführung.
      </p>

      <p class="pt-8">

        Bei unseren wöchentlichen Proben, Probenfahrten und Workshops geht es uns nicht nur um das Erlernen eines
        Instruments im Gruppenkontext, sondern um soziale Prozesse, Mitgestaltung, Gemeinschaft, den Mut, neue Wege zu
        wagen, sich durch Musik auszudrücken, mit allen Sinnen dabei zu sein – und mit Leidenschaft gemeinsam zu spielen!
        Jeder Mensch steckt voller Potenziale, mit denen er Gemeinschaften bereichern kann. Miteinander teilen wir
        Erfahrungen, entdecken Neues und erfahren uns in Klang und Stille. Bei unseren bisweilen interaktiven Auftritten
        für Groß und Klein tragen wir diesen Geist weiter.
      </p>
    </div>

    <!-- Image container placeholder -->
    <div class="pt-16 pb-16 flex justify-center">
      <div
          class="relative w-full max-w-3xl aspect-[16/9] bg-gray-100 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center"
      >
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

    <!-- Second Section -->
    <div class="space-y-10 text-lg md:text-xl pt-8">
      <h2 class="text-3xl font-semibold text-amber-700">An wen richtet sich Con Anima?</h2>

      <p class="pt-8">
        In unserem Orchester ist grundsätzlich jede*r willkommen, die/der ein Instrument im Gruppenkontext erlernen möchte
        und offen für unser Konzept ist. Unsere Hauptgruppe richtet sich in erster Linie an Jugendliche und junge
        Erwachsene, die im Gruppenkontext ein Instrument erlernen möchten.
      </p>

      <p class="pt-8">
        Seit Sommer 2021 können Eltern mit ihren Kindern (ab 6 Jahren) in unserer
        <span class="italic">"Mozart-Gruppe"</span> einen Einstieg ins gemeinsame Musizieren und ins Instrumentalspiel erleben.
      </p>

      <p class="pt-8">
        Neueinsteiger in beiden Angeboten (Hauptgruppe und <span class="italic">"Mozart-Gruppe"</span>) sind jederzeit willkommen!
        Kontaktieren Sie uns bei Interesse oder schauen Sie einfach mal bei unseren Proben in Landwasser (Freiburg) vorbei.
      </p>

      <h3 class="text-2xl font-semibold text-amber-700 mt-12 pt-8">Was wir derzeit noch nicht garantieren können:</h3>

      <ul class="list-disc list-inside space-y-4 pl-2 pt-4">
        <li>regelmäßiger Einzelunterricht</li>
        <li class="pt-2">eine gezielte musikpädagogische Einzelbetreuung für Kinder</li>
      </ul>

      <p class="pt-8">
        Wenn Sie finanziell geförderten Instrumentalunterricht für Ihr Kind (bis 18 Jahre) suchen, wenden Sie sich bitte an
        die Musikschule(n) Ihrer Region. Diese bieten meist ein umfangreiches Angebot an instrumentalem Einzel- und
        Gruppenunterricht und können oftmals bei dessen Finanzierung Unterstützung anbieten.
      </p>

      <p class="pt-8">
      Weitere Infos unter:
      </p>

      <!-- Buttons side-by-side -->
      <div class="pt-8 flex flex-wrap justify-center items-center gap-1 md:gap-8 md:pt-10">
        <SecondaryButton
            buttonText="VdM"
            link=" https://www.musikschulen.de/suche/musikschulsuche/"
            widthClass="w-50"
        />
        <SecondaryButton
            buttonText="Musikschulfinder"
            link="https://www.musikschulfinder.de"
            widthClass="w-50"
        />
      </div>

    </div>

  </section>
</template>

<style scoped>
img {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
</style>
