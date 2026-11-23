---
repo: "nurkamol/website-build-kit"
name: "website-build-kit"
description: "Build production marketing sites with Claude Code — an Astro + Cloudflare Workers template, a WordPress→Astro migration playbook, and 36 silent failures documented from real rebuilds."
readmeQualityOk: true
url: "https://github.com/nurkamol/website-build-kit"
homepage: "https://nurkamol.github.io/website-build-kit/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [84]
topics: ["ai-agents", "astro", "claude-code", "claude-code-skill", "cloudflare-workers", "elementor", "jamstack", "marketing-website", "seo", "site-migration"]
stars: 32
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-26T20:02:05Z"
lastCommitAt: "2026-11-23T13:18:09Z"
lastReleaseAt: "2026-08-30T13:33:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 67
undervaluedScore: 45
maintainers: ["nurkamol"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1347748870/f4ba0cc1-a4c3-4419-bd5a-fe8ad40c3a5e"
---

A method and a starter for shipping production marketing sites: discovery → stack and
provider decisions → build → verify against the deployed thing → hand over.

Not a theme. The value is the accumulated set of decisions and the list of things that fail
**silently** — clean build, clean types, clean deploy, wrong result.

```bash
/plugin marketplace add nurkamol/website-build-kit
/plugin install website-build@website-build-kit
```

Or clone and symlink, if you would rather not add a marketplace:

```bash
git clone https://github.com/nurkamol/website-build-kit.git
cd website-build-kit && ./install.sh
```

Then, in any project, **just ask**:

```
Rebuild https://acmeplumbing.com on Astro and Cloudflare.
We're migrating off Elementor — here's the site: https://example.com
Build a marketing site for a dental practice. Nothing exists yet.
```

The skill matches on description, so there is no command to remember. `/website-build <url>`
works too if you want to be explicit.

**→ [docs/walkthrough.md](https://github.com/nurkamol/website-build-kit/blob/HEAD/docs/walkthrough.md)** — a worked example as a session, start to launch
