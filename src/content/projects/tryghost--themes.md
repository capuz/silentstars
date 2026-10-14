---
repo: "TryGhost/Themes"
name: "Themes"
description: "A monorepo for Ghost themes"
readmeQualityOk: true
url: "https://github.com/TryGhost/Themes"
language: "Handlebars"
languages: ["Handlebars", "CSS", "JavaScript"]
languagePcts: [50, 30, 20]
topics: ["ghost", "publishing", "ghost-theme", "newsletter"]
stars: 96
forks: 85
openIssues: 14
closedIssues: 68
watchers: 12
contributors: 57
recentReleases: 0
createdAt: "2021-04-07T09:23:09Z"
lastCommitAt: "2026-10-14T08:58:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 96
undervaluedScore: 53
maintainers: ["renovate[bot]", "minimaluminium", "aileen"]
openGraphImageUrl: "https://opengraph.githubassets.com/81af52b712b0d1dcd37ab74bac2dba3cc5cb87b6a1c8da605d000bad59c8cb9a/TryGhost/Themes"
fundingLinks: ["GITHUB:https://github.com/TryGhost", "OPEN_COLLECTIVE:https://opencollective.com/ghost"]
---

# Ghost Themes

A monorepo for [Ghost](https://github.com/TryGhost/Ghost) official themes. 

## Development

You'll need [Node](https://nodejs.org/), [pnpm](https://pnpm.io/) and [Gulp](https://gulpjs.com) installed globally. After that, from the project's root directory:

```bash
# install dependencies
pnpm install

# run development server
pnpm dev
```

Now you can edit files in `packages/<theme-name>/assets/css/` or `packages/<theme-name>/assets/js/`, which will be compiled to `packages/<theme-name>/assets/built/` automatically.

To run a theme locally, you need to symlink a theme to your local Ghost site.

```bash
# run a theme locally
pnpm symlink --theme <theme-name> --site /dir/to/your/ghost-site
```

If you're running the Ghost monorepo:
```bash
pnpm symlink --theme <theme-name> --site /dir/to/Ghost/ghost
```

Or if you're running a Ghost instance via the CLI:
```bash
pnpm symlink --theme <theme-name> --site /dir/to/ghost-instance
```

Restart your Ghost instance and the theme will be listed in the `Design` settings.

To create an installable theme zip file in `packages/<theme-name>/dist/`:

```bash
# create .zip file
pnpm zip --theme <theme-name>
```

## Publishing & CI…
