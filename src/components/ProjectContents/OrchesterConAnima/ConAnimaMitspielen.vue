<script setup>
import { ref } from 'vue'
import SecondaryButton from '@/components/placeholder/SecondaryButton.vue'
import Video from '@/components/placeholder/Video.vue'

const imageSrc = ref('/images/orchestra.jpg')
const placeholder = 'https://via.placeholder.com/800x500?text=Con+Anima+Orchester'

const handleImageError = () => {
  imageSrc.value = placeholder
}
</script>

<template>
  <section class="flex flex-col items-center px-6 py-20 text-gray-800 leading-relaxed">
    <!-- ✅ Left-aligned title, justified text only on larger screens -->
    <div class="w-full max-w-4xl space-y-8 text-left md:text-justify text-lg md:text-xl">

      <!-- Title -->
      <h2 class="text-3xl font-semibold text-amber-700">
        Auch du kannst mitspielen
      </h2>


      <!-- Rehearsal Info -->
      <p class="pt-4">
        Wir proben immer Samstag vormittags in der Albert Schweitzer Schule III im Freiburger Stadtteil Landwasser:
      </p>

      <ul class="list-disc list-inside space-y-1">
        <li>
          "Mozart-Gruppe" (Eltern-Kind-Orchester): 10 – 10:45 Uhr
        </li>
        <li>
          Hauptorchester / Ensembleproben: 11 – 13 Uhr
        </li>
        <li>
          Einsteiger-Unterricht: 10 – 10:45 Uhr
        </li>
      </ul>

      <p class="pt-4">
        Vorkenntnisse oder ein eigenes Instrument brauchst du nicht. Wenn du eines hast, kannst du es natürlich gerne
        mitbringen.
      </p>

      <!-- Instrument Loan -->
      <h2 class="pt-8 text-3xl font-semibold text-amber-700">
        Instrumentenleihe
      </h2>

      <p class="pt-4">
        Sofern vorhanden, können unsere Teilnehmer*innen Instrumente bei uns leihen. Sollte das gewünschte
        Orchesterinstrument derzeit nicht zur Verfügung stehen, finden wir gern gemeinsam mit Ihnen/Dir eine Lösung.
        Instrumente in Kindergrößen können wir in der Regel nicht zur Verfügung stellen, helfen aber bei der
        Beschaffung.
      </p>

      <!-- Videos -->
      <h2 class="pt-8 pb-8 text-3xl font-semibold text-amber-700">
        Videos aus den Proben
      </h2>

      <!-- Lingua Franca -->
      <h3 class="pb-4 text-2xl font-semibold text-amber-700">
        Uraufführung Lingua Franca am 09.04.2022
      </h3>

      <p class="pb-8">
        In Kooperation mit dem
        <a href="https://www.schwere-s-los.de/bettlerchor-2/" class="text-amber-700 underline hover:text-amber-800">
          BettlerChor Freiburg
        </a>
      </p>

      <Video url="https://youtu.be/irYha9kDb4k" />

      <!-- Der kleine Prinz -->
      <h3 class="pt-12 pb-4 text-2xl font-semibold text-amber-700">
        Titelmusik "Der kleine Prinz"
      </h3>

      <p class="pb-8">
        Nach drei Monaten Pause beginnen wir nach unseren Möglichkeiten: Anfang Juli wurden in kleinen Gruppen Aufnahmen
        des Stückes "Der Kleine Prinz" gemacht. Wir sammelten erste Erfahrungen mit dem Einspielen von Orchesterstimmen
        und Audioaufnahmen. Claudiuis Merz leistete hervorragende Arbeit bei Aufnahme und Schnitt von Ton und Bild. Das
        Gesamtwerk ist nun auf unserem neuen YouTube-Channel zu sehen. Die Aufnahme wurde Teil der FreiDays-Sendungen
        der Musikhochschule Freiburg.
      </p>

      <Video url="https://youtu.be/g0eyIdr3dMU" />
    </div>
  </section>
</template>

<style scoped>
img {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
</style>
