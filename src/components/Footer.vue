<script setup lang="ts">
import SquareButton from "@/components/placeholder/SquareButton.vue";
import SecondaryButton from "@/components/placeholder/SecondaryButton.vue";
</script>

<template>
  <footer class="bg-gray-100 border-t border-gray-300 py-16">
    <div class="container mx-auto flex flex-col items-center px-6 space-y-8">

      <!-- Orchestra title -->
      <div class="text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
          2024 zeug und quer e.V.
        </h2>
      </div>

      <!-- Impressum button -->
      <div class="flex justify-center pt-12">
        <SquareButton label="Impressum" to="impressum" :isActive="false" />
      </div>

      <!-- Social Media Buttons -->
      <div class="flex flex-col sm:flex-row gap-6 justify-center">
        <SecondaryButton
            paragraph="Folge uns auf Facebook"
            buttonText="Facebook"
            link="https://www.facebook.com"
            widthClass="w-40"
        />
        <SecondaryButton
            paragraph="Folge uns auf Instagram"
            buttonText="Instagram"
            link="https://www.instagram.com"
            widthClass="w-40"
        />
        <SecondaryButton
            paragraph="Folge uns auf YouTube"
            buttonText="YouTube"
            link="https://www.youtube.com"
            widthClass="w-40"
        />
        <SecondaryButton
            paragraph="Folge uns auf SoundCloud"
            buttonText="SoundCloud"
            link="https://soundcloud.com"
            widthClass="w-40"
        />
      </div>

    </div>

    <!-- Footer bottom text -->
    <div class="mt-12 text-center text-gray-600 text-sm">
      &copy; 2024 zeug und quer e.V. Alle Rechte vorbehalten.
    </div>
  </footer>
</template>

<style scoped>
/* Optional: additional spacing or tweaks can go here */
</style>
