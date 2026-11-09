---
repo: "MidnightBSD/mports"
name: "mports"
description: "MidnightBSD mports collection. (makefiles for third party software to build)"
readmeQualityOk: true
url: "https://github.com/MidnightBSD/mports"
homepage: "http://www.midnightbsd.org/mports/"
language: "Makefile"
languages: ["Makefile", "C++"]
languagePcts: [34, 32]
topics: ["ports", "midnightbsd"]
stars: 13
forks: 12
openIssues: 27
closedIssues: 148
watchers: 2
contributors: 12
recentReleases: 0
createdAt: "2019-02-16T16:37:56Z"
lastCommitAt: "2026-11-09T00:55:09Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded", "fork_magnet"]
healthScore: 97
undervaluedScore: 83
maintainers: ["laffer1"]
openGraphImageUrl: "https://opengraph.githubassets.com/632b2943060fadb27bd8b13b0bd8745da9e6f503142c9c6ec5194da1e38cf9dd/MidnightBSD/mports"
fundingLinks: ["GITHUB:https://github.com/laffer1", "PATREON:https://patreon.com/midnightbsd"]
---

This is the MidnightBSD Ports Collection.

	https://www.MidnightBSD.org/mports
	
Download, file bug reports or submit patches via github:
	https://github.com/MidnightBSD/mports

For documentation, consult:

	The ports(7) manual page (man ports).

	MidnightBSD website https://www.midnightbsd.org/

If you would like to search for a port, you can do so easily by
saying (in /usr/mports):

	make search name="<name>"
	or:
	make search key="<keyword>"

which will generate a list of all ports matching <name> or <keyword>.
make search also supports wildcards, such as:

	make search name="gtk*"

To use packages instead, use the mport command to install. You can find
out what pacakges are available on the midnightbsd app store
http://app.midnightbsd.org/

You can also learn about package builds and their progress
https://www.midnightbsd.org/magus/

To create packages, one must use the magus software, which is included
in Tools/magus Tools/lib and so on.  

NOTE:  This tree will GROW significantly in size during normal usage!
The distribution tar files can and do accumulate in /usr/mports/Distfiles,
and the individual mports will also use up lots of space in their work
subdirectories unless…
