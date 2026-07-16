---
repo: "eclipse-orbit/orbit-simrel"
name: "orbit-simrel"
description: "Third-party libraries bundled using Maven target locations."
readmeQualityOk: true
url: "https://github.com/eclipse-orbit/orbit-simrel"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 5
forks: 7
openIssues: 2
closedIssues: 40
watchers: 16
contributors: 30
recentReleases: 0
createdAt: "2023-07-07T08:23:13Z"
lastCommitAt: "2026-07-16T05:59:46Z"
status: "watched"
tags: ["solo_builder", "community_watch", "fork_magnet"]
healthScore: 98
undervaluedScore: 76
maintainers: ["merks"]
openGraphImageUrl: "https://opengraph.githubassets.com/70c60521d2b992c245d1b0860768b19aa548481c30e13b60e52efb288f54a674/eclipse-orbit/orbit-simrel"
discussionCount: 14
---

# Eclipse Orbit SimRel

## Managing 3rd Party Dependencies

This repository provides infrastructure for managing 3rd party dependencies based on libraries hosted at [Maven Central](https://repo1.maven.org/maven2/).
It augments the Eclipse Bundle Recipe [EBR](https://github.com/eclipse-orbit/ebr/#readme) infrastructure 
traditionally used by [Orbit](https://github.com/eclipse-orbit/orbit/#readme).
Many libraries hosted at Maven central are already provided in the form of [OSGi](https://www.osgi.org/) bundles and can simply be reused as is,
but many others need to be repackaged as bundles.
Orbit has traditionally been repackaging all libraries from Maven Central using EBR, which is based on [BND](https://bnd.bndtools.org/).

Eclipse [m2e](https://projects.eclipse.org/projects/technology.m2e) provides extensions to Eclipse [PDE](https://projects.eclipse.org/projects/eclipse.pde)
that allow dependencies on Maven artifacts to be expressed directly in a target platform file,
including the ability to wrap a non-OSGi jar as an OGI-bundle using BND instructions.
This mechanism is also directly supported by [Tycho](https://projects.eclipse.org/projects/technology.tycho).
These technologies…
