// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// Math support for markdown blog posts:
// $inline$ and $$display$$ LaTeX is rendered with KaTeX.
// Requires: npm install remark-math rehype-katex
export default defineConfig({
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
    },
});
