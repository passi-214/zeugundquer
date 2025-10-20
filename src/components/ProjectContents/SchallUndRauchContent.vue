<script setup>

import Profile from "@/components/placeholder/Profile.vue";
import ProjectContentBase from "@/layouts/ProjectContentBase.vue";
</script>

<template>
  <ProjectContentBase :showSponsorships="true">
  <template #profile>
      <Profile
          title="Schall und Rauch"
          foundingYear="2019"
          :projects="[
          { title: ' “Melodien des Lebens” - Musik und Lebensgeschichten im Dialog  ',
            subitems: [
              'Duo Schall&Rauch',
              'Teilnehmende am Projekt des Seniorenheims ',
            ]
          }
        ]"
          concertsPerYear="2-3 Projekt-Konzerte im Jahr "
          responsible="Clara Bauer und Lena Widdermann"

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
      <section class="flex flex-col items-center px-6 py-20 text-gray-800 leading-relaxed">
        <!-- ✅ Left-aligned title, justified text only on larger screens -->
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

    </template>
  </ProjectContentBase>
</template>

<style scoped>

</style>