<template>
  <div class="min-h-screen flex flex-col">
    <header class="p-4 bg-gray-900 text-white">
      <nav class="flex gap-4">
        <RouterLink to="/zeugundquer" class="hover:underline">Zeug & Quer</RouterLink>
        <!-- Add other nav links later -->
      </nav>
    </header>
    <main class="flex-1 p-6">
      <slot />
    </main>
  </div>
</template>
