<script setup>
import { nextTick, onMounted, ref } from "vue";
import ProjectContentBase from "@/layouts/ProjectContentBase.vue";
import AktuellesCard from "@/components/placeholder/AktuellesCard.vue";
import { useRouter, useRoute } from "vue-router";

const aktuellesData = ref([]);
const activeCard = ref(null);
const descriptionRef = ref(null);
const aktuellesHeader = ref(null);

const router = useRouter();
const route = useRoute();

// Unified close function that manages state and updates routing
const closeActiveCard = () => {
  activeCard.value = null;
  router.replace({ path: '/zeugundquer/vereinszeug' });
};

// Fetch JSON from public folder at runtime
onMounted(async () => {
  try {
    const cloudinaryUrl = import.meta.env.VITE_CLOUDINARY_AKTUELLES;
    const res = await fetch(cloudinaryUrl);
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    const json = await res.json();
    aktuellesData.value = json.Aktuelles;
  } catch (err) {
    console.error('Failed to fetch vereinszeug data:', err);
  }

  // Check if URL has a slug on load
  const slugFromUrl = route.params.slug;
  if (slugFromUrl) {
    const decodedSlug = decodeURIComponent(slugFromUrl);
    const card = aktuellesData.value.find(
        (entry) =>
            entry.title.toLowerCase().replace(/\s+/g, '-') === decodedSlug
    );
    if (card) {
      activeCard.value = card;
    }
  }
});

// Handle card clicks (toggles open / closed states)
const handleCardClick = async (entry) => {
  // REQUIREMENT: Close the card if clicked while already active
  if (activeCard.value === entry) {
    closeActiveCard();
    return;
  }

  activeCard.value = entry;

  // Update the URL without reloading
  const slug = encodeURIComponent(entry.title.toLowerCase().replace(/\s+/g, '-'));
  router.replace({ path: `/zeugundquer/vereinszeug/${slug}` });

  // Wait for DOM updates before scrolling
  await nextTick();

  if (aktuellesHeader.value) {
    const headerOffset =
        aktuellesHeader.value.getBoundingClientRect().top + window.scrollY - 80;
  }
};

// Handle clicks outside the description grid bounds
const handleClickOutside = (event) => {
  // FIX: If the target element has been unmounted or detached from the DOM
  // (which happens instantly when clicking the close button), ignore the outside click event entirely.
  if (!event.target || !document.body.contains(event.target)) {
    return;
  }

  const path = event.composedPath();
  if (descriptionRef.value && !path.includes(descriptionRef.value)) {
    if (activeCard.value) {
      closeActiveCard();
    }
  }
};

// Attach global click listener
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});
</script>

<template>
      <h2
          ref="aktuellesHeader"
          class="text-3xl font-bold mb-4 px-4 sm:px-10 pb-20 text-center"
      >
        Aktuelles
      </h2>

      <!--
        REQUIREMENT: Removed 'v-show' from AktuellesCard loop.
        All background cards remain cleanly rendered in order below or above the opened one.
      -->
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
            @close="closeActiveCard"
        />
      </div>
</template>