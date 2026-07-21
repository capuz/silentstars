---
repo: "TryGhost/Themes"
name: "Themes"
description: "A monorepo for Ghost themes"
readmeQualityOk: true
url: "https://github.com/TryGhost/Themes"
language: "Handlebars"
languages: ["Handlebars", "CSS", "JavaScript"]
languagePcts: [51, 30, 20]
topics: ["ghost", "publishing", "ghost-theme", "newsletter"]
stars: 95
forks: 82
openIssues: 14
closedIssues: 68
watchers: 11
contributors: 75
recentReleases: 0
createdAt: "2021-04-07T09:23:09Z"
lastCommitAt: "2026-07-21T06:10:46Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 95
undervaluedScore: 53
maintainers: ["renovate[bot]", "aileen", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5aa0138744884c37ec9dccc24955c259627de8999c9ed4d8811cf1ad51a22e2/TryGhost/Themes"
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
pnpm symlink --theme <theme-name> --site /dir/to/Ghost/ghost/core
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

## Publishing &…
