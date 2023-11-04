<template>
  <footer class="bg-nepal-200 text-nepal-950 p-4">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div v-for="(contactInfo, index) in contactInformation" :key="index">
          <h3 class="text-lg font-semibold">{{ contactInfo.title }}</h3>
          <p>{{ contactInfo.email }}</p>
          <p>{{ contactInfo.phone }}</p>
        </div>
        <div>
          <h3 class="text-lg font-semibold">Enlaces útiles</h3>
          <ul>
            <li v-for="(usefulLink, index) in usefulLinks" :key="index">
              <a :href="usefulLink.url">{{ usefulLink.text }}</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold">Redes Sociales</h3>
          <p>Síguenos en nuestras redes:</p>
          <div class="flex space-x-2">
            <a v-for="(socialLink, index) in socialLinks" :key="index" :href="socialLink.url"
              class="text-nepal-950 hover:underline">
              {{ socialLink.text }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  data() {
    return {
      contactInformation: [
        {
          title: "Contáctanos",
          email: "Contacto: contact@example.com",
          phone: "Teléfono: (123) 456-7890",
        },
        // Agrega más información de contacto según sea necesario
      ],
      usefulLinks: [
        { text: "Servicios", url: "/" },
        { text: "Doctores", url: "/" },
        { text: "Citas", url: "/" },
        // Agrega más enlaces útiles según sea necesario
      ],
      socialLinks: [
        { text: "Facebook", url: "#" },
        { text: "Twitter", url: "#" },
        { text: "Instagram", url: "#" },
        // Agrega más enlaces de redes sociales según sea necesario
      ],
    };
  },
};
</script>
