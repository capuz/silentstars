---
repo: "MarcJHuber/event-driven-servers"
name: "event-driven-servers"
description: "tac_plus-ng, and legacy sources for tac_plus, ftpd, tcprelay"
readmeQualityOk: true
url: "https://github.com/MarcJHuber/event-driven-servers"
homepage: "https://www.pro-bono-publico.de/projects"
language: "C"
languages: ["C"]
languagePcts: [80]
topics: ["ftpd", "mavis", "tacacs", "tcprelay", "spawnd", "tac-plus", "tac-plus-ng", "radius", "radius-server", "radiusd"]
stars: 178
forks: 49
openIssues: 0
closedIssues: 190
watchers: 12
contributors: 10
recentReleases: 0
createdAt: "2022-08-26T15:37:11Z"
lastCommitAt: "2026-11-07T16:12:30Z"
status: "thriving"
tags: ["community_hub"]
healthScore: 99
undervaluedScore: 46
maintainers: ["MarcJHuber", "gurkin33", "marcinpsk"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d5a216f93893620d359163578bbe44c0fecc7fb7260b86d71b7e42f9cbbac28/MarcJHuber/event-driven-servers"
discussionCount: 66
---

This is a collection of high-performance and scalable event-driven servers
(notably tac_plus-ng, but the legacy daemons tac_plus, ftpd and tcprelay
are still part of the GIT).

TAC_PLUS-NG
===========

tac_plus-ng implements both TACACS+ (TCP, TLS) and RADIUS (UDP, TCP, DTLS,
TLS), with RADIUS support for PAP/CHAP/MSCHAPv1/MSCHAPv2 authentication and Downloadable ACLs.

Documentation:

  https://projects.pro-bono-publico.de/event-driven-servers/doc/tac_plus-ng.html

Sample configurations:

  https://github.com/MarcJHuber/event-driven-servers/tree/master/tac_plus-ng/sample

Bugs
====

Be prepared for issues. This is work-in-progress, so be prepared for
unexpected bahavior. Don't use this in a production environment without
testing. If it breaks, please file an issue. The non-helpful alternative
would be to just keep the broken pieces, so please don't do that. 

Installation instructions
=========================

This software suite should compile quite fine on current version of Linux, FreeBSD
and OpenBSD.  Other platforms might be ok, too, but weren't recently tested.

Build environment
-----------------

Required tools:

- A supported C compiler, plus linker. LLVM is fine, GCC…
