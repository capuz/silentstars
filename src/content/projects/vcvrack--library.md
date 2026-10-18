---
repo: "VCVRack/library"
name: "library"
description: "Database for the VCV Library"
readmeQualityOk: true
url: "https://github.com/VCVRack/library"
homepage: "https://library.vcvrack.com/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 442
forks: 96
openIssues: 37
closedIssues: 558
watchers: 46
contributors: 42
recentReleases: 0
createdAt: "2017-11-30T01:14:11Z"
lastCommitAt: "2026-10-18T08:17:18Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 88
undervaluedScore: 38
maintainers: ["AndrewBelt", "cschol"]
openGraphImageUrl: "https://opengraph.githubassets.com/7145bf3c4ebab5f484a256e1fc3baee3cf4a5c6340c23e3853a5bde6da604a7f/VCVRack/library"
---

# VCV Library database

This repo contains the database for VCV Rack plugins, for [VCV Library](https://library.vcvrack.com/).

All plugins submitted here must
- follow the [VCV Plugin Ethics Guidelines](https://vcvrack.com/manual/PluginLicensing.html#vcv-plugin-ethics-guidelines).
- not harm the user's computer or privacy.

## Adding your plugin to the VCV Library (for open-source plugins)

Create exactly one thread in the [Issue Tracker](https://github.com/VCVRack/library/issues) per plugin, with a title equal to your plugin's slug (not name).
Post the URL to your source code, and follow the "Pushing an update" section below.
This will be your permanent communication channel with VCV Library maintainers.

A Library maintainer will handle your request and post a comment when updated.

### Pushing an update

To inform us of an update to your plugin, make sure to increment the `"version"` in your [`plugin.json` manifest file](https://vcvrack.com/manual/Manifest.html) (e.g. from 1.2.3 to 1.2.4), and push a commit to your repository.
Post a comment in your plugin's thread (we will re-open it for you) with
- the new version
- the commit hash (given by `git log` or `git rev-parse…
