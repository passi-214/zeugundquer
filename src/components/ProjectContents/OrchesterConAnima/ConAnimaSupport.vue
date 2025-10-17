<script setup>
import { ref } from 'vue'
import SecondaryButton from '@/components/placeholder/SecondaryButton.vue'
import Video from '@/components/placeholder/Video.vue'

const imageSrc = ref('/images/orchestra.jpg')
const placeholder = 'https://via.placeholder.com/800x500?text=Con+Anima+Orchester'

const handleImageError = () => {
  imageSrc.value = placeholder
}
</script>

<template>
  <section class="flex flex-col items-center px-6 py-20 text-gray-800 leading-relaxed">
    <div class="max-w-4xl space-y-8 text-justify text-lg md:text-xl">

      <!-- Introduction -->
      <p class="pt-4">
        In unserem Orchester erhalten Jugendliche und junge Erwachsene mit und ohne Migrationshintergrund die
        Möglichkeit, ein Instrument zu erlernen – und dies vom ersten Tag an in Verbindung mit dem Spiel im Orchester!
      </p>

      <!-- Concept -->
      <p class="pt-4">
        Das Prinzip ist vom venezolanischen „El Sistema“ abgeschaut: Nach einer gemeinsamen Einspielphase teilt sich
        das Orchester in kleine Gruppen auf, und die erfahrenen Spieler*innen (in unserem Fall meist
        Musikstudierende, die eine Aufwandsentschädigung für Ehrenamtliche erhalten) coachen die neueren. Die
        organisatorische und die künstlerische Leitung erhalten ebenfalls einen finanziellen Ausgleich für ihren sehr
        großen zeitlichen Einsatz im Projekt.
      </p>

      <!-- Membership & Contribution -->
      <p class="pt-4">
        Unsere Mitglieder zahlen 10 Euro im Monat für zwei wöchentliche Proben, den Unterricht in Kleingruppen und ein
        Leihinstrument. Dieser kleine Beitrag ist uns wichtig, damit eine Verbindlichkeit entsteht. Ebenso wichtig ist
        uns aber, dass jede und jeder teilnehmen und ein Instrument erlernen kann.
      </p>

      <!-- Donation Appeal -->
      <p class="pt-4">
        Das Orchester con anima ist daher dringend auf Spenden angewiesen! Am besten können wir planen, wenn Sie uns
        regelmäßig mit einem Dauerauftrag unterstützen. Doch auch jede Einzelspende hilft uns sehr, unsere Arbeit
        fortzusetzen.
      </p>

      <!-- Support Message -->
      <p class="pt-4 font-bold">
        Wir bitten herzlich um Ihre Unterstützung, um die wertvolle Arbeit des Orchester con anima Freiburg in der
        kulturellen Bildung für alle fortsetzen zu können! Vielen Dank!
      </p>

      <!-- Bank Details -->
      <div class="pt-4 space-y-2">
        <p class="font-semibold">Kontoverbindung:</p>
        <p>
          zeug und quer e.V.<br>
          Stichwort: Orchester con anima<br>
          Sparkasse Freiburg-Nördlicher Breisgau<br>
          IBAN: DE10 6805 0101 0013 5140 02<br>
          BIC: FRSPDE66
        </p>
      </div>

      <!-- Donation Certificate -->
      <p class="pt-4">
        Selbstverständlich stellen wir Ihnen gerne eine Spendenbescheinigung aus. Wichtig: Kontaktieren Sie uns dafür
        direkt per Mail, damit wir Ihnen die Bescheinigung persönlich zustellen können.
      </p>

    </div>
  </section>
</template>

<style scoped>
img {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
</style>
