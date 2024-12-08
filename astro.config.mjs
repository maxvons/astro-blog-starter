// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com", // CUSTOM: Enter the URL of your deployed site here
  integrations: [mdx(), sitemap(), icon()],
  redirects: {
    "/blog": "/",
  },
});
