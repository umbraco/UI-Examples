import { defineConfig } from "vite";
import {glob} from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export default defineConfig({
    build: {
        lib: {
            entry: ["src/dashboards/welcome-dashboard.ts"], // your web component source file
            formats: ["es"],
        },
        outDir: "../../samples/Umbraco14.Website/App_Plugins/Example.UI/scripts", // your web component will be saved in this location
        sourcemap: true,
        rollupOptions: {
            input: Object.fromEntries(
                glob.sync('src/**/*.ts').map(file => [
                    // This remove `src/` as well as the file extension from each
                    // file, so e.g. src/nested/foo.js becomes nested/foo
                    path.relative(
                        'src',
                        file.slice(0, file.length - path.extname(file).length)
                    ),
                    // This expands the relative paths to absolute paths, so e.g.
                    // src/nested/foo becomes /project/src/nested/foo.js
                    fileURLToPath(new URL(file, import.meta.url))
                ])
            ),
            external: [/^@umbraco/],
        },
    },
});