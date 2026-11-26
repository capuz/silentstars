---
repo: "jmazzola/tern-plugin-omp-usage"
name: "tern-plugin-omp-usage"
description: "Tern plugin: omp usage limits above the omp composer context bar"
readmeQualityOk: true
url: "https://github.com/jmazzola/tern-plugin-omp-usage"
language: "Luau"
languages: ["Luau", "JavaScript"]
languagePcts: [61, 39]
topics: ["oh-my-pi", "oh-my-pi-extension", "omp", "tern", "tern-plugin"]
stars: 14
forks: 9
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-10-12T01:12:12Z"
lastCommitAt: "2026-11-26T22:49:44Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 94
undervaluedScore: 56
maintainers: ["jmazzola", "ParticleG", "xd003"]
openGraphImageUrl: "https://opengraph.githubassets.com/e8ab17e8a95b1fbaa21344ec2a7077f79c21c6d824ba1e45d47d8fd8dd2caffa/jmazzola/tern-plugin-omp-usage"
---

# tern-plugin-omp-usage

Your omp usage limits, right above the omp composer's context bar in [Tern](https://stencil.so/tern):

## Quick start

1. In a terminal (or Tern's Preferences › Plugins › Install):

   ```sh
   tern plugin install github.com/jmazzola/tern-plugin-omp-usage
   ```

2. **Restart your omp sessions** when the toast says it's installed.
3. Click into an omp pane. Within a few seconds the line shows above the context bar (`2% ──── 1M`). Hover it for
   the card, press Alt+Shift+U for the quota details and Ctrl+Alt+U for the settings.

You need Tern with plugins on, and omp signed in to an account with limits (`omp usage` should list them) or an
[external quota source](#external-quota-sources). [Install](#install) has the details and what to do when it can't
set itself up.

## What it does

Tern's widget bar can show stats too, but it lives at the edge of the window. This sits right where you're already
looking while you work: above the composer, every time you glance down, without leaving the session.
