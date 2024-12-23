import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setup-tests.js",
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "lcov", "json-summary"],
      include: ["src/**/*.js", "src/**/*.jsx"],
      exclude: ["src/main.jsx"],
    },
  },
});
