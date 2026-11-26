---
repo: "corosync/omping"
name: "omping"
description: "Omping - Open Multicast Ping"
readmeQualityOk: true
url: "https://github.com/corosync/omping"
language: "C"
languages: ["C"]
languagePcts: [93]
stars: 13
forks: 2
openIssues: 8
closedIssues: 32
watchers: 4
contributors: 4
recentReleases: 0
createdAt: "2016-09-16T07:44:46Z"
lastCommitAt: "2026-11-26T15:25:16Z"
lastReleaseAt: "2016-09-16T07:57:17Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 86
undervaluedScore: 35
maintainers: ["jfriesse"]
openGraphImageUrl: "https://opengraph.githubassets.com/59c11c467be0c096c49da1693cca17fd03472321a0867fb653078059b254667e/corosync/omping"
---

### Overview
Omping (Open Multicast Ping) is tool to test IP multicast functionality primarily in local network.

### Features
 * Similar user experience as classic ping tool
 * Ping multiple hosts at once
 * Implementation of RFC Draft [http://tools.ietf.org/html/draft-ietf-mboned-ssmping-08]
 * Any-source and Source-specific Multicast

### Installation
#### Fedora
Fedora contain omping package. Use yum for installation.
```
$ yum install omping
```

#### Source code
For stable version, use https://github.com/corosync/omping/releases/download/0.0.4/omping-0.0.4.tar.gz. For newest git, use
```
$ git clone git://github.com/corosync/omping.git
$ cd omping
$ make
```

#### Support
Please use GitHub issues.

#### Defects
If a defect is found in omping, please create new issue. You can also try to find and fix bug and create pull
request.

#### Who
This project is maintained by [Jan Friesse](mailto:jfriesseATredhatDOTcom) ([Red Hat](http://www.redhat.com))
