---
repo: "GajewskiMarcin/prestashift"
name: "prestashift"
description: "PrestaShift — Professional PrestaShop migration module. Migrate data between PrestaShop 1.7, 8, and 9."
readmeQualityOk: true
url: "https://github.com/GajewskiMarcin/prestashift"
language: "PHP"
languages: ["PHP"]
languagePcts: [86]
stars: 8
forks: 3
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 9
createdAt: "2026-03-28T19:40:33Z"
lastCommitAt: "2026-10-21T23:16:02Z"
lastReleaseAt: "2026-09-19T09:43:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 52
undervaluedScore: 35
maintainers: ["GajewskiMarcin"]
openGraphImageUrl: "https://opengraph.githubassets.com/3778bd6459dfb68f6d9e45c335edddec5efbfadf04709c5f6c1c99052ea8e7cd/GajewskiMarcin/prestashift"
---

# PrestaShift — PrestaShop Migration Module

Professional data migration tool for PrestaShop. Migrate your shop data between PrestaShop 1.7, 8, and 9 with ease.

## Features

- **39-step migration pipeline** — products, categories, customers, orders, images, carriers, CMS, and much more
- **Two connection modes** — Bridge Connector (works across servers) or Direct Database (faster, same server)
- **Version-aware** — automatic detection of source/target versions with compatibility warnings
- **PS 1.7 → 8/9 transformations** — `redirect_type`, `id_type_redirected` auto-converted
- **Incremental sync** — migrate only changes since last sync
- **Batch processing** — configurable batch sizes with pause/resume support
- **Image transfer** — downloads images and generates all thumbnail sizes
- **Multistore support** — choose target shop ID
- **Pre-flight checks** — validates PHP limits, disk space, cURL before starting
- **Post-migration tasks** — auto rebuilds search index, category tree, clears cache
- **Dry run preview** — see record counts before migrating
- **File logging** — detailed logs in `var/logs/prestashift.log`
- **Redirect map** — generates 301 redirect file for SEO…
