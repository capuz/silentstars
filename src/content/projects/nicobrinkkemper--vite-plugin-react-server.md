---
repo: "nicobrinkkemper/vite-plugin-react-server"
name: "vite-plugin-react-server"
description: "Vite plugin for React Server Components (RSC)"
readmeQualityOk: true
url: "https://github.com/nicobrinkkemper/vite-plugin-react-server"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 51
forks: 0
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2025-01-29T19:55:40Z"
lastCommitAt: "2026-11-01T22:59:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 53
maintainers: ["nicobrinkkemper"]
openGraphImageUrl: "https://opengraph.githubassets.com/898a0e41cb9aa1be98f59467075fc7f0b22b0cf901c8207e8d4ad4a14fda5fe8/nicobrinkkemper/vite-plugin-react-server"
fundingLinks: ["PATREON:https://patreon.com/Geitje"]
---

# vite-plugin-react-server

React Server Components for Vite. Run `vite build --app` and each prerendered
page gets an `index.html` and an `index.rsc`. Upload `dist/static/` to a static
host, and you have a site with client-side navigation. To render pages on
request, use the server modules from the same build.

Use the [file-based router](https://github.com/nicobrinkkemper/vite-plugin-react-server/blob/HEAD/docs/routing.md) for pages, nested layouts, and
loaders. If you already have a way to map URLs to components, use that.
vprs handles the component boundaries, rendering, and Vite builds either way.

The [documentation site](https://nicobrinkkemper.github.io/vite-plugin-react-server/)
is built with vprs.

## Quick start

To try it, clone the [starter](https://github.com/nicobrinkkemper/vprs-starter):

```bash
git clone https://github.com/nicobrinkkemper/vprs-starter my-app
cd my-app
npm install
npm run dev      # Start the Vite dev server
npm run build    # Build the static site and server modules
npm run preview  # Serve dist/static
npm run edge     # Render pages on request at :4401
```

Deploy `dist/static/` as-is for a static site. The starter also includes
`api/`,…
