<template>
  <ProjectContentBase>
    <template #profile>
      <p>Neues Zeug profile info goes here.</p>
    </template>

    <template #description>
      <p>
        Neues Zeug description – Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <!-- Text Carousel -->
      <TextContentCarousel :slides="sampleSlides" :config="myConfig" />
    </template>

    <template #sponsorships>
      <ul class="list-disc pl-6">
        <li>Sponsor A</li>
        <li>Sponsor B</li>
      </ul>
    </template>
  </ProjectContentBase>
</template>

<script setup lang="ts">
import ProjectContentBase from "@/layouts/ProjectContentBase.vue";
import TextContentCarousel from "@/components/placeholder/TextContentCarousel.vue";
import { ref, computed, onMounted, onUnmounted } from "vue";

// Reactive window width
const windowWidth = ref(window.innerWidth);
const updateWidth = () => (windowWidth.value = window.innerWidth);
onMounted(() => window.addEventListener("resize", updateWidth));
onUnmounted(() => window.removeEventListener("resize", updateWidth));

// Computed config based on device width
const myConfig = computed(() => {
  if (windowWidth.value < 430) {
    return {
      height: 600,
      itemsToShow: 1.3,
      wrapAround: true,
      showNavigation: false,
    };
  }
  else if (windowWidth.value < 640) {
    return {
      height: 500,
      itemsToShow: 1.3,
      wrapAround: true,
      showNavigation: false,
    };
  } else if (windowWidth.value < 1024) {
    return {
      height: 340,
      itemsToShow: 1.27,
      wrapAround: true,
      showNavigation: true,
    };
  } else {
    return {
      height: 270,
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
</script>
