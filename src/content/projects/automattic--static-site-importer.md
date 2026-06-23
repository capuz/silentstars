---
repo: "Automattic/static-site-importer"
name: "static-site-importer"
description: "Import static HTML sites into WordPress block themes"
url: "https://github.com/Automattic/static-site-importer"
language: "PHP"
languages: ["PHP"]
languagePcts: [96]
stars: 38
forks: 1
openIssues: 3
closedIssues: 162
watchers: 0
contributors: 139
recentReleases: 10
createdAt: "2026-04-29T19:33:58Z"
lastCommitAt: "2026-06-23T23:17:51Z"
lastReleaseAt: "2026-06-04T18:43:30Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 45
maintainers: ["chubes4"]
openGraphImageUrl: "https://opengraph.githubassets.com/51a3049eee240abd300828fda7ad92ae55b5ba3a2c246ec4cda8bee19d4ee828/Automattic/static-site-importer"
---

# Static Site Importer

Import a static site or generated website artifact into WordPress pages and a companion block theme.

Static Site Importer is a WordPress plugin. It requires the [Blocks Engine PHP transformer](https://github.com/Automattic/blocks-engine/tree/trunk/php-transformer) Composer package and calls that package's canonical helper functions for generic artifact compilation and format conversion.

## Architecture Stack

Static Site Importer is the WordPress materialization layer for static website inputs. It accepts two related shapes:

- Static source imports: an HTML entry file, pasted HTML document, public HTML URL, direct HTML upload, or ZIP source tree.
- Generated website artifacts: a `blocks-engine/php-transformer/site-artifact/v1` bundle, such as the website artifact emitted by Studio Web or WP Codebox browser runtimes.

The conversion stack is split by responsibility:

- **Static Site Importer** owns WordPress intake, safety checks, page/theme creation, asset placement, import reports, quality gates, and block-theme materialization.
- **Blocks Engine PHP transformer** owns the generic artifact compiler, `blocks-engine/php-transformer/compiled-site/v1`…
