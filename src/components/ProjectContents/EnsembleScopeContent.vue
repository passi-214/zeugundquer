<template>
  <ProjectContentBase :showSponsorships="true">
    <template #profile>
      <Profile :data="ensembleScopeData"
      />
      <div class="h-12 sm:h-12"></div>

    </template>

    <template #description>

      <section class="flex flex-col items-center px-6 text-gray-800 leading-relaxed">
        <div class="w-full max-w-4xl space-y-8 text-left md:text-justify text-lg md:text-xl">
          <p class="text-xl font-bold mb-4 px-4 sm:px-10 pb-6 sm:pb-10">
            Ensemble s c o p e versteht sich als flexibler Klangkörper, als Instrumental- und Vokalkollektiv, als
            Zusammenschluss von Komposition, Elektronik, Licht, Video, Performance, Setdesign.
          </p>
          <p class="text-xl font-bold mb-4 px-4 sm:px-10 pb-6 sm:pb-10">
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
          class="pb-12 pt-0"
          showExternalIcon=true
      />

    </template>

    <template #sponsorships>
      <Sponsors :sponsors="sponsors"/>
    </template>
  </ProjectContentBase>
</template>

<script setup lang="ts">
import ProjectContentBase from "@/layouts/ProjectContentBase.vue";
import Profile from "@/components/placeholder/Profile.vue";
import SecondaryButton from "@/components/placeholder/SecondaryButton.vue";
import ensembleScopeData from "@/assets/data/ensemble_scope/ensemblescope_steckbrief.json"
import ensembleScopeContent from "@/assets/data/ensemble_scope/ensemble_scope_content.json"
import Sponsors from "@/components/placeholder/Sponsors.vue";

const sponsors = ensembleScopeContent.sponsor;
</script>


