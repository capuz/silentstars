---
repo: "konradmichalik/typo3-pagetree-facets"
name: "typo3-pagetree-facets"
description: "🔍 Filterable TYPO3 page tree with an extensible filter tab API"
readmeQualityOk: true
url: "https://github.com/konradmichalik/typo3-pagetree-facets"
language: "PHP"
languages: ["PHP", "JavaScript"]
languagePcts: [54, 32]
topics: ["faceted-search", "filter", "page-tree", "php", "typo3", "typo3-backend", "typo3-cms", "typo3-extension"]
stars: 5
forks: 1
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 3
recentReleases: 4
createdAt: "2026-07-25T21:59:44Z"
lastCommitAt: "2026-09-10T08:19:31Z"
lastReleaseAt: "2026-09-08T11:37:20Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 64
maintainers: ["konradmichalik", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/91c62d01689b0eecfb51b4f072e38677f60807b6384c486a96a470b5645e39fd/konradmichalik/typo3-pagetree-facets"
---

# TYPO3 extension `typo3_pagetree_facets`

</div>

This extension turns the TYPO3 backend page tree into a faceted filter. Instead
of scrolling through a large tree, you narrow it down to exactly the pages you
care about: by content type, page state, records, activity, translations or SEO.

Filters are compact tokens that you can type into the tree's existing search
field or assemble in a guided modal, and the whole feature is extensible through
a public facet API.

</div>

> [!NOTE]
> Ever scrolled an entire page tree looking for the one page with that content
> element on it? Or the handful of empty pages nobody ever cleaned up? The core
> search only matches page titles and UIDs, so it can't answer either question.
> This extension can, right in the same tree you already know.

## ✨ Features

- **Filterable page tree**: type tokens into the tree's search field, or open a guided modal with <kbd>Ctrl</kbd>/<kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>L</kbd>
- **Nine built-in filter facets** (SEO requires EXT:seo, Forms requires EXT:form): content elements, records, activity, page type, layouts, page state, translations, SEO and forms, plus `site:` / `under:` scope tokens
- **Sharable…
