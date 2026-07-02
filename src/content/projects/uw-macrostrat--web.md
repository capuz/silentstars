---
repo: "UW-Macrostrat/web"
name: "web"
description: "Macrostrat's web interface"
url: "https://github.com/UW-Macrostrat/web"
homepage: "https://macrostrat.org/map"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
stars: 13
forks: 4
openIssues: 65
closedIssues: 109
watchers: 3
contributors: 12
recentReleases: 0
createdAt: "2018-01-11T14:33:01Z"
lastCommitAt: "2026-07-02T06:33:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 70
maintainers: ["davenquinn", "amyfromandi", "davidsklar99"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0ff04e7c3868b0dc5537d4e337f267c2139a00b8ca7e67eab9d9d1da19c3010/UW-Macrostrat/web"
---

# Macrostrat's map interface

Macrostrat's map interface is web portal to a geologic model of the Earth's
crust.

Version 5 of the application transitions to using [Vite](https://vitejs.dev/)
for bundling and [Vike](https://vike.dev/) for server-side rendering. We are
working on updating this version for performance and stability.

## Installation for local development

1. Clone the repository
2. Pull down submodules (`git submodule update --init --recursive`)
3. Create and populate a `.env` file with the appropriate environment variables
   (See
   [ `.env.example`](https://github.com/UW-Macrostrat/web/blob/main/.env.example)
   for more information.)
4. Verify that you have access to recent versions of Node.js and the Yarn
   package manager ( `node >= 16.0.0` and `yarn >= 4.0.0`; run `node -v` and
   `yarn -v` to check)
5. Run `yarn install` to update packages
6. Start the live-reloading development server with `yarn run dev`. The server
   will be available at `http://localhost:3000` by default.

## Contributing

Please see the [Contributing guide](./CONTRIBUTING.md) for information on how to
contribute to this codebase.

## Packaging

### Running locally with Docker

Spins up…
