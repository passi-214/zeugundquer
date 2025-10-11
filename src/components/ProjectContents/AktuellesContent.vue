<script setup>
import { ref, onMounted } from "vue";
import ProjectContentBase from "@/layouts/ProjectContentBase.vue";
import AktuellesCard from "@/components/placeholder/AktuellesCard.vue";

const aktuellesData = ref([]);

// Fetch JSON from public folder at runtime
onMounted(async () => {
  const res = await fetch("/data/aktuelles.json");
  const json = await res.json();
  aktuellesData.value = json.Aktuelles; // assuming your JSON has an "Aktuelles" array
});
</script>

<template>
  <ProjectContentBase>
    <template #description>
      <div class="flex flex-col items-center gap-15 px-4 md:px-6 lg:px-8 w-full">
        <AktuellesCard
            v-for="(entry, index) in aktuellesData"
            :key="index"
            :entry="entry"
        />
      </div>
    </template>
  </ProjectContentBase>
</template>



<style scoped>
/* Optional: you can limit max width of cards so they don't stretch too much */
.AktuellesCard {
  max-width: 600px;
  width: 100%;
}
</style>
