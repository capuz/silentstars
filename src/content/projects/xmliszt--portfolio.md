---
repo: "xmliszt/portfolio"
name: "portfolio"
description: "Everything about me :)"
readmeQualityOk: true
url: "https://github.com/xmliszt/portfolio"
homepage: "https://liyuxuan.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["mdx", "nextjs", "playground", "portfolio", "react", "supabase", "tailwindcss", "velite"]
stars: 12
forks: 0
openIssues: 3
closedIssues: 21
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2024-02-25T07:54:28Z"
lastCommitAt: "2026-11-04T13:04:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 71
maintainers: ["xmliszt"]
openGraphImageUrl: "https://opengraph.githubassets.com/d232d8b42a4ae81a3ba41412874b21c1f547add61c4767987cf59d07172d75d1/xmliszt/portfolio"
---

# Welcome to my personal website!

Shield: [][cc-by-nc-sa]

This work is licensed under a
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][cc-by-nc-sa].

 [cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
 [cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
 [cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg

## Supabase schema workflow

This project uses declarative Supabase schemas, one Postgres schema per app and one table or function per file:

- `supabase/schemas/portfolio/` — tables for the personal site (`post_views`, `ratings`, `bgms`, `hobby_*`).
- `supabase/schemas/laundro_cafe/` — tables and functions for laundro.cafe.

Both schemas are listed in `[api] schemas` in `supabase/config.toml` and must also be in **Settings → Data API → Exposed schemas** on the hosted project. Add a schema there only after the migration that creates it is applied: exposing a schema that does not exist yet stops the whole Data API.

When schema changes are made:

1. Edit the SQL files under `supabase/schemas/<schema>/`, and list any new file in `schema_paths` in…
