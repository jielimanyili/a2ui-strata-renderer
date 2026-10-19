import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Port 5175 so it can run alongside ai-workflow-canvas (5174) and the
// AI Agent Platform llm-client (5173) without clashing.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5175,
    proxy: {
      "/a2ui": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
  },
});
