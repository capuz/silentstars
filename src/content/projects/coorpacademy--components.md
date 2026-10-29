---
repo: "CoorpAcademy/components"
name: "components"
description: "[🌲] Front components for Coorpacademy"
readmeQualityOk: true
url: "https://github.com/CoorpAcademy/components"
homepage: "https://coorpacademy.github.io/components/components"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [62, 24]
stars: 6
forks: 6
openIssues: 7
closedIssues: 158
watchers: 13
contributors: 55
recentReleases: 0
createdAt: "2015-11-27T14:48:12Z"
lastCommitAt: "2026-10-29T10:13:31Z"
lastReleaseAt: "2016-08-25T14:59:08Z"
status: "watched"
tags: ["legacy_hero", "community_watch", "fork_magnet"]
healthScore: 98
undervaluedScore: 81
maintainers: ["transifex-integration[bot]", "silouone", "esa-coorp"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd82a1ce5018d703fb12328708656ac126a69ce7f514afc7535b512695224db4/CoorpAcademy/components"
postedAt: "2026-10-28T10:06:27.573Z"
---

# Coorpacademy Components

## Static demos

If you want to see what theses packages have to look there: :wink:

- :open_book: [Story book](http://coorpacademy.github.io/components/components)
- :joystick: [AppPlayer](http://coorpacademy.github.io/components/app-player)
- 📚 [AppReview](http://coorpacademy.github.io/components/app-review)

## Packages

- [Components](https://github.com/CoorpAcademy/components/blob/HEAD/packages/@coorpacademy-components/README.md)
- [and many mores](https://github.com/CoorpAcademy/components/blob/HEAD/packages)

## How to

### Start:

```bash
source scripts/setup.sh
yarn
yarn prepare # or 'npm run prepare'
```

You might need to source `scripts/setup.sh` to notably to load the fontawesome token in the `FONTAWESOME_NPM_AUTH_TOKEN` env variable.

### Publish:

[See detailed doc](https://github.com/CoorpAcademy/components/blob/HEAD/doc/publish.md)

### Add a new dependency:

Go to the target package, and add the dependency using

```bash
yarn add myPackage
```

### install dependencies for a specific package:

```bash
lerna add dependency-name --scope=package-name
```

### run a specific test file:

```bash
lerna run --scope @coorpacademy/components…
