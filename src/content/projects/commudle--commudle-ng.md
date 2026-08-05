---
repo: "commudle/commudle-ng"
name: "commudle-ng"
description: "Where software developers grow together!"
readmeQualityOk: true
url: "https://github.com/commudle/commudle-ng"
homepage: "https://commudle.com"
language: "TypeScript"
languages: ["TypeScript", "HTML"]
languagePcts: [55, 30]
topics: ["developer-community", "html", "css", "typescript", "nebular-theme", "scss", "pwa", "monorepo", "devrel", "web-application"]
stars: 143
forks: 65
openIssues: 12
closedIssues: 53
watchers: 5
contributors: 22
recentReleases: 0
createdAt: "2020-06-01T11:41:37Z"
lastCommitAt: "2026-08-05T06:08:24Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 96
undervaluedScore: 48
maintainers: ["ArshdeepGrover", "Prerna290", "arpansac"]
openGraphImageUrl: "https://opengraph.githubassets.com/120eb1e91872a7f1ec60d3254ac4ec29c118fdd82bb75738fa0cd21c424fb43a/commudle/commudle-ng"
discussionCount: 0
---

# Commudle

[www.commudle.com](https://commudle.com)

This is a community management platform for Tech Communities across the world. The inspiration being the personal
experiences of Community Organizers.

## To setup

- Install Node.js and npm (at least version 18 of Node.js and at least version 9 of npm)
- Install [@angular/cli](https://angular.io/cli)
- Clone the project.
- Run `npm ci`.
- Run `npx nx run commudle-admin:serve` for a dev server. Navigate to `http://localhost:4200/`.
- The development server directly interacts with the production APIs.

## Run with SSR (Server-Side Rendering)

- Run `npx nx serve-ssr commudle-admin` for a dev server with SSR. Navigate to `http://localhost:4200/`.

## To create new components, service and interface

- For Component Run `npx nx g @nx/angular:component <component-name>`
- For Service Run `npx nx g @nx/angular:service <service-name>`
- For Interface Run `npx nx g @nx/angular:interface <interface-name>`

## Login/Sign Up for Development

- Go to `http://localhost:4200/login`
- Sign in using your **Google Account** or **Enter your email address** (Other options will be added soon).
- Now you are sign in successfully.
  - [Contribution…
