---
repo: "jasperla/openbsd-wip"
name: "openbsd-wip"
description: "OpenBSD work in progress ports"
url: "https://github.com/jasperla/openbsd-wip"
homepage: "http://www.openbsd.org/"
language: "C++"
languages: ["C++", "Starlark"]
languagePcts: [39, 25]
topics: ["openbsd-wip", "openbsd", "ports"]
stars: 286
forks: 92
openIssues: 4
closedIssues: 25
watchers: 65
contributors: 108
recentReleases: 0
createdAt: "2011-08-26T07:54:48Z"
lastCommitAt: "2026-06-27T00:34:31Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 94
undervaluedScore: 41
maintainers: ["lcheylus", "jggimi", "Izder456"]
openGraphImageUrl: "https://opengraph.githubassets.com/629f1d7686414ccdcf0eaacf445fc9e65bce2c8eb3bb6873e2296650d283f097/jasperla/openbsd-wip"
---

openbsd-wip - work in progress ports for OpenBSD
======================

This tree is to be used to maintain and eventually migrate ports into the
official OpenBSD ports tree. This means that ports in this tree are actively
worked on and may not always build, though of course it's best to aim for
building ports.

The goal of this exercise is to get more people actively involved in ports. As
well as having a tool to better keep track of (half-)finished ports out there.
Instead of having it rot in a corner of a mailinglist.

Updated ports
==================================

Updates are also welcome; just try to keep this tree clean by removing ports
that are updated/imported upstream.

If you're importing an update, please add an UPDATE file in the ports' directory
with a summary of changes/explanation. This will make it easier to keep
updates and new ports apart.

If it's a rather trivial update, please don't bother importing it here and just
send the diff to ports@ and/or the maintainer.

Finished ports
==================================

When a port is ready to get committed, please add
an entry to /FINISHED in the following format (subject to change):

	net/gnaughty:	ready for…
