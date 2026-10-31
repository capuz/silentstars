---
repo: "Ravenports/Ravenports"
name: "Ravenports"
description: "Universal package builder system"
readmeQualityOk: true
url: "https://github.com/Ravenports/Ravenports"
homepage: "https://www.ravenports.com"
language: "Makefile"
languages: ["Makefile", "Shell"]
languagePcts: [71, 27]
stars: 81
forks: 8
openIssues: 0
closedIssues: 0
watchers: 14
contributors: 2
recentReleases: 0
createdAt: "2017-02-23T05:38:59Z"
lastCommitAt: "2026-10-31T19:01:01Z"
lastReleaseAt: "2017-05-10T14:13:37Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "community_hub"]
healthScore: 86
undervaluedScore: 40
maintainers: ["jrmarino"]
openGraphImageUrl: "https://opengraph.githubassets.com/a3b3c51094bd28895b831148fada72be9b5464974ea9f3f892f0e1f5c65f18bf/Ravenports/Ravenports"
discussionCount: 50
---

# Ravenports
Universal package builder system

## Objective

To develop the next generation software collection builder and packager
that is also truly cross-platform.  Think FreeBSD ports with several new
cutting edge features and enhancements, but with equal support to Linux,
Solaris(like), and all BSD platforms.  MacOS was previously supported, but
it proved difficult to maintain due to the different file format (Mach-o vs 
ELF) and extremely large system root.

It is not a reinvention of pkgsrc.  The approach is new and not based
on the 'make' program.

## Ravenports Triad

There are three main components of Ravenports.

  1. **Source ports:**
This component, known as "ravensource" is not seen or utilized by
regular users.  It resembles
the ports tree seen in FreeBSD and pkgsrc, but only at the individual
port directory level.  It is not arranged in categories.  The contents
of each port directory is used to generate a port buildsheet.

Custom overlays are supported, known as **unkindness** directories.
These overlays either lock in standard parts (should the locations match
the source ports, or add custom ports.  The two typical uses for this
directory is related port…
