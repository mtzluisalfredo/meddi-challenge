<template>
  <div>
    <Header title="Dashboard" :isAuth="true" logo="https://www.finware.mx/images/logo-finware-header.svg" />
    <main class="flex-grow p-8 px-24 min-h-[calc(100vh-theme(space.48))]">
      <slot />
    </main>
    <Footer />
  </div>
</template>
