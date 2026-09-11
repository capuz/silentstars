---
repo: "indaco/malt"
name: "malt"
description: "Homebrew's whole ecosystem, none of its weight - a single Zig binary with native post_install and a themeable TUI & CLI."
readmeQualityOk: true
url: "https://github.com/indaco/malt"
language: "Zig"
languages: ["Zig"]
languagePcts: [87]
topics: ["brew", "cli", "homebrew", "package-manager", "zig", "tui", "macos", "macosx"]
stars: 165
forks: 3
openIssues: 0
closedIssues: 30
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2026-04-08T18:12:02Z"
lastCommitAt: "2026-09-11T08:15:17Z"
lastReleaseAt: "2026-04-16T20:02:26Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 29
maintainers: ["indaco", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0185a9e02e15325e3f6cbf86685357581d3b0294a8aadb0a1c34fe5117cc6286/indaco/malt"
---

# malt

**Homebrew's whole ecosystem, none of its weight.** A ~4 MB Zig binary that reuses every bottle and formula - and runs `post_install` natively, so packages actually work - all from a themeable CLI and TUI.

Installs to its own `/opt/malt` prefix; ~3 ms cold start. Designed by a human and implemented by AI.

  <b><a href="#why-this-and-whats-different">Why malt</a></b> &middot;
  <b><a href="#installation">Install</a></b> &middot;
  <b><a href="#first-commands">First commands</a></b> &middot;
  <b><a href="#theming">Theming</a></b> &middot;
  <b><a href="#interactive-dashboard">TUI</a></b> &middot;
  <b><a href="#command-reference">Reference</a></b> &middot;
  <b><a href="#safety-and-security">Security</a></b> &middot;
  <b><a href="#architecture">Architecture</a></b> &middot;
  <b><a href="#benchmarks">Benchmarks</a></b>
</p>

</p>

> [!IMPORTANT]
> **malt is under active development.** The CLI surface is settled and significant breaking changes are unlikely - bugs are still likely.
>
> If you hit one, please [open an issue](https://github.com/indaco/malt/issues/new). User-reported bugs jump the queue and ship in patch releases.
>
> This README tracks `main`, the…
