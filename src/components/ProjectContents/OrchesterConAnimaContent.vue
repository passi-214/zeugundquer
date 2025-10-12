<template>
  <ProjectContentBase>
    <template #profile>
      <Profile
          title="Orchester Con Anima"
          foundingYear="2018"
          :projects="[
          { title: 'Sozialmusikprojekt / interkulturelles Orchester',
            subitems: [
              '32 aktive Musizierende',
              '11 Herkunftsländern',
            ]
          }
        ]"
          concertsPerYear="2-5 Konzerte pro Jahr"
          responsible="Carola Christ"

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
      <div class="button-panel flex flex-wrap gap-4">
        <SquareButton
            v-for="button in buttons"
            :key="button.title"
            :title="button.title"
            :route="button.route"
        />
      </div>

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
import SquareButton from "@/components/placeholder/SquareButton.vue";

const buttons = [
  { title: 'Con Anima', route: '/conanima' },
  { title: 'Aktuelles', route: '/aktuelles' },
  { title: 'Orchester', route: '/orchester' },
  { title: 'Team', route: '/team' },
  { title: 'Mitspielen', route: '/mitspielen' },
  { title: 'Unterstützen', route: '/unterstuetzen' }
]
</script>
