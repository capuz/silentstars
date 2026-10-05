---
repo: "osbuild/osbuild"
name: "osbuild"
description: "Build-Pipelines for Operating System Artifacts"
readmeQualityOk: true
url: "https://github.com/osbuild/osbuild"
homepage: "https://www.osbuild.org"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["images", "build-system", "operating-systems", "automation"]
stars: 280
forks: 149
openIssues: 29
closedIssues: 268
watchers: 21
contributors: 89
recentReleases: 0
createdAt: "2019-01-15T14:55:29Z"
lastCommitAt: "2026-10-05T10:47:08Z"
lastReleaseAt: "2020-03-18T17:49:19Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 44
maintainers: ["schutzbot", "supakeen", "alexlarsson"]
openGraphImageUrl: "https://opengraph.githubassets.com/e52ad471149217870453bf00d7beebac583e6e6919fc6b8985118ba646c4a9e6/osbuild/osbuild"
---

# OSBuild

Build-Pipelines for Operating System Artifacts

OSBuild is a pipeline-based build system for operating system artifacts. It
defines a universal pipeline description and a build system to execute them,
producing artifacts like operating system images, working towards an image
build pipeline that is more comprehensible, reproducible, and extendable.

See the `osbuild(1)` man-page for details on how to run osbuild, the definition
of the pipeline description, and more.

## Project

 * **Website**: https://www.osbuild.org
 * **Bug Tracker**: https://github.com/osbuild/osbuild/issues
 * **Discussions**: https://github.com/orgs/osbuild/discussions
 * **Matrix**: #image-builder on [fedoraproject.org](https://matrix.to/#/#image-builder:fedoraproject.org)
 * **Changelog**: https://github.com/osbuild/osbuild/releases

### Principles

1. [OSBuild stages](https://github.com/osbuild/osbuild/blob/HEAD/stages) are never broken, only deprecated. The same manifest should always produce the same output.
2. [OSBuild stages](https://github.com/osbuild/osbuild/blob/HEAD/stages) should be explicit whenever possible instead of e.g. relying on the state of the tree.
3. Pipelines are…
