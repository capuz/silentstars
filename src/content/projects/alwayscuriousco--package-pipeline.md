---
repo: "AlwaysCuriousCo/package-pipeline"
name: "package-pipeline"
description: "Your software. Your distribution. Your terms."
readmeQualityOk: true
url: "https://github.com/AlwaysCuriousCo/package-pipeline"
homepage: "https://packagepipeline.com"
language: "PHP"
languages: ["PHP"]
languagePcts: [93]
topics: ["agency", "laravel", "agency-product", "laravel-app"]
stars: 79
forks: 43
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-03T18:13:29Z"
lastCommitAt: "2026-10-26T03:02:42Z"
lastReleaseAt: "2026-08-19T18:29:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 95
undervaluedScore: 45
maintainers: ["codearachnid", "jaspertey", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f094b403f488e8d548953b16ef2eeb42707129d41507874b882ce73c357275a/AlwaysCuriousCo/package-pipeline"
---

# Package Pipeline

Sharing private PHP packages across projects is a chore: every consuming app needs its own `repositories` entries in `composer.json`, its own GitHub or GitLab credentials, and Composer crawls the provider's API repo-by-repo just to resolve versions. Package Pipeline replaces all of that with one self-hosted registry. Point it at your repositories once, and every project can `composer require` your private packages as if they were on Packagist — one repository URL to configure, no per-repo wiring, and your code never leaves your infrastructure.

**How it works, in one pass:** you register a **package** (a repository on GitHub or GitLab) in the [Filament](https://filamentphp.com) admin panel, a sync job reads its tags and branches and stores each one as a version, and Composer clients fetch `/packages.json`, per-package metadata, and zipball dists straight from the app over the standard [Composer v2 repository API](https://getcomposer.org/doc/05-repositories.md#composer). Each version's zipball is downloaded from the provider at sync time and stored on a local or S3 disk with its sha1 checksum, so dist downloads are served entirely from the app's own storage.…
