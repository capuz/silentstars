---
repo: "sciencehistory/scihist_digicoll"
name: "scihist_digicoll"
description: "Science History Institute Digital Collections"
readmeQualityOk: true
url: "https://github.com/sciencehistory/scihist_digicoll"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [76]
stars: 18
forks: 2
openIssues: 148
closedIssues: 1182
watchers: 5
contributors: 6
recentReleases: 0
createdAt: "2018-10-16T15:11:09Z"
lastCommitAt: "2026-11-05T14:05:07Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 97
undervaluedScore: 63
maintainers: ["jrochkind", "eddierubeiz", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c7730f90ec3fb38e7e6e2f9a066fca594a458c7b37f8810255e4d5cba2072ab8/sciencehistory/scihist_digicoll"
---

# Science History Institute Digital Collections

The current live/production Science History Institute Digital Collections application. A rewrite of a previous app based on sufia, this one is not.

This one is based on the [kithe](https://github.com/sciencehistory/kithe) toolkit, which was developed in tandem with this app.

## Development Setup

To set up a development instance on your workstation.

### Prerequisites

* (MacOS) You will need homebrew, which will also take care of making sure you have a C compiler toolchain to install native C gems. https://brew.sh/
* While not technically required just to run the app, you're going to want `git`. MacOS, `brew install git`.
* ruby installed (I like using chruby and ruby-build to install/manage rubies, some like rvm)
* Postgres version 14 or higher, installed and running -- on MacOS, I like https://postgresapp.com/
* You'll need Java installed to run Solr. If you don't already have it, on MacOS `brew install java`, then follow post-install instructions, such as `sudo ln -sfn /opt/homebrew/opt/openjdk/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk.jdk`

* Various OS-package brew-installable packages are listed in the…
