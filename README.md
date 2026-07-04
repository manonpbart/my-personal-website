# Redesign v2 — news, blog, keyword filter

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

## Adding content 
- News: add a line at the TOP of NEWS_ITEMS in projectConstants.js —
  { date: "2026-07", text: "…" } — that's it. It shows up on the homepage
  sidebar (whole list, newest first). Delete old ones from the bottom when it gets long.
- Blog: add a post at the TOP of BLOG_POSTS — see HOW-TO.md for details.
  The first paragraph is the intro shown in lists; the full post gets its own
  page at /blog/<slug> automatically.
- Research keywords: the filter builds itself from each project's `tags`,
  so new tags automatically appear in the sidebar.

