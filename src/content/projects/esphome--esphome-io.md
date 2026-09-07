---
repo: "esphome/esphome.io"
name: "esphome.io"
description: "Source for esphome.io documentation files."
readmeQualityOk: true
url: "https://github.com/esphome/esphome.io"
homepage: "https://esphome.io/"
language: "MDX"
languages: ["MDX"]
languagePcts: [92]
topics: ["sphinx-doc", "sphinx", "iot", "home-automation", "rst", "python", "home-assistant", "hacktoberfest"]
stars: 458
forks: 2382
openIssues: 32
closedIssues: 75
watchers: 23
contributors: 1515
recentReleases: 0
createdAt: "2018-05-13T09:37:21Z"
lastCommitAt: "2026-09-07T08:34:24Z"
lastReleaseAt: "2018-12-01T12:45:56Z"
status: "thriving"
tags: ["legacy_hero", "funded", "fork_magnet"]
healthScore: 93
undervaluedScore: 42
maintainers: ["jesserockz", "dependabot[bot]", "mrdarrengriffin"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/133223461/496a7a00-81fb-11e9-9ccf-f2ede545c14f"
fundingLinks: ["CUSTOM:https://www.openhomefoundation.org"]
---

# ESPHome.io Documentation

[netlify-badge]: https://api.netlify.com/api/v1/badges/97a2e9ce-cee7-4cc8-8dc7-537c92a23fa7/deploy-status
[netlify-link]: https://app.netlify.com/sites/esphome/deploys
[discord-badge]: https://img.shields.io/discord/429907082951524364.svg
[discord-link]: https://discord.gg/KhAMKrd
[github-badge]: https://img.shields.io/github/release/esphome/esphome.svg
[github-link]: https://github.com/esphome/esphome/releases

  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://media.esphome.io/logo/logo-text-on-dark.svg">
  </picture>
</a>

This repository contains the source for the documentation site for ESPHome, built with [Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/).

## Project Structure

The project follows the Astro/Starlight directory structure:

```text
esphome.io/
├── src/
│   ├── assets/           # Static assets (logos, etc.)
│   ├── components/       # Astro components
│   ├── content/
│   │   └── docs/         # MDX documentation files
│   ├── lib/              # Utility functions
│   └── styles/           # CSS files
├── public/
│   └── images/           # Shared images (multi-use, ImgTable)
├──…
