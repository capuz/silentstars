---
repo: "cvmfs/cvmfs"
name: "cvmfs"
description: "The CernVM File System"
url: "https://github.com/cvmfs/cvmfs"
homepage: "http://cernvm.web.cern.ch/fs"
language: "C++"
languages: ["C++", "Shell"]
languagePcts: [62, 27]
stars: 346
forks: 158
openIssues: 269
closedIssues: 375
watchers: 21
contributors: 85
recentReleases: 0
createdAt: "2012-03-21T09:10:41Z"
lastCommitAt: "2026-06-23T06:42:51Z"
lastReleaseAt: "2026-02-12T13:37:03Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 89
undervaluedScore: 39
maintainers: ["vvolkl", "andrey-utkin", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/dcc421947fceccde8735253f5c7af43f9a5b70b52ad408bdedf4641db37bdc32/cvmfs/cvmfs"
---

# CernVM-File System (CernVM-FS)

The CernVM-File System provides a scalable, reliable and low-maintenance
software distribution service. It was developed to assist High Energy Physics
(HEP) collaborations to deploy software on the worldwide-distributed computing
infrastructure used to run data processing applications.
CernVM-FS is implemented as a POSIX read-only file system in user space (a FUSE
module). Files and directories are hosted on standard web servers and mounted
in the universal namespace `/cvmfs`. Internally, CernVM-FS uses
content-addressable storage and Merkle trees in order to maintain file data and
meta-data. CernVM-FS uses outgoing HTTP connections only, thereby it avoids
most of the firewall issues of other network file systems. It transfers data
and meta-data on demand and verifies data integrity by cryptographic hashes.

By means of aggressive caching and reduction of latency, CernVM-FS focuses
specifically on the software use case. Software usually comprises many small
files that are frequently opened and read as a whole. Furthermore, the software
use case includes frequent look-ups for files in multiple directories when
search paths are examined.

Content is…
