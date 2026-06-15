<script setup>

import Profile from "@/components/placeholder/Profile.vue";
import ProjectContentBase from "@/layouts/ProjectContentBase.vue";
import Sponsors from "@/components/placeholder/Sponsors.vue";
</script>

<template>
  <ProjectContentBase :showSponsorships="true">
  <template #profile>
      <Profile :data="schallUndRauchData"/>
      <div class="h-12 sm:h-12"></div>

    </template>
    <template #description>
      <section class="flex flex-col items-center px-6 py-20 text-gray-800 leading-relaxed">
        <div class="w-full max-w-4xl space-y-8 text-left md:text-justify text-lg md:text-xl">
          <p>Mit unserem Duo Schall & Rauch laden wir das Publikum auf eine interaktive musikalische Reise ein, die
            Generationen verbindet, Erinnerungen weckt und durch Chansons, Volks- und Kultlieder zum gemeinsamen Erleben
            und Gestalten anregt.
          </p>
          <p>
            Aufbauend auf unseren Konzerten entwickeln wir ein interaktives Musikprojekt, das insbesondere Seniorinnen
            und Senioren in Seniorenheimen in Freiburg aktiv einbindet. In einer Kompaktphase von 5–10 Tagen gestalten
            wir gemeinsam Workshops, in denen Musik, biografische Erinnerungen und persönliche Ausdrucksformen
            zusammenkommen.
          </p>
        </div>
      </section>
    </template>
    <template #sponsorships>
      <Sponsors :sponsors="sponsors"/>
    </template>
  </ProjectContentBase>
</template>

<style scoped>

</style>

<script>
import schallUndRauchData from '@/assets/data/schall_und_rauch/schallundrauch_steckbrief.json';
import schallUndRauchContent from '@/assets/data/schall_und_rauch/schall_und_rauch_content.json';
const sponsors = schallUndRauchContent.sponsor
</script>