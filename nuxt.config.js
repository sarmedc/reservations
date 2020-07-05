export default {
  mode: "spa",
  target: "server",
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [],
  modules: ["@nuxtjs/axios", "@nuxtjs/pwa"],
  axios: {},
  build: {},
  pwa: {
    workbox: {
      runtimeCaching: [
        {
          urlPattern:
            "https://my-json-server.typicode.com/sarmedc/reservations/reservations",
          handler: "cacheFirst",
          method: "GET",
          strategyOptions: {
            networkTimeoutSeconds: 20,
            cacheName: "api-cache",
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          urlPattern:
            "https://my-json-server.typicode.com/sarmedc/reservations/reservations/*",
          handler: "cacheFirst",
          method: "GET",
          strategyOptions: {
            networkTimeoutSeconds: 20,
            cacheName: "api-cache",
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    },
  },
};
