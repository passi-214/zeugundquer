<script setup>
import { ref, onMounted } from "vue";
import ProjectContentBase from "@/layouts/ProjectContentBase.vue";
import AktuellesCard from "@/components/placeholder/AktuellesCard.vue";
import {useRouter} from "vue-router";

const aktuellesData = ref([]);
const activeCard = ref(null); // store the clicked card

const descriptionRef = ref(null); // reference to the #description container
// Fetch JSON from public folder at runtime
onMounted(async () => {
  const res = await fetch("/data/aktuelles.json");
  const json = await res.json();
  aktuellesData.value = json.Aktuelles;
});

// Handle card click
const handleCardClick = (entry) => {
  activeCard.value = entry;
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
      <div ref="descriptionRef" class="flex flex-col items-center gap-20 px-4 md:px-6 lg:px-8 w-full">
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
