<template>
  <ProjectContentBase :showSponsorships="true">
  <template #profile>
      <Profile
          title="NEUES ZEUG"
          foundingYear="2014"
          :projects="[
          { title: 'seit 2015 ‘Neues Zeug’ komponiert, geprobt und gespielt:',
            subitems: [
              'ca. 40 Komponist:innen',
              '80 Musikpädagog:innen',
              '200 Instrumentalschüler:innen'
            ]
          }
        ]"
          concertsPerYear="2 Konzerte pro Jahr"
          responsible="Vasiliki Kourti-Papamoustou, Lara Jakob"

          containerBg="bg-gradient-to-br from-indigo-50 to-purple-50"
          headerTextColor="text-purple-700"
          titleTextColor="text-purple-900"
          badgeTitleBg="bg-purple-200"
          badgeTitleText="text-purple-900"
          badgeYearBg="bg-indigo-200"
          badgeYearText="text-indigo-900"
          boxBg="bg-white"
          sectionTitleColor="text-indigo-700"
          textColor="text-gray-800"
          subTextColor="text-gray-600"
          concertsBoxBg="bg-yellow-100"
          concertsTextColor="text-yellow-900"
          responsibleBoxBg="bg-green-100"
          responsibleTextColor="text-green-800"
      />
      <div class="h-12 sm:h-12"></div>

    </template>

    <template #description>
      <h2 class="text-3xl font-bold mb-4 px-4 sm:px-10 pt-12 sm:pt-25 pb-10">
        Die fünf zentralen Aspekte von NEUES ZEUG:
      </h2>

      <TextContentCarousel
          :slides="sampleSlides"
          :config="myConfig"
          class="mt-6"
      />

      <!-- only render iframe when we have a valid embedUrl -->
      <div class="p-11">
        <h2 class="text-3xl font-bold mb-4 px-4 sm:px-10 pt-12 sm:pt-25 pb-10">
          Projekt Teaser
        </h2>
        <Video url="https://www.youtube.com/watch?v=iwqa6B6KHRI" title="Neues Zeug Video"/>
      </div>

      <!-- Secondary Button Section -->
      <SecondaryButton
          paragraph="Erfahre mehr über das Projekt:"
          buttonText="NEUES ZEUG"
          link="https://clemenskthomas.de/neues-zeug-musik-aus-dem-jetzt"
      />
    </template>

    <template #sponsorships>
      <Sponsors :sponsors="sponsors"/>
    </template>
  </ProjectContentBase>
</template>

<script setup lang="ts">
import ProjectContentBase from "@/layouts/ProjectContentBase.vue";
import TextContentCarousel from "@/components/placeholder/TextContentCarousel.vue";
import {ref, computed, onMounted, onUnmounted} from "vue";
import Profile from "@/components/placeholder/Profile.vue";
import Sponsors from "@/components/placeholder/Sponsors.vue";
import SecondaryButton from "@/components/placeholder/SecondaryButton.vue";
import aventis from '@/assets/images/sponsor/aventis_foundation.avif'
import bundesregierung from '@/assets/images/sponsor/bundesregierung.avif'
import bwKunst from '@/assets/images/sponsor/bw_kunst.avif'
import bwSoziales from '@/assets/images/sponsor/bw_soziales.avif'

// Reactive window width
const windowWidth = ref(window.innerWidth);
const updateWidth = () => (windowWidth.value = window.innerWidth);
onMounted(() => window.addEventListener("resize", updateWidth));
onUnmounted(() => window.removeEventListener("resize", updateWidth));

// Computed config based on device width
const myConfig = computed(() => {
  if (windowWidth.value < 430) {
    return {
      itemsToShow: 1.1,
      wrapAround: true,
      showNavigation: false,
    };
  } else if (windowWidth.value < 640) {
    return {
      itemsToShow: 1.2,
      wrapAround: true,
      showNavigation: false,
    };
  } else if (windowWidth.value < 1024) {
    return {
      itemsToShow: 1.25,
      wrapAround: true,
      showNavigation: true,
    };
  } else {
    return {
      itemsToShow: 1.3,
      wrapAround: true,
      showNavigation: true,
    };
  }
});


