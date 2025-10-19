<script setup lang="ts">
import SquareButton from "@/components/placeholder/SquareButton.vue";
import SecondaryButton from "@/components/placeholder/SecondaryButton.vue";
</script>

<template>
  <footer class="bg-gray-50 border-t border-gray-300 py-16 flex justify-center items-center">
    <div class="flex flex-col items-center px-6 space-y-8">

      <!-- Orchestra title -->
      <div class="text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
          2024 zeug und quer e.V.
        </h2>
        <p class="mt-2 text-gray-600">Kultur & Gemeinschaft erleben</p>
      </div>

      <!-- Impressum button -->
      <div class="flex justify-center pt-8">
        <SquareButton
            label="Impressum"
            to="impressum"
            :isActive="false"
            class="hover:bg-gray-800 hover:text-white transition-colors duration-300"
        />
      </div>

      <!-- Social Media Buttons -->
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

      <div class="mt-12 text-center text-gray-500 text-sm pt-8">
        &copy; 2024 zeug und quer e.V. Alle Rechte vorbehalten.
      </div>
    </div>

    <!-- Footer bottom text -->
  </footer>
</template>

<style scoped>
/* Optional: subtle shadow for buttons */
button {
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
</style>
