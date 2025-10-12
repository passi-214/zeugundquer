<script setup>
import { ref, onMounted, nextTick } from "vue"; // ✅ added nextTick
import ProjectContentBase from "@/layouts/ProjectContentBase.vue";
import AktuellesCard from "@/components/placeholder/AktuellesCard.vue";
import { useRouter } from "vue-router";

const aktuellesData = ref([]);
const activeCard = ref(null);
const descriptionRef = ref(null);
const aktuellesHeader = ref(null); // ✅ add a ref for the header

// Fetch JSON from public folder at runtime
onMounted(async () => {
  const res = await fetch("/data/aktuelles.json");
  const json = await res.json();
  aktuellesData.value = json.Aktuelles;
});

// Handle card click
const handleCardClick = async (entry) => {
  activeCard.value = entry;

  // ✅ Wait for DOM updates before scrolling
  await nextTick();

  // ✅ Smooth scroll to the top of the Aktuelles section
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
const handleClickOutside = (event) => {
  const path = event.composedPath();
  if (descriptionRef.value && !path.includes(descriptionRef.value)) {
    activeCard.value = null;
  }
};

// Attach global click listener
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});
</script>


<template>
  <ProjectContentBase>
    <template #description>
      <h2
          ref="aktuellesHeader"
          class="text-3xl font-bold mb-4 px-4 sm:px-10 pt-12 sm:pt-25 pb-10"
      >
        Aktuelles
      </h2>

      <div
          ref="descriptionRef"
          class="flex flex-col items-center gap-20 px-4 md:px-6 lg:px-8 w-full"
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

