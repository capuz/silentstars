---
repo: "MegaMek/megamek.github.io"
name: "megamek.github.io"
description: "The jekyll set-up for the MegaMek Github front page at https://megamek.github.io"
readmeQualityOk: true
url: "https://github.com/MegaMek/megamek.github.io"
language: "HTML"
languages: ["HTML"]
languagePcts: [91]
stars: 5
forks: 7
openIssues: 0
closedIssues: 10
watchers: 12
contributors: 19
recentReleases: 0
createdAt: "2018-09-12T20:28:31Z"
lastCommitAt: "2026-10-24T00:16:12Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 100
undervaluedScore: 80
maintainers: ["github-actions[bot]", "HammerGS", "VicenteCartas"]
openGraphImageUrl: "https://opengraph.githubassets.com/1bc355f372c6915d1ab7a0f096a877ea9410bdcd8418097e061d40a8136e6b18/MegaMek/megamek.github.io"
---

# MegaMek Website

These files contain a [Jekyll](https://jekyllrb.com/) set-up for a the new
MegaMek website hosted at GitHub pages.
[Github pages](https://pages.github.com/) supports Jekyll set ups and the
site will automatically re-build any time a new commit is pushed to this
repository.

The other reasons for using Jekyll is that we can separate frequently
updated content from the HTML formatting and design, without having to
rely on a database system. This repository is designed so that all content
information is pulled from simple Markdown and YAML files that can be easily
edited without fiddling around with a bunch of HTML code.

## Adding Content

### Program Versions

The latest program version information is kept in YAML file
`current_releases.yml` in the `_data` folder. The version information and
download links that show on the website depend on this file. For the download
links to work properly, each release should just include the number of the
release without a "v."

### Launcher Policies and Signing

The public pages are `/launcher-privacy.html`, `/code-signing.html`, and
`/credits.html`. The privacy contact uses the existing `email` in `_config.yml`.
The signing…
