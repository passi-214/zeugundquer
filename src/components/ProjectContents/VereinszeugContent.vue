<template>
  <ProjectContentBase>
    <template #profile>
      <Profile
          title="zeug und quer e.V."
          foundingYear="2015"
          :projects="[
          { title: '6 dauerhafte Projekte, etliche einmalige Initiativen und Projekt-Starthilfen insbesondere in den Bereichen:',
            subitems: [
              'Kulturelle Bildung und Teilhabe',
              'Inklusion',
              'Musikvermittlung in postmigrantischen Communities'
            ]
          }
        ]"
          concertsPerYear="ca. 15-20 Konzerte pro Jahr"
          responsible="Vereinsvorstand: Katharina Schmauder, Samira Nowarra, Hansjörg Schmauder"

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
    </template>
  </ProjectContentBase>
</template>


<script setup lang="ts">
import ProjectContentBase from "@/layouts/ProjectContentBase.vue";
import Profile from "@/components/placeholder/Profile.vue";
</script>
