<template>
  <div>
    <Header title="Dashboard" :isAuth="true" logo="https://meddi.app/public/loginv2/assets/MeddiLogo.8349898f.png" />
    <main class="flex-grow p-8 px-24 min-h-[calc(100vh-theme(space.48))]">
      <slot />
    </main>
    <Footer />
  </div>
</template>
