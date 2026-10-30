---
repo: "roots/wordpress-packager"
name: "wordpress-packager"
description: "Helper to generate WordPress Composer packages"
readmeQualityOk: true
url: "https://github.com/roots/wordpress-packager"
homepage: "https://wp-packages.org/roots-wordpress"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["composer", "wordpress", "wordpress-composer", "wp-composer", "wp-packages"]
stars: 43
forks: 8
openIssues: 2
closedIssues: 24
watchers: 3
contributors: 9
recentReleases: 0
createdAt: "2019-05-27T01:29:54Z"
lastCommitAt: "2026-10-30T11:03:09Z"
lastReleaseAt: "2024-03-25T16:33:51Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero", "funded"]
healthScore: 95
undervaluedScore: 45
maintainers: ["dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/947ca5095d22a0caf85f984c1df7aae73835bceb6b5013c202fe63a1f4a3ab98/roots/wordpress-packager"
fundingLinks: ["GITHUB:https://github.com/roots"]
---

# WordPress Packager

This package helps generate [Composer packages for any WordPress release](https://wp-packages.org/roots-wordpress).

## Support us

Roots is an independent open source org, supported only by developers like you. Your sponsorship funds [WP Packages](https://wp-packages.org/) and the entire Roots ecosystem, and keeps them independent. Support us by purchasing [Radicle](https://roots.io/radicle/) or [sponsoring us on GitHub](https://github.com/sponsors/roots) — sponsors get access to our private Discord.

## Usage

```bash
$ vendor/bin/wordpress-packager [--source SOURCE] [-t|--type TYPE] [-u|--unstable] [--] <remote> <package>
```

### Repository remote `<remote>`

Required.

A valid git repository remote.  
Eg. `https://github.com/org/project.git`

### Package name `<package>`

Required.

A valid Composer package name.  
Eg. `wordpress-package`

### Release source `--source SOURCE`

Optional, default `WPDotOrgAPI`.

Must be a PHP class implementing [`Roots\WordPressPackager\ReleaseSources\SourceInterface`](https://github.com/roots/wordpress-packager/blob/main/src/ReleaseSources/SourceInterface.php).  
Provides the implementation of data generation for…
