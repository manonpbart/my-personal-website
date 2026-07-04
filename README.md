# Redesign v2 — news, blog, keyword filter

## ⚠️ How to copy without losing files (this bit matters!)
Last time, dragging the `pages` folder in Finder REPLACED your old `pages`
folder — which deleted `research/ml-optical-comm.astro` and
`research/optical-neural-networks.astro`. Finder replaces folders; it does
not merge them.

This zip now contains the COMPLETE src tree (including your two research
detail pages, unchanged), so you can safely replace your whole `src` folder
with this one. Safest option: rename your current `src` to `src-backup`
first, then drop this `src` in.

## Structure
src/
  layouts/BaseLayout.astro        ← nav is now: home about research projects blog
  styles/global.css               ← same design + styles for home columns, filter, blog, news
  utils/projectConstants.js       ← now also holds NEWS_ITEMS and BLOG_POSTS
  pages/
    index.astro                   ← hero + recent_research (title + keywords, no icons)
                                      + recent_posts, and a plain news sidebar on the right
    about.astro
    research.astro                ← keyword filter sidebar (click to filter, "all" resets)
    projects.astro
    blog.astro                    ← blog index: clickable posts, intro only
    blog/[slug].astro             ← full post pages, auto-built from BLOG_POSTS
    research/
      ml-optical-comm.astro       ← YOUR detail pages, restored, untouched
      optical-neural-networks.astro

You can delete puzzle.astro and game.astro from your project (not included here).

## Adding content (no code needed)
- News: add a line at the TOP of NEWS_ITEMS in projectConstants.js —
  { date: "2026-07", text: "…" } — that's it. It shows up on the homepage
  sidebar (whole list, newest first). Delete old ones from the bottom when it gets long.
- Blog: add a post at the TOP of BLOG_POSTS — see HOW-TO.md for details.
  The first paragraph is the intro shown in lists; the full post gets its own
  page at /blog/<slug> automatically.
- Research keywords: the filter builds itself from each project's `tags`,
  so new tags automatically appear in the sidebar.

## Small fix included
The Pixel Art Converter link now points to /projects/pixel-art-converter.html —
since the file lives in public/projects/, the .html is needed for the URL to resolve.

## Preview
Open preview/preview.html (homepage) and preview/preview-research.html
(keyword filter — the buttons work) in a browser.

## v4 fixes
- Keyword filter now actually hides cards (a CSS display rule was overriding
  the hidden attribute — fixed with `[hidden] { display: none !important; }`).
- Blog posts are clickable with dedicated pages; seeded posts are longer.
- Added HOW-TO.md — a plain-English guide to the site structure and updating content.

## v5
- Removed the /news page and its nav link — news now lives only in the
  homepage sidebar, which shows the full NEWS_ITEMS list.
- If you already copied v4 into your project, also DELETE src/pages/news.astro.

## v6 — markdown blog posts with math
- New: long blog posts are markdown files in src/pages/blog/*.md, with LaTeX
  math rendered by KaTeX. Your quantum clock synchronization post is included
  at src/pages/blog/quantum-clock-sync.md (full text, only two typos fixed).
- New files: src/layouts/BlogPostLayout.astro, astro.config.mjs
- Updated: blog.astro + index.astro (merge markdown + constants posts, sorted
  by date; news sidebar now renders <b> tags via set:html)
- Updated: projectConstants.js (your latest content, with the About-time entry
  REMOVED from BLOG_POSTS — it lives as the markdown file now — plus the
  stray "<b> ... <b>" closing tag fixed and the 2025-12 paper re-dated/reordered)
- ONE-TIME SETUP: run  npm install remark-math rehype-katex @astrojs/markdown-remark
  and add astro.config.mjs to your project root (or merge the markdown block
  into your existing config).
