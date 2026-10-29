---
repo: "omacom/omarchy-site"
name: "omarchy-site"
description: "Beautiful, Fun & Agentic Linux by DHH"
readmeQualityOk: true
url: "https://github.com/omacom/omarchy-site"
homepage: "https://omarchy.org"
language: "HTML"
languages: ["HTML"]
languagePcts: [87]
stars: 145
forks: 427
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 118
recentReleases: 0
createdAt: "2025-06-01T07:57:32Z"
lastCommitAt: "2026-10-29T05:49:31Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 79
undervaluedScore: 50
maintainers: ["omarchybot", "github-actions[bot]", "dhh"]
openGraphImageUrl: "https://opengraph.githubassets.com/c6f48550ada57d3decc7d6f43635a7a614ec1a81965f49b6614fef6c1833264e/omacom/omarchy-site"
---

# Omarchy

Beautiful, Fun & Agentic Linux by DHH.

See https://github.com/omacom/omarchy for more.

## Working on the site

Use Node 24 or newer and Python 3.13. Run `npm ci`, then `npm run dev` (or `bin/serve`) to preview the Astro site.
`npm run build` produces the static site in `dist/client`; `npm run parity`
checks its page URLs and verifies that passthrough files are unchanged.
Run `npm run lint`, `npm run typecheck`, and `npm test` before pushing.
Pull requests run those checks, a build, and parity in GitHub Actions;
merging to `master` deploys the checked output to GitHub Pages.

Cloudflare Workers previews use the same static output. `wrangler.jsonc`
runs `npm run build` before uploading `dist/client`, including the installers
and legacy assets. In Workers Builds, use the repository root, leave the
separate build command empty, and keep `npx wrangler versions upload` as the
non-production deploy command. The configured Worker name is `omarchy`.
Wrangler is pinned in the lockfile; it does not need an Astro server adapter.
Run `npx wrangler deploy --dry-run` to check the build and configuration
without uploading or deploying.

Development serves the same installers,…
