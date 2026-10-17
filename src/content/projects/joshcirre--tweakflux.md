---
repo: "joshcirre/tweakflux"
name: "tweakflux"
description: "A customizable template generator for Livewire Flux UI "
readmeQualityOk: true
url: "https://github.com/joshcirre/tweakflux"
homepage: "https://tweakflux.com"
language: "PHP"
languages: ["PHP"]
languagePcts: [96]
stars: 119
forks: 6
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-11T09:32:40Z"
lastCommitAt: "2026-10-17T07:59:55Z"
lastReleaseAt: "2026-02-11T10:07:38Z"
status: "thriving"
tags: []
healthScore: 70
undervaluedScore: 8
maintainers: ["joshcirre"]
openGraphImageUrl: "https://opengraph.githubassets.com/d921423ce2a0f8dce0da7547540549eb27f61017e6412868eb121e27ac993291/joshcirre/tweakflux"
---

# TweakFlux

Deep theming for [Flux UI](https://fluxui.dev). Override Tailwind v4 CSS custom properties to transform every Flux component — free and pro — with a single command. Zero vendor files touched.

## Installation

### Global (recommended)

```bash
composer global require joshcirre/tweakflux
```

Then run from any project:

```bash
tweakflux apply bubblegum
```

### Per-project

```bash
composer require joshcirre/tweakflux --dev
```

Then run via vendor bin:

```bash
./vendor/bin/tweakflux apply bubblegum
```

The `apply` command generates the theme CSS at `resources/css/tweakflux-theme.css` and automatically adds the import to your `resources/css/app.css`. With Vite running, you'll see the changes instantly.

If `app.css` doesn't exist, the command prints the import and font URLs for you to add manually.

## Commands

| Command | Description |
|---------|-------------|
| `tweakflux apply {theme?}` | Apply a theme (interactive picker if no name given) |
| `tweakflux apply {theme} --no-effects` | Apply a theme without visual effects (if applicable) |
| `tweakflux list` | List all available themes |
| `tweakflux create {name}` | Scaffold a new theme JSON file |
| `tweakflux…
