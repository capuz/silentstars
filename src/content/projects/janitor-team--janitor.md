---
repo: "janitor-team/janitor"
name: "janitor"
description: "Platform for making incremental changes to code in VCSes"
readmeQualityOk: true
url: "https://github.com/janitor-team/janitor"
homepage: "https://jelmer.uk/code/janitor"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
topics: ["debian", "lintian", "lintian-brush", "silver-platter", "git", "vcs", "bzr"]
stars: 16
forks: 7
openIssues: 102
closedIssues: 144
watchers: 1
contributors: 12
recentReleases: 0
createdAt: "2020-03-22T20:08:31Z"
lastCommitAt: "2026-11-17T14:32:58Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "funded"]
healthScore: 89
undervaluedScore: 70
maintainers: ["jelmer", "ZainabMehmut"]
openGraphImageUrl: "https://opengraph.githubassets.com/ddfad38150327711799f0cd6b05b06f573288090989ad8834bab58cb1591d19b/janitor-team/janitor"
fundingLinks: ["GITHUB:https://github.com/jelmer"]
---

This repository contains the setup for a "Janitor" bot. This is basically
a platform for managing large-scale automated code improvements on
top of [silver-platter](https://github.com/jelmer/silver-platter).

Any code that is not related to the platform but to actually making changes
should probably live in either ``silver-platter``, ``breezy`` or a
specific codemod (such as [lintian-brush](https://salsa.debian.org/jelmer/lintian-brush)).

There are currently several instances of the Janitor running. For their configuration, see:

* [Debian Janitor](https://janitor.debian.net/) - Setup at https://salsa.debian.org/janitor-team/janitor.debian.net
* [Kali Janitor](https://janitor.kali.org/) - Configuration repository is private
* [Upstream Janitor aka ``Scruffy``](https://www.scruffy.dev/) - Setup at https://github.com/scruffy-team/scruffy

Philosophy
==========

There are some straightforward changes to code that can be made
using scripting. The janitor's job is to opportunistically make those changes
when it is certain it can do so with a high confidence, and to back off
otherwise.

The janitor continuously tries to run changes on the set of repositories it
knows about. It tries to…
