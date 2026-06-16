<template>
  <ProjectContentBase
      :showSponsorships="true"
      class="bg-gradient-to-b from-[#F7D28D] via-[#FBE1B5] to-[#E9A972] min-h-screen"
  >
    <template #profile>
      <Profile :data="conAnimaData" />
      <div class="h-12 sm:h-12"></div>
    </template>

    <template #description>
      <div class="p-5 flex flex-col items-center">

        <TransitionGroup
            ref="panelRef"
            tag="div"
            name="page-layout"
            @before-leave="beforeLeave"
            @leave="leave"
            class="w-full grid grid-cols-2 md:grid-cols-3 gap-4 justify-center justify-items-center mb-8 max-w-4xl transition-all duration-500 ease-in-out"
            style="scroll-margin-top: -150px;"
        >
          <template v-for="(btn, index) in buttons" :key="btn.to">

            <div
                class="w-full transition-all duration-500 ease-in-out"
                :class="[
                  clickedButton === btn.to || closingButton === btn.to ? 'col-span-full scale-[1.02]' : '',
                  clickedButton && clickedButton !== btn.to ? 'opacity-30 grayscale blur-[0.5px] scale-95 cursor-pointer' : ''
                ]"
            >
              <SquareButton
                  :label="btn.label"
                  :to="btn.to"
                  :isActive="clickedButton === btn.to"
                  :showCloseIcon="clickedButton === btn.to"
                  @click="handleClick(btn.to)"
                  bgColor="#A34865"
                  activeBgColor="#C40F3C"
                  textColor="#FFF8EC"
                  class="w-full min-h-[5rem]"
              />
            </div>

            <div
                v-if="clickedButton === btn.to"
                key="router-content-wrapper"
                class="grid-content w-full col-span-full overflow-hidden transition-all duration-500 ease-in-out"
            >
              <div class="py-4">
                <div class="bg-white/40 backdrop-blur-sm rounded-xl p-6 shadow-inner w-full">
                  <router-view :key="$route.fullPath"/>
                </div>
              </div>
            </div>

          </template>
        </TransitionGroup>

        <CollapsibleGallery
            class="pt-20 w-full"
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
      <Sponsors :sponsors="sponsors"/>
    </template>
  </ProjectContentBase>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import ProjectContentBase from "@/layouts/ProjectContentBase.vue";
import Profile from "@/components/placeholder/Profile.vue";
import SquareButton from "@/components/placeholder/SquareButton.vue";
import { useGallery } from "@/composables/useGallery";
import CollapsibleGallery from "@/components/placeholder/CollapsibleGallery.vue";
import conAnimaData from "@/assets/data/con_anima/con_anima_steckbrief.json"
import conAnimaContent from "@/assets/data/con_anima/con_anima_content.json"
import Sponsors from "@/components/placeholder/Sponsors.vue";

const buttons = ref([
  {label: "Aktuelles", to: "Aktuelles"},
  {label: "ConAnima", to: "ConAnima"},
  {label: "Orchester", to: "Orchester"},
  {label: "Team", to: "Team"},
  {label: "Mitspielen", to: "Mitspielen"},
  {label: "Unterstützen", to: "Unterstützen"}
])

const clickedButton = ref<string | null>(null)
const closingButton = ref<string | null>(null)
const panelRef = ref<any>(null)

const router = useRouter()
const route = useRoute()

watch(() => route.name, (newName) => {
  const match = buttons.value.find(b => b.to === newName)
  if (match) {
    clickedButton.value = match.to
    closingButton.value = null
  } else if (route.path === '/zeugundquer/orchesterconanima') {
    if (clickedButton.value) {
      closingButton.value = clickedButton.value
    }
    clickedButton.value = null
  }
}, { immediate: true })

async function handleClick(to: string) {
  if (clickedButton.value === to) {
    collapseSection()
    return
  }

  if (clickedButton.value) {
    closingButton.value = clickedButton.value
  }

  clickedButton.value = to
  await router.push({ name: to })

  await nextTick()

  // Set to 250ms as requested to match the height interpolation timing perfectly
  setTimeout(() => {
    if (panelRef.value?.$el) {
      panelRef.value.$el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }, 200)
}

function collapseSection() {
  if (clickedButton.value) {
    closingButton.value = clickedButton.value
  }
  clickedButton.value = null

  if (route.name !== 'orchesterconanima' && route.path !== '/zeugundquer/orchesterconanima') {
    router.push('/zeugundquer/orchesterconanima')
  }
}

/* --- Smooth Height JS Hooks --- */

const beforeLeave = (el: Element) => {
  const htmlEl = el as HTMLElement;
  if (htmlEl.classList.contains('grid-content')) {
    htmlEl.style.height = `${htmlEl.offsetHeight}px`;
  }
}

const leave = (el: Element, done: () => void) => {
  const htmlEl = el as HTMLElement;
  if (htmlEl.classList.contains('grid-content')) {
    htmlEl.offsetHeight;
    htmlEl.style.height = '0px';
    htmlEl.style.opacity = '0';

    setTimeout(() => {
      closingButton.value = null;
      done();
    }, 500);
  } else {
    done();
  }
}

const sponsors = conAnimaContent.sponsor
const lowResMusik = import.meta.glob('@/assets/images/orchester_con_anima/*.{jpg,jpeg}', {
  eager: true,
  import: 'default'
});
const galleryImages = useGallery(lowResMusik);
</script>

<style scoped>
.page-layout-move {
  transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}

.page-layout-enter-active {
  transition: max-height 0.5s ease-out, opacity 0.4s ease-out;
  max-height: 1000px;
}

.page-layout-enter-from {
  opacity: 0;
  max-height: 0px;
}

.page-layout-leave-active.grid-content {
  transition: height 0.5s cubic-bezier(0.25, 1, 0.5, 1),
  opacity 0.4s cubic-bezier(0.25, 1, 0.5, 1);
}
</style>