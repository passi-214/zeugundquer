<template>
  <ProjectContentBase>
    <template #profile>
      <p>Musi Casa profile info goes here.</p>
    </template>

    <template #description>
      <p>
        Musi Casa description – Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
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
</script>
