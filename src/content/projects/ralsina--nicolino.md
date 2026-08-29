---
repo: "ralsina/nicolino"
name: "nicolino"
description: "A good SSG written in Crystal"
readmeQualityOk: true
url: "https://github.com/ralsina/nicolino"
homepage: "https://nicolino.ralsina.me"
language: "Crystal"
languages: ["Crystal", "Go Template"]
languagePcts: [37, 34]
topics: ["ssg", "static-site", "static-site-generator"]
stars: 17
forks: 2
openIssues: 10
closedIssues: 22
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2023-06-10T10:46:16Z"
lastCommitAt: "2026-08-29T17:28:07Z"
lastReleaseAt: "2026-01-19T16:51:08Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 94
undervaluedScore: 66
maintainers: ["ralsina", "michaeldesu"]
openGraphImageUrl: "https://opengraph.githubassets.com/da31fd52f593d4cca7447713767d1cf495ee25d08a992fa29920090fced3d02d/ralsina/nicolino"
fundingLinks: ["GITHUB:https://github.com/ralsina"]
---

# Nicolino

A **good** static site generator.

## Features

- **Markdown-based content** - Write in markdown, get HTML
- **Posts and pages** - Blog posts with RSS feeds and static pages
- **Taxonomies** - Tags, categories, and custom classification systems
- **Image galleries** - Automatic thumbnails with lightbox
- **Books** - mdbook/gitbook-style documentation with hierarchical chapters,
  sidebar TOC, and navigation
- **Search** - Site search functionality
- **Sitemap** - Automatic XML sitemap generation
- **Lua filters** - Custom template filters in Lua, no recompiling needed
- **Fast builds** - Parallel, incremental builds via Croupier task system

## Custom Filters in Lua

Themes can ship template filters written in Lua — and so can your site:
put scripts in `filters/` at the project root (like `shortcodes/`) or in
`themes/<theme>/filters/*.lua`. Site-level scripts win name collisions.
Each script returns a table of functions:

```lua
-- themes/mytheme/filters/text.lua
return {
  shout = function(text)
    return string.upper(text) .. "!"
  end,
}
```

Every function becomes a Jinja-style filter usable in any template:

```jinja
{{ title | shout }}
```

The piped value…
