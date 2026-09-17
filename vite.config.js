import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Daily Jokhon Somoy NewsPro — frontend build config
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
});
