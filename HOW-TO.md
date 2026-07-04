# How this website works 🔦

A quick reference for future you. Everything content-related lives in ONE file:
`src/utils/projectConstants.js`. You almost never need to touch anything else.

---

## 1. Site structure

```
my-personal-website/
├── public/                      ← static files, served as-is at the site root
│   ├── favicon.svg
│   ├── icons/                   ← project icons + your photo
│   ├── projects/
│   │   └── pixel-art-converter.html   → URL: /projects/pixel-art-converter.html
│   └── research/                ← figures used by the research detail pages
│       ├── ml-optical-comm/
│       └── optical-neural-networks/
│
└── src/
    ├── styles/
    │   └── global.css           ← ALL the design (colors, fonts, layout, cards…)
    ├── layouts/
    │   └── BaseLayout.astro     ← nav + footer wrapped around every page
    ├── utils/
    │   └── projectConstants.js  ← ⭐ ALL your content: research, projects, news, blog
    └── pages/                   ← each file here = one URL
        ├── index.astro          → /            (hero + recent research/posts + news)
        ├── about.astro          → /about
        ├── research.astro       → /research    (cards + keyword filter)
        ├── projects.astro       → /projects
        ├── blog.astro           → /blog        (list of posts, intro only)
        ├── blog/
        │   └── [slug].astro     → /blog/<slug> (full post — built automatically,
        │                           one page per entry in BLOG_POSTS)
        └── research/
            ├── ml-optical-comm.astro          → /research/ml-optical-comm
            └── optical-neural-networks.astro  → /research/optical-neural-networks
```

**How pages get their look:** every page imports `BaseLayout.astro` (nav + footer)
and the design comes from `global.css`. Colors live in the `:root` variables at
the top of that file — change `--moss` there and the whole site follows.

---

## 2. Adding a news item ✍️ (30 seconds)

Open `src/utils/projectConstants.js`, find `NEWS_ITEMS`, and add a line **at the
top** of the array (newest first):

```js
export const NEWS_ITEMS = [
    { date: "2026-08", text: "Gave a talk at the optics seminar!" },   // ← new item
    { date: "2025-06", text: "New preprint on efficient optical..." },
    ...
];
```

That's it. It shows up in the homepage sidebar (the whole list, newest first).
When the list gets long, just delete old entries from the bottom of the array.

---

## 3. Adding a blog post ✍️

There are now TWO kinds of posts:

### Quick posts (plain text) — in projectConstants.js
Find `BLOG_POSTS`, add a post **at the top**:

```js
export const BLOG_POSTS = [
    {
        title: "My new post",
        slug: "my-new-post",          // becomes the URL: /blog/my-new-post
        date: "2026-08",
        paragraphs: [
            "First paragraph — this is the INTRO shown on /blog and the homepage.",
            "Second paragraph — only visible on the full post page.",
            "Third paragraph, and so on. Add as many as you like."
        ]
    },
    ...
];
```

Rules of thumb:
- `slug` must be url-friendly: lowercase, hyphens, no spaces or accents.
- `paragraphs[0]` doubles as the preview text, so make the first paragraph a
  good hook.
- The full post page at /blog/<slug> is generated automatically.

### Long posts (headers, math, links) — markdown files 🧮
For essay-style posts, create a file at `src/pages/blog/my-post.md`
(the filename becomes the URL). Start it with this header:

```markdown
---
layout: ../../layouts/BlogPostLayout.astro
title: "My post title"
date: "2026-08"
description: "One-sentence hook — this is the intro shown on /blog and the homepage."
---

Regular markdown from here: **bold**, [links](https://...), and

## Section headers (they get the > prompt automatically)

Math works too: inline $\Omega t$ or display equations:

$$ \hat{H}|0\rangle = E_0|0\rangle $$
```

Both kinds are merged and sorted by date automatically on /blog and the
homepage. ⚠️ Never put the same post in both places — the URLs would collide.

One-time setup for math (already done if you copied the v6 package and ran):
```bash
npm install remark-math rehype-katex @astrojs/markdown-remark
```
plus the provided `astro.config.mjs` (or merge its `markdown:` block into yours).

---

## 4. Adding a research project 🔬

Two steps:

1. Add an entry to `RESEARCH_PROJECTS` in `projectConstants.js` (copy an existing
   one and edit: name, slug, icon, tags, description, paperUrl, githubUrl).
   Its card appears on /research and the homepage list immediately.
   **Keywords:** the filter sidebar on /research builds itself from each
   project's `tags`, so a new tag = a new filter button, automatically.
2. Create its detail page at `src/pages/research/<slug>.astro` (copy one of the
   existing detail pages as a template) and put its figures in
   `public/research/<slug>/`.

## 5. Adding a fun project 🎮

Add an entry to `PROJECTS` in `projectConstants.js`. If it's a standalone HTML
app, drop the file in `public/projects/` and set the entry's `url` to
`/projects/<file>.html` (the `.html` matters for files in public/).

---

## 6. Seeing your changes

```bash
npm run dev       # local preview at http://localhost:4321, live-reloads
npm run build     # production build (do this before deploying)
```

## 7. One warning that will save you pain ⚠️

When copying folders in **Finder, folders REPLACE rather than merge**. If you
ever drag a new `pages/` folder into `src/`, anything inside the old `pages/`
that isn't in the new one is deleted. Copy individual files when in doubt, or
back up `src/` first.
