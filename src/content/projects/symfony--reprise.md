---
repo: "symfony/reprise"
name: "reprise"
description: "Integrate Vite and Rsbuild with Symfony, a reprise of Webpack Encore Bundle."
readmeQualityOk: true
url: "https://github.com/symfony/reprise"
homepage: "https://symfony.com/reprise"
language: "PHP"
languages: ["PHP", "TypeScript"]
languagePcts: [49, 44]
topics: ["assets", "encore", "rsbuild", "symfony", "vite"]
stars: 60
forks: 2
openIssues: 1
closedIssues: 2
watchers: 5
contributors: 6
recentReleases: 6
createdAt: "2026-07-09T19:12:22Z"
lastCommitAt: "2026-08-05T06:08:49Z"
lastReleaseAt: "2026-08-04T05:44:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 91
undervaluedScore: 39
maintainers: ["Kocal", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e15574bfe88688b150817706dd9253eb47f657158d0503b28286dc4979b53a88/symfony/reprise"
fundingLinks: ["GITHUB:https://github.com/fabpot", "GITHUB:https://github.com/nicolas-grekas", "CUSTOM:https://symfony.com/sponsor", "TIDELIFT:https://tidelift.com/funding/github/packagist/symfony/symfony"]
discussionCount: 0
---

</a></p>

<h3 align="center">
</h3>

</p>

  Symfony Reprise brings the same to <strong>Vite</strong> and <strong>Rsbuild</strong>.
</p>

> [!WARNING]
> **Experimental** this bundle is experimental and is likely to change, or even change drastically.

Symfony Reprise covers only the Symfony-side glue the bundlers leave out:

- 🎯 **Multiple entries**: build several independent entry points from one config
- 📄 **`entrypoints.json`**: generated in both build and dev-server modes
- 🗺️ **`manifest.json`**: maps each logical filename to its hashed URL
- 🔖 **Asset versioning**: content-hash cache busting, wired into the manifest
- 📁 **File copy**: copy static files (images, fonts…) into the build, keyed in the manifest
- 🔥 **Dev server & HMR**: points Twig at the running Vite/Rsbuild server
- 🧱 **Multiple builds**: drive several bundles (e.g. a main app and a separately-built embeddable widget) from one Symfony app
- 🏷️ **Twig tag rendering**: `reprise_entry_script_tags`/`reprise_entry_link_tags` render straight from `entrypoints.json`
- 🧩 **Symfony UX / Stimulus**: registers `controllers.json` and local controllers, eager or lazy
- 🌐 **CDN support**: serve built assets from an…
