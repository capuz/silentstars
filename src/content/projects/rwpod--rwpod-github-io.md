---
repo: "rwpod/rwpod.github.io"
name: "rwpod.github.io"
description: "rwpod web site"
readmeQualityOk: true
url: "https://github.com/rwpod/rwpod.github.io"
homepage: "https://www.rwpod.com/"
language: "Astro"
languages: ["Astro", "Svelte", "JavaScript"]
languagePcts: [41, 32, 25]
stars: 13
forks: 2
openIssues: 0
closedIssues: 5
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2013-01-09T21:58:30Z"
lastCommitAt: "2026-11-09T00:53:26Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 68
maintainers: ["le0pard", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1c3558ea8acdfb7ae4b1c9d7072f93062c62c61c22ecad7ea768ef99ef451dac/rwpod/rwpod.github.io"
---

# RWpod website [](https://github.com/rwpod/rwpod.github.io/actions/workflows/deploy.yml)

Content on website: <a rel="license" href="https://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-nc-nd/4.0/80x15.png" /></a>

Build on top of:

 - [Astro](https://astro.build/)
 - [Svelte](https://svelte.dev/)

and other small libs

### Dev

#### Purge the Cache for an Existing CDN Endpoint

```bash
doctl compute cdn flush 4e2758e2-2f33-474e-bd1e-7e8628ecc68d --files "[*]"
```
