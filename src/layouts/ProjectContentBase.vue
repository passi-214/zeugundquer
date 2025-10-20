<template>
  <div class="w-full min-h-[100px] pt-10">
    <!-- Profile -->
    <section class="mb-12 pt-10 p-5">
      <h2 class="text-2xl font-bold mb-4"></h2>
      <slot name="profile"></slot>
    </section>

    <!-- Description -->
    <section class="mb-12 pb-12">
      <slot name="description"></slot>
    </section>

    <!-- Sponsorships -->
    <section
        v-if="showSponsorships"
        class="mb-12 p-10 bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 rounded-xl shadow-inner"
    >
      <h2 class="text-3xl font-bold mb-6 pb-8 text-indigo-900">Förderer und Sponsoren</h2>
      <slot name="sponsorships">
        <p>[Default sponsorships placeholder]</p>
      </slot>
    </section>

    <!-- Footer -->
    <section class="mb-12 pb-12">
      <Footer />
    </section>
  </div>
</template>

<script setup lang="ts">
import Footer from "@/components/Footer.vue";

defineProps({
  showSponsorships: {
    type: Boolean,
    default: true
  }
});
</script>
