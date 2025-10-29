<script setup>
import {nextTick, onMounted, ref} from "vue"; // ✅ added nextTick
import ProjectContentBase from "@/layouts/ProjectContentBase.vue";
import AktuellesCard from "@/components/placeholder/AktuellesCard.vue";
import {useRouter} from "vue-router";

const aktuellesData = ref([]);
const activeCard = ref(null);
const descriptionRef = ref(null);
const aktuellesHeader = ref(null); // ✅ add a ref for the header

// Fetch JSON from public folder at runtime
onMounted(async () => {
  const res = await fetch("/data/aktuelles.json");
  const json = await res.json();
  aktuellesData.value = json.Aktuelles;

  // Check if URL has a slug
  const slugFromUrl = route.params.slug;
  if (slugFromUrl) {
    const decodedSlug = decodeURIComponent(slugFromUrl);
    const card = aktuellesData.value.find(
        (entry) =>
            entry.title.toLowerCase().replace(/\s+/g, '-') === decodedSlug
    );
    if (card) {
      activeCard.value = card;

      // Scroll to the top of the section
      await nextTick();
      if (aktuellesHeader.value) {
        const headerOffset =
            aktuellesHeader.value.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({
          top: headerOffset,
          behavior: "smooth",
        });
      }
    }
  }
});


// Handle card click

const router = useRouter();

const handleCardClick = async (entry) => {
  activeCard.value = entry;

  // Update the URL without reloading
  const slug = encodeURIComponent(entry.title.toLowerCase().replace(/\s+/g, '-'));
  router.replace({ path: `/zeugundquer/Aktuelles/${slug}` });


  // Wait for DOM updates before scrolling
  await nextTick();

  if (aktuellesHeader.value) {
    const headerOffset =
        aktuellesHeader.value.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({
      top: headerOffset,
      behavior: "smooth",
    });
  }
};


// Handle clicks outside the description
const handleClickOutside = async (event) => {
  const path = event.composedPath();
  if (descriptionRef.value && !path.includes(descriptionRef.value)) {
    if (activeCard.value) {
      activeCard.value = null;

      // Only replace route if there was an active card
    }
  }
};


// Attach global click listener
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});
</script>


<template>
  <ProjectContentBase :showSponsorships="false">
    <template #description>
      <h2
          ref="aktuellesHeader"
          class="text-3xl font-bold mb-4 px-4 sm:px-10 pb-20 text-center"
      >
        Aktuelles
      </h2>

      <div
          ref="descriptionRef"
          class="flex flex-col items-center gap-20 px-4 md:px-6 lg:px-8 w-full min-h-300 pb-20"
      >
        <AktuellesCard
            v-for="(entry, index) in aktuellesData"
            :key="index"
            :entry="entry"
            :isActive="activeCard === entry"
            @click="handleCardClick(entry)"
            v-show="!activeCard || activeCard === entry"
        />
      </div>
    </template>
  </ProjectContentBase>
</template>

