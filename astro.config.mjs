import { defineConfig } from "astro/config"
import {
    transformerMetaHighlight,
    transformerNotationDiff,
    transformerNotationHighlight,
    transformerNotationFocus
 } from "@shikijs/transformers"

export default defineConfig({
    publicDir: "./src/static",
    site: "https://ladendonkey.au",
    markdown: {
        syntaxHighlight: "shiki",
        shikiConfig: {
            theme: "catppuccin-latte",
            transformers: [
                transformerMetaHighlight(),
                transformerNotationDiff(),
                transformerNotationHighlight(),
                transformerNotationFocus()
            ]
        }
    }
})
