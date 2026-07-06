---
repo: "eclipse-mwe/mwe"
name: "mwe"
description: "Modeling Workflow Engine project repository (mwe)"
readmeQualityOk: true
url: "https://github.com/eclipse-mwe/mwe"
language: "Java"
languages: ["Java"]
languagePcts: [85]
stars: 13
forks: 19
openIssues: 17
closedIssues: 91
watchers: 6
contributors: 19
recentReleases: 0
createdAt: "2011-07-14T01:00:52Z"
lastCommitAt: "2026-07-06T07:04:05Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 59
maintainers: ["cdietrich", "HannesWell", "merks"]
openGraphImageUrl: "https://opengraph.githubassets.com/884ef0c945fecde8329d9d551246c5416c33f893cb74190e12376c6b4076b694/eclipse-mwe/mwe"
---

# Modeling Workflow Engine (MWE)
See the [MWE2 documentation](https://github.com/eclipse-mwe/mwe/blob/HEAD/documentation/mwe2.md) for more details.

## Release Process

MWE releases are performed via the master branch on [Jenkins](https://ci.eclipse.org/mwe/job/mwe2/job/master/). The job is parameterized so the release type ('Integration', 'Beta', 'M0', 'M1', 'M2', 'M3', 'M4', 'M5', 'RC1', 'RC2', 'GA') can be configured upon starting the job.

### Nightly Integration Releases

The master branch is configured to perform a nightly integration build. If a nightly build fails, running the build manually choosing the 'Integration' release type should return the same result and further actions should not be necessary.

### Stable Releases

Performing a stable release has a few manual steps that are documented here:

1. Start the master branch job, selecting the release type. When the job is finished, artifacts should have been uploaded to [Maven Central](https://central.sonatype.com/) and the Eclipse download storage.

1. Add a git tag (`v$MAJOR.$MINOR.$SERVICE`) to mark the commit being released.

1. Check Jenkins artifacts, if Maven artifacts have the correct versions (without…
