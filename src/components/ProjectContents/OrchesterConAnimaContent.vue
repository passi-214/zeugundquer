<template>
  <ProjectContentBase
      :showSponsorships="true"
      class="bg-gradient-to-b from-[#F7D28D] via-[#FBE1B5] to-[#E9A972] min-h-screen"
  >

    <template #profile>
      <Profile
          title="Orchester Con Anima"
          foundingYear="2018"
          :projects="[
          {
            title: 'Sozialmusikprojekt / interkulturelles Orchester',
            subitems: [
              '32 aktive Musizierende',
              '11 Herkunftsländern',
            ]
          }
        ]"
          concertsPerYear="2-5 Konzerte pro Jahr"
          responsible="Carola Christ"
          containerBg="bg-white/80 backdrop-blur-md"
          headerTextColor="text-[#A34865]"
          titleTextColor="text-[#C40F3C]"
          badgeTitleBg="bg-[#F5B95F]/50"
          badgeTitleText="text-[#2A2A2A]"
          badgeYearBg="bg-[#FAE308]/50"
          badgeYearText="text-[#2A2A2A]"
          boxBg="bg-white/90"
          sectionTitleColor="text-[#E9A716]"
          textColor="text-[#2A2A2A]"
          subTextColor="text-[#A34865]/80"
          concertsBoxBg="bg-[#FCCD85]/30"
          concertsTextColor="text-[#C40F3C]"
          responsibleBoxBg="bg-[#FAE308]/30"
          responsibleTextColor="text-[#2A2A2A]"
      />
      <div class="h-12 sm:h-12"></div>
    </template>

    <template #description>
      <div class="p-5">
        <div
            ref="panelRef"
            class="button-panel grid gap-4 justify-center justify-items-center mb-4"
            style="grid-template-columns: repeat(auto-fit, minmax(8.5rem, 1fr)); max-width: 40rem; margin-inline: auto;"
        >
          <!--
            Clean Update:
            - Passed clean label directly without string hacks.
            - Added dynamic :showCloseIcon parameter tracking button activation.
          -->
          <SquareButton
              v-for="(btn, index) in buttons"
              :key="index"
              :label="btn.label"
              :to="btn.to"
              :isActive="clickedButton === btn.to"
              :showCloseIcon="clickedButton === btn.to"
              @click="handleClick(btn.to)"
              v-show="!clickedButton || clickedButton === btn.to"
              bgColor="#A34865"
              activeBgColor="#C40F3C"
              textColor="#FFF8EC"
          />
        </div>

        <!-- The text content area -->
        <router-view :key="$route.fullPath"/>

        <CollapsibleGallery
            class="pt-20"
            :images="galleryImages"
            bgColor="bg-[#A34865]"
            hoverBgColor="bg-[#B25B6D]"
            textColor="text-[#FFF8EC]"
            pulseFrom="#9C5F6E"
            pulseTo="#A34865"
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
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import ProjectContentBase from "@/layouts/ProjectContentBase.vue";
import Profile from "@/components/placeholder/Profile.vue";
import SquareButton from "@/components/placeholder/SquareButton.vue";
import { useGallery } from "@/composables/useGallery";
import CollapsibleGallery from "@/components/placeholder/CollapsibleGallery.vue";

const buttons = [
  {label: "Aktuelles", to: "Aktuelles"},
  {label: "ConAnima", to: "ConAnima"},
  {label: "Orchester", to: "Orchester"},
  {label: "Team", to: "Team"},
  {label: "Mitspielen", to: "Mitspielen"},
  {label: "Unterstützen", to: "Unterstützen"}
]

const clickedButton = ref<string | null>(null)
const panelRef = ref<HTMLElement | null>(null)
const router = useRouter()
const route = useRoute()

let isButtonClicking = false

function handleClick(to: string) {
  if (clickedButton.value === to) {
    return
  }

  isButtonClicking = true
  clickedButton.value = to
  router.push({ name: to })
}

function collapseSection() {
  clickedButton.value = null

  if (route.name !== 'orchesterconanima' && route.path !== '/zeugundquer/orchesterconanima') {
    router.push('/zeugundquer/orchesterconanima')
  }
}

const handleGlobalClick = (event: MouseEvent) => {
  if (isButtonClicking) {
    isButtonClicking = false
    return
  }

  collapseSection()
}

onMounted(() => {
  document.addEventListener("click", handleGlobalClick);
});

onUnmounted(() => {
  document.removeEventListener("click", handleGlobalClick);
});

const lowResMusik = import.meta.glob('@/assets/images/orchester_con_anima/*.{jpg,jpeg}', {
  eager: true,
  import: 'default'
});

const galleryImages = useGallery(lowResMusik);
</script>

<style scoped>
@media (min-width: 800px) {
  .button-panel {
    max-width: 60rem;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    gap: 4rem;
  }
}
</style>