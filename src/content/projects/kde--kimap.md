---
repo: "KDE/kimap"
name: "kimap"
description: "Library to assist working with IMAP servers"
url: "https://github.com/KDE/kimap"
homepage: "https://invent.kde.org/pim/kimap"
language: "C++"
languages: ["C++"]
languagePcts: [97]
stars: 12
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 53
recentReleases: 0
createdAt: "2015-09-18T11:58:17Z"
lastCommitAt: "2026-06-27T14:47:31Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 77
undervaluedScore: 71
maintainers: ["Montel", "vkrause", "winterz"]
openGraphImageUrl: "https://opengraph.githubassets.com/12338ffd400251a2b9e05b376a1b428246e4549b9d666e056a92b0888f3e56e2/KDE/kimap"
fundingLinks: ["GITHUB:https://github.com/KDE", "CUSTOM:https://kde.org/community/donations/"]
---

# KIMAP #

This library provides a job-based API for interacting with an IMAP4rev1 server.
It manages connections, encryption and parameter quoting and encoding, but
otherwise provides quite a low-level interface to the protocol.  This library
does not implement an IMAP client; it merely makes it easier to do so.

Users should be familiar with
[RFC 3501](https://tools.ietf.org/html/rfc3501 "IMAP 4rev1")
as well as
[other related RFCs](https://www.iana.org/assignments/imap4-capabilities)
although the library hides some of the nastier details
like the encoding and quoting of strings.
