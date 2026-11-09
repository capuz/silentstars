---
repo: "pdxosgeo/pdxosgeoweb"
name: "pdxosgeoweb"
description: "The PDXOSGeo website"
readmeQualityOk: true
url: "https://github.com/pdxosgeo/pdxosgeoweb"
homepage: "https://pdxosgeo.org/"
language: "Astro"
languages: ["Astro", "CSS", "TypeScript"]
languagePcts: [43, 37, 20]
stars: 6
forks: 2
openIssues: 1
closedIssues: 3
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2012-06-27T21:52:02Z"
lastCommitAt: "2026-11-09T00:54:46Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 93
undervaluedScore: 57
maintainers: ["geografa", "rhodges"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e89d3da8d4f2cc6b9cd8ac13db727a77304d061d2841cf8621c5868f0d2e46b/pdxosgeo/pdxosgeoweb"
---

# PDXOSGeo website (Astro)

The pdxosgeo.org site, built with [Astro](https://astro.build/) and React. Meetings and Maps of the Month are plain Markdown files, so most updates never touch code.

## Editing content

You have two options:

- **In the browser (no setup):** sign in at [app.pagescms.org](https://app.pagescms.org) with GitHub and open `pdxosgeo/pdxosgeoweb`. You get forms for meetings, Maps of the Month, and site settings, with image uploads. The editor is configured in [`.pages.yml`](https://github.com/pdxosgeo/pdxosgeoweb/blob/HEAD/.pages.yml). If you do not have permissions, contact @geografa for collab privieleges.
- **In a text editor:** edit the files described below and open a pull request, same as before.

### Add a meeting

Create a file in `src/content/meetings/` named `YYYY-MM-DD-short-title.md`:

```markdown
---
title: MapLibre + Maputnik
date: 2026-04-22
image: /images/posts/2026/2026-april-maputnik.png
imageAlt: Screenshot of the Maputnik style editor
---

Write the post here. **Bold**, [links](https://maplibre.org), lists, and
 all work.
```

| Field               | Required | Notes                                                   |
| -------------------…
