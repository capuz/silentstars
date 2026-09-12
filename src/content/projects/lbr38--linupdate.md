---
repo: "lbr38/linupdate"
name: "linupdate"
description: "A deb/rpm package updater tool - Repomanager client side agent"
readmeQualityOk: true
url: "https://github.com/lbr38/linupdate"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 13
forks: 2
openIssues: 1
closedIssues: 11
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-12-30T13:09:28Z"
lastCommitAt: "2026-09-12T08:04:33Z"
lastReleaseAt: "2023-12-15T16:28:45Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 82
undervaluedScore: 46
maintainers: ["lbr38"]
openGraphImageUrl: "https://opengraph.githubassets.com/2461b3850c62bbe432a64453a4dcd2e3ff6e9b96ef76079cdec4a6191a1f3b1b/lbr38/linupdate"
---

</p>

<h1 align="center">LINUPDATE</h1>

<br>

<br>

Using ``apt`` and ``dnf``, linupdate provides basic and avanced update features especially when being managed by a <a href="https://github.com/lbr38/repomanager">Repomanager</a> reposerver:
- update packages
- exclude packages from update
- execute pre or post update actions (e.g: restart services)
- send mail update reports
- register to a **Repomanager** reposerver and get configuration from that server

linupdate is a modular tool. New modules could be added in the future to improve the update experience.

## Requirements

**linupdate** is regulary tested and should run fine on following systems (python3 required):

- **Debian 11, 12** and derivatives (Ubuntu, Mint, ...)
- **RHEL 9, 10** and derivatives (CentOS, Rocky, Alma, ...)

RHEL 8 and derivatives are not supported anymore.

## Installation and documentation

Official documentation is available <a href="https://github.com/lbr38/linupdate/wiki">here</a>.

It should help you **installing** and starting using linupdate.

## Parameters

<pre>
Available options:

    Name                                         Description
--  -------------------------------------------…
