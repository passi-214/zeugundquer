<script setup lang="ts">
// Team data
const leitungOrgaTeam = [
  { name: "Michael Bauer", role: "Dirigent & Musikalische Leitung" },
  { name: "Sophie Wagner", role: "Violine & Organisation" },
]

const lehrerTeam = [
  { name: "Hannah Schütz", role: "Querflötenlehrerin" },
  { name: "Jonas Becker", role: "Cello" },
  { name: "Laura König", role: "Klarinette" },
  { name: "David Schneider", role: "Technische Betreuung" },
]
</script>

<template>
  <section class="flex flex-col items-center px-6 py-20 space-y-20">

    <!-- Leitung & Orga-Team -->
    <div class="flex flex-col items-center w-full max-w-5xl space-y-8">
      <h2 class="text-4xl font-bold text-gray-900 text-center">Leitung & Orga-Team</h2>

      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center w-full pt-8">
        <div
            v-for="(member, index) in leitungOrgaTeam"
            :key="index"
            class="w-64 bg-white border border-gray-300 rounded-2xl shadow-sm hover:shadow-lg transition-shadow p-6 flex flex-col items-center"
        >
          <div class="w-24 h-24 rounded-full bg-gray-200 mb-4 flex items-center justify-center text-gray-500 text-sm italic">
            Foto
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-1">{{ member.name }}</h3>
          <p class="text-gray-600">{{ member.role }}</p>
        </div>
      </div>
    </div>

    <!-- Lehrer-Team -->
    <div class="flex flex-col items-center w-full max-w-5xl space-y-8">
      <h2 class="text-4xl font-bold text-gray-900 text-center pt-8">Lehrer-Team</h2>

      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center w-full pt-8">
        <div
            v-for="(member, index) in lehrerTeam"
            :key="index"
            class="w-64 bg-white border border-gray-300 rounded-2xl shadow-sm hover:shadow-lg transition-shadow p-6 flex flex-col items-center"
        >
          <div class="w-24 h-24 rounded-full bg-gray-200 mb-4 flex items-center justify-center text-gray-500 text-sm italic">
            Foto
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-1">{{ member.name }}</h3>
          <p class="text-gray-600">{{ member.role }}</p>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
/* Optional subtle hover effect */
</style>
