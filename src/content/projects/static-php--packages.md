---
repo: "static-php/packages"
name: "packages"
description: "Repository to build rpm, deb and apk packages using static-php-cli"
url: "https://github.com/static-php/packages"
homepage: "https://pkgs.henderkes.com"
language: "PHP"
languages: ["PHP"]
languagePcts: [84]
stars: 12
forks: 3
openIssues: 1
closedIssues: 12
watchers: 3
contributors: 5
recentReleases: 3
createdAt: "2025-06-01T10:25:17Z"
lastCommitAt: "2026-06-23T06:41:25Z"
lastReleaseAt: "2026-06-09T02:34:38Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 91
undervaluedScore: 76
maintainers: ["henderkes"]
openGraphImageUrl: "https://opengraph.githubassets.com/b6d5c977809687b0bfbd78ab094bfc97874f74ea8790294d4f039b82b23680cf/static-php/packages"
fundingLinks: ["GITHUB:https://github.com/henderkes"]
---

# SPC Packages

Utility for building and packaging ZTS builds of PHP and shared extensions.
Published daily at https://pkg.henderkes.com. Uses [static-php-cli](https://github.com/crazywhalecc/static-php-cli)

## Usage for users:

```sh
curl -fsSL https://files.henderkes.com/install.sh | sh -s 8.5
```

## Usage for developers

The main command-line tool is `bin/spp` with the steps `build` and `package`. The former builds php and extensions, the latter packages them into os-packages.

### Build and Package

To run both build and package steps in one command:

```
php bin/spp all
```

### Parameters

- `--target`: Optional. Specify the target architecture using a target triple that Zig understands, such as `native-native-gnu` or `native-native-musl -dynamic`. Default uses current OS defaults.
- `--type`: Required. Specify the package type to build. rpm, deb or apk.
- `--prefix`: Optional. Prefix for binaries and packages. `--prefix="-zts85"` generates `php-zts85` and `php-zts85-cli`. Defaults to `-zts`.
- `--packages`: Optional. Only build binaries and create packages for those packages. Default empty, builds everything.

## Links

-…