// Sample slides
const sampleSlides = [
  {
    id: 1,
    title: "Austausch",
    description: "Durch die Zusammenarbeit zwischen Komponist*innen und Musikpädagog*innen begegnen sich zwei Welten," +
        " die eher getrennt voneinander stehen. Nur wenn sich die eine auf die andere Seite einlässt entsteht eine " +
        "fruchtbare Wechselwirkung. Nur wenn der oder die Komponist*in in die Welt der Kinder und Jugendlichen eintaucht, " +
        "kann Musik entstehen, die gerne von ihnen gespielt wird. Die Kinder und Jugendlichen nehmen durch ihr Feedback" +
        " am Entstehungsprozess der Kompositionen teil. NEUES ZEUG-Erfahrungen entstehen also durch die Begegnungen im " +
        "Dreieck Schüler*in - Pädagog*in - Komponist*in.",
  },
  {
    id: 2,
    title: "Begegnung \nmit Neuem",
    description: "NEUES ZEUG möchte Musik aus dem Jetzt in den Instrumentalunterricht bringen – zum Entdecken, zur " +
        "Konfrontation mit Unbekanntem und zur kreativen Auseinandersetzung. Wir finden: Für eine lebendige Musikkultur " +
        "braucht es einen Bezug zur Gegenwart. Die Begegnung mit der Jetzt-Zeit und der Musik der Gegenwart findet am " +
        "Besten beim „selber Spielen“ statt. Und zwar als Selbstverständlichkeit - die Begegnung mit dem unbekannten " +
        "NEUEN ZEUG zwischen der und zusätzlich zur Begegnung mit dem Bekanntem, wie Pop-, Film-, Jazz-, klassischer, … Musik.",
  },
  {
    id: 3,
    title: "Entdecken",
    description: "Die Instrumentalschüler*innen entdecken durch einen Prozess der Konfrontation, Exploration, Reflexion " +
        "und persönlichen Identifikation ungehörte Klangwelten und vielleicht einen anderen Bezug zum Instrument und " +
        "dessen Instrumentaltechnik (Bsp.: inside piano-Spiel). Dieser Prozess basiert einerseits auf Neugier und " +
        "Forschergeist, andererseits auf Freiwilligkeit und eigener Motivation - und nicht weil es „kulturell besonders " +
        "wertvoll“ ist. Drei Schüler*innen haben die Erprobung von NEUES ZEUG abgebrochen - was kein Problem war, " +
        "schließlich passiert das im Instrumentalunterricht immer wieder mal.",
  },
  {
    id: 4,
    title: "Anderes \nUnterrichten",
    description: "NEUES ZEUG erfordert und befördert eine andere Art des Unterrichtens. Da die neu entstandene Musik " +
        "durch ihre Ungewöhnlichkeit für die meisten Schüler*innen zunächst sperrig wirkte, stand von Anfang an die " +
        "Emotionalität und das Unterrichten mit assoziativen Inhalten im Vordergrund des Musizierunterrichts. Mithilfe " +
        "von außermusikalischen Inhalten, wie Bildern, Geschichten oder persönlichen Erlebnissen wurde direkt auf die " +
        "Suche nach der Aussage der neu geschriebenen Stücke gegangen. Dabei half in einigen Fällen auch das " +
        "Improvisieren nach diesen Inhalten, oder im Charakter des neuen Stücks.",
  },
  {
    id: 5,
    title: "Musizieren  \nin Freiheit",
    description: "NEUES ZEUG verändert das Interpretieren und Gestalten von Musik. Denn die bei klassischer Musik oder " +
        "Pop-und Filmmusik bekannten Hör- und Leseerwartungen an die zu spielenden Stücke und Noten greifen beim Spielen" +
        " von Neuer Musik nicht mehr wie gewohnt. Die Begegnung mit dem Unbekannten öffnet Räume für freies, kreatives " +
        "und persönlichkeitsbezogenes Interpretieren und Musizieren - für ein intensives Eintauchen, Erleben und " +
        "zu-Eigen-Machen der neuen Klangwelt.",
  },
];

const sponsors = [
  { id: 1, url: aventis, name: 'Sponsor 1', current: true },
  { id: 2, url: bundesregierung, name: 'Sponsor 2', current: false },
  { id: 3, url: bwKunst, name: 'Sponsor 3', current: true },
  { id: 4, url: bwSoziales, name: 'Sponsor 4', current: false },
];

</script>


<style scoped>
.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 ratio */
  height: 0;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
}

.youtube-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 12px;
}
</style>