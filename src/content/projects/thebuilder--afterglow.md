---
repo: "thebuilder/afterglow"
name: "afterglow"
description: "Old-school terminal UI for the modern web"
readmeQualityOk: true
url: "https://github.com/thebuilder/afterglow"
homepage: "https://afterglow.thebuilder.dk"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
topics: ["base-ui", "shadcn-registry", "shadcn-ui", "tailwindcss", "terminal-ui"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-28T08:05:57Z"
lastCommitAt: "2026-09-19T08:13:12Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 48
maintainers: ["thebuilder"]
openGraphImageUrl: "https://opengraph.githubassets.com/5ead64c886355f7c996f93ba28bf9d9d5bad1dc567265449dd997a876104a217/thebuilder/afterglow"
---

# Afterglow

Old-school terminal UI for the modern web.

Afterglow is a [shadcn registry](https://ui.shadcn.com/docs/registry) with a shared CRT-inspired theme, Base UI components, and terminal-specific building blocks. Install the full system or add only the parts you need. The shadcn CLI copies the source into your project, so the components stay yours.

- [Documentation](https://afterglow.thebuilder.dk/docs)
- [Component gallery](https://afterglow.thebuilder.dk/components)
- [Live site](https://afterglow.thebuilder.dk)

## Quick start

Start a project with the complete Afterglow preset:

```bash
npx shadcn@latest init https://afterglow.thebuilder.dk/r/terminal.json
```

This installs the theme, interface primitives, terminal components, and hooks. Add composed blocks separately with the commands below.

## Add individual components

For an existing shadcn project, register the Afterglow namespace in `components.json`:

```json
{
  "registries": {
    "@afterglow": "https://afterglow.thebuilder.dk/r/{name}.json"
  }
}
```

Then install one or more components:

```bash
npx shadcn@latest add @afterglow/button @afterglow/scanlines
npx shadcn@latest add @afterglow/date-picker
```…
