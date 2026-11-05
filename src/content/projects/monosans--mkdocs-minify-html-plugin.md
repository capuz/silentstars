---
repo: "monosans/mkdocs-minify-html-plugin"
name: "mkdocs-minify-html-plugin"
description: "MkDocs plugin for minification using minify-html, an extremely fast and smart HTML + JS + CSS minifier."
readmeQualityOk: true
url: "https://github.com/monosans/mkdocs-minify-html-plugin"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [70, 24]
stars: 13
forks: 2
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-07-08T13:45:13Z"
lastCommitAt: "2026-11-05T00:22:01Z"
lastReleaseAt: "2025-07-29T13:13:25Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 71
maintainers: ["renovate[bot]", "monosans"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c5e9c31fac0dc5475acb9f17f75361c9ab1a82a724230174ef562960b7f5613/monosans/mkdocs-minify-html-plugin"
---

# <img src="https://raw.githubusercontent.com/monosans/mkdocs-minify-html-plugin/main/assets/logo.svg" alt="" width="40" align="top"> mkdocs-minify-html-plugin

[ProperDocs](https://properdocs.org/) and MkDocs plugin that minifies the built HTML pages, including inline CSS and JS, with [minify-html](https://github.com/wilsonzlin/minify-html).

## ProperDocs instead of MkDocs

MkDocs is no longer maintained, and its last release, 1.6.1, came out in August 2024. MkDocs 2.0, now in development, has no plugin system, so this plugin will not run on it. [ProperDocs](https://properdocs.org/) continues MkDocs 1.x. It reads `mkdocs.yml` and runs existing plugins without changes, this one included. This plugin still supports MkDocs 1.x as well.

## Usage

Install:

```bash
uv add --dev mkdocs-minify-html-plugin
# or
pip install -U mkdocs-minify-html-plugin
```

Activate in `properdocs.yml` or `mkdocs.yml`:

```yaml
plugins:
  - search
  - minify_html
```

## Options

The options are the fields of minify-html's [`Cfg`](https://docs.rs/minify-html/latest/minify_html/struct.Cfg.html#fields). The defaults aim for the smallest output that stays spec-compliant:

```yaml
plugins:
  - search
  -…
