---
repo: "MrLouisWright/csp-forge"
name: "csp-forge"
description: "Scan a built static site (dist/, build/, out/) or live URL and generate a tight Content-Security-Policy with sha256 hashes for inline code. Outputs header, meta, Nginx, Apache, Netlify, Vercel, Helmet, JSON; --check mode for CI."
readmeQualityOk: true
url: "https://github.com/MrLouisWright/csp-forge"
homepage: "https://mrlouiswright.github.io/csp-forge/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["content-security-policy", "csp", "security", "static-site", "vite", "helmet", "netlify", "nginx", "security-headers", "vercel"]
stars: 27
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-10-13T19:16:58Z"
lastCommitAt: "2026-10-14T08:57:51Z"
lastReleaseAt: "2026-10-13T22:25:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 22
maintainers: ["MrLouisWright"]
openGraphImageUrl: "https://opengraph.githubassets.com/28275953a494b658f095dcf862f3dab9b3d9e578726eac01d9b28fae7bae8e17/MrLouisWright/csp-forge"
---

# csp-forge

Point it at your **built** static site (`dist/`, `build/`, `out/`) and optionally a live URL. It works out exactly which sources the site loads and generates a **tight Content-Security-Policy** — either **sha256 hashes** for static sites or **nonce + `strict-dynamic`** for server-rendered apps. Output comes ready to paste for Nginx, Apache, Netlify, Vercel, Express/Helmet or a `<meta>` tag, with optional **`report-uri` / `report-to`** and **`Reporting-Endpoints`** for report-only rollouts. Vite and webpack plugins run the scan at build time. `--check` mode fails CI when your deployed CSP is missing sources or too loose. Zero **runtime** dependencies, Node ≥ 18, dual ESM/CJS, JSON and SARIF output.

## Install

```bash
npm i -D csp-forge        # or run ad-hoc:
npx csp-forge dist
```

## Usage

```
csp-forge [dir] [options]                     generate a policy (dir defaults to dist/build/out/public/_site)
csp-forge [dir] --check <policy|file|url>     compare an existing CSP with what the site needs

  -u, --url <url>           Also scan a live page (+ same-origin CSS/JS); its origin counts as 'self'
      --origin <url>        Treat this absolute origin as 'self' when…
