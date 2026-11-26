---
repo: "versionize/versionize"
name: "versionize"
description: "Automatic versioning and CHANGELOG generation, with semver and conventional commits for dotnet"
readmeQualityOk: true
url: "https://github.com/versionize/versionize"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["semantic-versioning", "semantic-release", "dotnet-core", "dotnet-cli", "git", "changelog"]
stars: 381
forks: 52
openIssues: 10
closedIssues: 74
watchers: 6
contributors: 26
recentReleases: 1
createdAt: "2018-09-29T09:40:15Z"
lastCommitAt: "2026-11-26T12:58:13Z"
lastReleaseAt: "2026-09-03T12:01:03Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 77
undervaluedScore: 23
maintainers: ["cabauman", "Copilot", "saintedlama"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e69b19107107e5b47ab8b0d635e6d1f979d5f5261fff34617ae0996d6bb9cb6/versionize/versionize"
discussionCount: 1
---

# Versionize

> stop using weird build scripts to increment your nuget's version, use `versionize`!

Automatic versioning and CHANGELOG generation, using [conventional commit messages](https://conventionalcommits.org).

_how it works:_

1. when you land commits on your `main` branch, select the _Squash and Merge_ option (not required).
2. add a title and body that follows the [Conventional Commits Specification](https://conventionalcommits.org).
3. when you're ready to release a nuget package:
    1. `git checkout main; git pull origin main`
    2. run `versionize`
    3. `git push --follow-tags origin main`
    4. `dotnet pack`
    5. `dotnet nuget push`

`versionize` does the following:

1. bumps the version in your `.csproj` file (based on your commit history)
2. uses [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) to update _CHANGELOG.md_
3. commits `.csproj` file and _CHANGELOG.md_
4. tags a new release

## Installation

```bash
dotnet tool install --global Versionize
```
