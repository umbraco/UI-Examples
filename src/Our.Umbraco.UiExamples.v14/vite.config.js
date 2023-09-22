import { defineConfig } from "vite";

export default defineConfig({
    build: {
        lib: {
            entry: ["src/dashboards/welcome-dashboard.ts", "src/dashboards/custom-dialogs-dashboard.ts"], // your web component source file
            formats: ["es"],
        },
        outDir: "../../samples/Umbraco14.Website/App_Plugins/Example.UI/scripts", // your web component will be saved in this location
        sourcemap: true,
        rollupOptions: {
            external: [/^@umbraco/],
        },
    },
});