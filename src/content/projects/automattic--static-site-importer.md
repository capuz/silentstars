---
repo: "Automattic/static-site-importer"
name: "static-site-importer"
description: "Import static HTML sites into WordPress block themes"
readmeQualityOk: true
url: "https://github.com/Automattic/static-site-importer"
language: "PHP"
languages: ["PHP", "JavaScript"]
languagePcts: [75, 24]
stars: 91
forks: 8
openIssues: 60
closedIssues: 1039
watchers: 0
contributors: 142
recentReleases: 0
createdAt: "2026-04-29T19:33:58Z"
lastCommitAt: "2026-11-05T08:05:33Z"
lastReleaseAt: "2026-06-04T18:43:30Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 33
maintainers: ["github-actions[bot]", "homeboy-ci[bot]", "chubes4"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d76968668bd23af9af259ddc26395e9c64c571c97d5fcef8a75c08175b8e169/Automattic/static-site-importer"
---

# Static Site Importer

Import a static site or generated website artifact into WordPress pages and an intentional companion block or classic theme.

Static Site Importer is a WordPress plugin. It requires the [Blocks Engine PHP transformer](https://github.com/Automattic/blocks-engine/tree/trunk/php-transformer) Composer package. Production compilation uses `ArtifactCompiler::compile()`; export still calls `blocks_engine_php_transformer_convert_format()`.

## Development packages

Build a production-shaped development ZIP using immutable Blocks Engine source without changing this checkout's Composer files:

```bash
npm run build:dev-package -- --blocks-engine-path ../blocks-engine --blocks-engine-ref origin/trunk
```

To test an unreleased Blocks Engine change, point `--blocks-engine-path` at that checkout and omit `--blocks-engine-ref`: the package then uses the checkout's `HEAD`, and the build refuses to run while `php-transformer/` or `figma-transformer/` have uncommitted changes, because only committed bytes are packaged. With neither option, `../blocks-engine` at `origin/trunk` is used.

The command resolves the requested ref once, archives `php-transformer/` and…
