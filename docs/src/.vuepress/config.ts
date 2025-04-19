import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/neu-site/",

  lang: "en-US",
  title: "Neighbors of Edgewater and Uptown",
  description: "Moving Edgewater and Uptown Forward",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
