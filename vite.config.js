import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   host: "127.0.0.1:1573",
  // },

  plugins: [react()],
});
