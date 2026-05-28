<script setup lang="ts">
import SquareButton from "@/components/placeholder/SquareButton.vue";
</script>

<template>
  <footer class="bg-gray-50 border-t border-gray-300 py-16 flex justify-center items-center">
    <div class="flex flex-col items-center px-6 space-y-8">

      <div class="text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 pb-2">
          zeug und quer e.V.
        </h2>
        <p class="mt-2 text-gray-600">Kultur & Gemeinschaft erleben</p>
      </div>

      <div class="flex flex-col sm:flex-row gap-4 justify-center mt-6">
        <SecondaryButton
            paragraph="Folge uns auf Facebook"
            buttonText="Facebook"
            link="https://www.facebook.com"
            class=" text-gray-800"
        />
        <SecondaryButton
            paragraph="Folge uns auf Instagram"
            buttonText="Instagram"
            link="https://www.instagram.com"
            class=" text-gray-800"
        />
        <SecondaryButton
            paragraph="Folge uns auf YouTube"
            buttonText="YouTube"
            link="https://www.youtube.com"
            class=" text-gray-800 "
        />
        <SecondaryButton
            paragraph="Folge uns auf SoundCloud"
            buttonText="SoundCloud"
            link="https://soundcloud.com"
            class=" text-gray-800"
        />
      </div>

      <div class="text-center pt-2 pb-2">
        <router-link
            to="impressum"
            class="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors duration-200"
        >
          Impressum
        </router-link>
      </div>

      <div class="text-center text-gray-500 text-sm">
        &copy; zeug und quer e.V. Alle Rechte vorbehalten.
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Optional: subtle shadow for buttons */
button {
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
</style>
