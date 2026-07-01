---
repo: "jnidzwetzki/bboxdb"
name: "bboxdb"
description: "BBoxDB is a scalable, highly available, and distributed data store for multi-dimensional big data. The software supports operations like multi-dimensional range queries and spatial joins. In addition, data streams are supported."
url: "https://github.com/jnidzwetzki/bboxdb"
homepage: "http://bboxdb.org"
language: "Java"
languages: ["Java"]
languagePcts: [98]
topics: ["bigdata", "key-value-database", "multi-dimensional", "storage-engine", "storage-manager", "multidimensional-data", "key-value-store", "sstables", "range-query", "distributed-storage-manager"]
stars: 60
forks: 9
openIssues: 0
closedIssues: 103
watchers: 2
contributors: 3
recentReleases: 1
createdAt: "2015-11-07T10:28:59Z"
lastCommitAt: "2026-07-01T07:06:08Z"
lastReleaseAt: "2026-07-01T06:43:14Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 82
undervaluedScore: 56
maintainers: ["jnidzwetzki", "dependabot[bot]", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/e31526d32c0a70413b42ac027548b095805c1dd904ac43f5b1fc15050a1709a9/jnidzwetzki/bboxdb"
---

</a><a href="https://scan.coverity.com/projects/jnidzwetzki-bboxdb">
       src="https://scan.coverity.com/projects/11479/badge.svg"/>
</a> <a href="https://codecov.io/gh/jnidzwetzki/bboxdb">
</a> <a href="https://gitter.im/bboxdb/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge">
  </a> <a href="https://repo1.maven.org/maven2/org/bboxdb/"><img alt="Maven Central Version" src="https://img.shields.io/maven-central/v/org.bboxdb/bboxdb-server" />
  </a> 

__Please Note:__ The master branch may be in an unstable state during development. Please use our releases for productive environments.

# What is BBoxDB?
BBoxDB is a highly available distributed storage manager designed to handle multi-dimensional big data. In contrast to existing key-value stores, BBoxDB can handle multi-dimensional efficiently. Existing key-value stores are using one-dimensional keys to address the values. Finding a proper key for multi-dimensional data is challenging and often impossible; this is especially true when the data has an extent (non-point data / regions). To retrieve multi-dimensional data from a key-value store, a full data scan is often required. BBoxDB was developed…
