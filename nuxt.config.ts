// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  // devtools: { enabled: true },
  runtimeConfig: {
    public: {
      base_url: process.env.BASE_URL,
    },
  },
  app: {
    head: {
      title: "gt-power-solutions",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Poppins",
        },
      ],
    },
  },

  vue: {
    propsDestructure: true,
  },
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  modules: [
    "@nuxt/content",
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxt/test-utils/module",
  ],
});
