---
repo: "Automattic/docspress"
name: "docspress"
description: "Publish Markdown documentation from GitHub to native WordPress Pages and Gutenberg blocks."
readmeQualityOk: true
url: "https://github.com/Automattic/docspress"
homepage: "https://docs.press/"
language: "JavaScript"
languages: ["JavaScript", "PHP"]
languagePcts: [51, 29]
topics: ["developer-tools", "docs-as-code", "documentation", "github-actions", "gutenberg", "markdown", "wordpress", "wordpress-plugin", "wordpress-theme"]
stars: 23
forks: 5
openIssues: 3
closedIssues: 3
watchers: 0
contributors: 138
recentReleases: 10
createdAt: "2026-07-09T09:53:14Z"
lastCommitAt: "2026-08-03T06:43:05Z"
lastReleaseAt: "2026-07-27T14:51:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 49
maintainers: ["f", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6600b913a2a637a286c4a05ff3f9bfa1f71047214f6389e07a7e28f9e95a61b7/Automattic/docspress"
---

</p>

</p>

  <strong>Markdown in GitHub. WordPress as the publishing surface.</strong><br>
  Sync Markdown documentation into WordPress Pages as Gutenberg-compatible block content.
</p>

## Quick start

1. Put the Markdown documentation in `docs/`.
2. [Create a WordPress access token](#authentication).
3. Add one of the [GitHub Actions workflows](#github-actions) below.
4. Run it first with `status: draft` and `dry-run: true`.

The complete product and setup documentation lives at [docs.press/docs](https://docs.press/docs/).

## Optional WordPress packages

You do not have to install the DocsPress theme. An unversioned DocsPress sync works with the site's existing theme and native WordPress blocks.

- [Download the latest DocsPress theme](https://github.com/Automattic/docspress/releases/latest/download/docspress-theme.zip)
- [Download the latest DocsPress Blocks plugin](https://github.com/Automattic/docspress/releases/latest/download/docspress-blocks.zip)

Install the theme for the complete documentation layout. Install the Blocks plugin for rich DocsPress blocks; it is required when API versioning is enabled.

## Preview local docs from the CLI

Run this from the repository that…
