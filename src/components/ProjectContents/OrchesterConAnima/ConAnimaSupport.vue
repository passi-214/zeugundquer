<script setup>
import { ref } from 'vue'

const imageSrc = ref('/images/orchestra.jpg')
const placeholder = 'https://via.placeholder.com/800x500?text=Con+Anima+Orchester'

const handleImageError = () => {
  imageSrc.value = placeholder
}
</script>

<template>
  <section class="flex flex-col items-center px-6 py-20 text-gray-800 leading-relaxed font-sans">
    <div class="max-w-4xl space-y-8 text-justify text-lg md:text-xl">

      <!-- Introduction -->
      <p>
        In unserem Orchester erhalten Jugendliche und junge Erwachsene mit und ohne Migrationshintergrund die
        Möglichkeit, ein Instrument zu erlernen – und dies vom ersten Tag an in Verbindung mit dem Spiel im Orchester!
      </p>
      <br>
      <!-- Concept -->
      <p>
        Das Prinzip ist vom venezolanischen „El Sistema“ abgeschaut: Nach einer gemeinsamen Einspielphase teilt sich
        das Orchester in kleine Gruppen auf, und die erfahrenen Spieler*innen (in unserem Fall meist
        Musikstudierende, die eine Aufwandsentschädigung für Ehrenamtliche erhalten) coachen die neueren. Die
        organisatorische und die künstlerische Leitung erhalten ebenfalls einen finanziellen Ausgleich für ihren sehr
        großen zeitlichen Einsatz im Projekt.
      </p>
      <br>
      <!-- Membership & Contribution -->
      <p>
        Unsere Mitglieder zahlen 10 Euro im Monat für zwei wöchentliche Proben, den Unterricht in Kleingruppen und ein
        Leihinstrument. Dieser kleine Beitrag ist uns wichtig, damit eine Verbindlichkeit entsteht. Ebenso wichtig ist
        uns aber, dass jede und jeder teilnehmen und ein Instrument erlernen kann.
      </p>
      <br>
      <!-- Donation Appeal -->
      <p class="pb-8">
        Das Orchester con anima ist daher dringend auf Spenden angewiesen! Am besten können wir planen, wenn Sie uns
        regelmäßig mit einem Dauerauftrag unterstützen. Doch auch jede Einzelspende hilft uns sehr, unsere Arbeit
        fortzusetzen.
      </p>

      <!-- Highlighted Donation Section -->
      <div class="text-center mt-10 bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-300 rounded-2xl shadow-md p-8">
        <h2 class="text-3xl md:text-4xl font-extrabold text-amber-700 pb-4">
          Unterstützen Sie das Orchester con anima!
        </h2>
        <p class="text-gray-700 mb-6 pb-6">
          Helfen Sie uns, kulturelle Bildung für alle zugänglich zu machen.<br>
          Jeder Beitrag – ob groß oder klein – macht einen Unterschied.
        </p>

        <!-- PayPal Button -->
        <form action="https://www.paypal.com/donate" method="post" target="_blank" class="inline-block">
          <input type="hidden" name="hosted_button_id" value="3H95J3L6L7A88" />
          <button
              type="submit"
              class="bg-amber-500 hover:bg-amber-600 text-white text-lg font-semibold py-3 px-8 rounded-xl shadow-lg transition transform hover:scale-105 active:scale-100"
          >
            Jetzt Spenden 💛
          </button>
        </form>

        <!-- Bank Details -->
        <div class="mt-8 text-left text-gray-700 pt-8">
          <p class="font-semibold text-xl text-gray-900 mb-2 pb-6">Bankverbindung</p>
          <div class="bg-white rounded-lg p-4 shadow-inner border border-gray-200 text-base leading-relaxed">
            <p>
              <strong>zeug und quer e.V.</strong><br>
              Stichwort: Orchester con anima<br>
              Sparkasse Freiburg-Nördlicher Breisgau<br>
              <strong>IBAN:</strong> DE10 6805 0101 0013 5140 02<br>
              <strong>BIC:</strong> FRSPDE66
            </p>
          </div>
        </div>
      </div>

      <!-- Donation Certificate -->
      <p class="pt-6">
        Selbstverständlich stellen wir Ihnen gerne eine Spendenbescheinigung aus. Wichtig: Kontaktieren Sie uns dafür
        direkt per Mail, damit wir Ihnen die Bescheinigung persönlich zustellen können.
      </p>

    </div>
  </section>
</template>

<style scoped>
/* Smooth animation for button hover */
button {
  transition: all 0.25s ease;
}

/* Make sure font weights actually apply */
section {
  font-family: 'Inter', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 400;
}
</style>
