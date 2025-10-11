<template>
  <div class="w-full min-h-[1000px] pt-10">
    <!-- Profile -->
    <section class="mb-12 p-10">
      <h2 class="text-2xl font-bold mb-4"></h2>
      <slot name="profile">
        <p>[Default profile placeholder]</p>
      </slot>
    </section>

    <!-- Description -->
    <section class="mb-12">

      <slot name="description">
      </slot>
    </section>

    <!-- Sponsorships -->
    <section>
      <h2 class="text-2xl font-bold mb-4">Sponsorships</h2>
      <slot name="sponsorships">
        <p>[Default sponsorships placeholder]</p>
      </slot>
    </section>
  </div>
</template>

<script setup lang="ts">
</script>


