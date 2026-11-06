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
openIssues: 63
closedIssues: 1060
watchers: 0
contributors: 142
recentReleases: 0
createdAt: "2026-04-29T19:33:58Z"
lastCommitAt: "2026-11-06T12:17:42Z"
lastReleaseAt: "2026-06-04T18:43:30Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 33
maintainers: ["homeboy-ci[bot]", "github-actions[bot]", "chubes4"]
openGraphImageUrl: "https://opengraph.githubassets.com/f96a6baf59c660bf71f61fbb3c560358ee51fc1a91a29ad2c3fcde029781ce47/Automattic/static-site-importer"
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
