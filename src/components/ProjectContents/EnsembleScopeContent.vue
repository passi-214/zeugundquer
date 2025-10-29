<template>
  <ProjectContentBase :showSponsorships="true">
    <template #profile>
      <Profile
          title="ensemble scope"
          foundingYear="2019"
          :projects="[
          { title: ' ',
            subitems: [
              '9 Musiker:innen',
              '2-3 künstlerische Leitung',
              'ca. 3 Techteam'
            ]
          }
        ]"
          concertsPerYear="1-4 Konzerte pro Jahr"
          responsible="Lucia Kilger, Clemens K. Thomas"

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

      <section class="flex flex-col items-center px-6 text-gray-800 leading-relaxed">
        <div class="w-full max-w-4xl space-y-8 text-left md:text-justify text-lg md:text-xl">
          <p class="text-xl font-bold mb-4 px-4 sm:px-10 pb-6 sm:pb-10">
            Ensemble s c o p e versteht sich als flexibler Klangkörper, als Instrumental- und Vokalkollektiv, als
            Zusammenschluss von Komposition, Elektronik, Licht, Video, Performance, Setdesign.
            <br>
            <br>
            Der Fokus liegt nicht nur auf der spartenübergreifenden, intermedialen Arbeit und der künstlerischen
            Auseinandersetzung mit gesellschaftlich relevanten Themenkomplexen, sondern auch auf der Dirigierposition
            als
            experimentellem Forschungsgegenstand.

          </p>
        </div>
      </section>
      <SecondaryButton
          paragraph="Erfahre mehr über das Projekt:"
          buttonText="ensemble scope"
          link="http://www.ensemblescope.de/"
          class="pb-12"
      />

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
import Profile from "@/components/placeholder/Profile.vue";
import SecondaryButton from "@/components/placeholder/SecondaryButton.vue";
</script>


