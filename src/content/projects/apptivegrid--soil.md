---
repo: "ApptiveGrid/Soil"
name: "Soil"
description: "An object oriented database that is easy to use and fun to play with"
readmeQualityOk: true
url: "https://github.com/ApptiveGrid/Soil"
language: "Smalltalk"
languages: ["Smalltalk"]
languagePcts: [100]
topics: ["pharo", "database", "oop"]
stars: 66
forks: 13
openIssues: 36
closedIssues: 312
watchers: 8
contributors: 9
recentReleases: 0
createdAt: "2022-08-08T15:50:39Z"
lastCommitAt: "2026-08-28T14:32:57Z"
lastReleaseAt: "2024-04-26T09:13:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 50
maintainers: ["noha", "MarcusDenker", "AndrzejProchyra"]
openGraphImageUrl: "https://opengraph.githubassets.com/a54f6dea29e6b3a496e1f8f6b44c6b9d28cc0c965032e32705bc3ad513e472a2/ApptiveGrid/Soil"
---

# Soil

Soil is an object oriented database in [pharo](http://pharo.org). It is transaction based having ACID transactions. It has binary search capabilities with SkipList and BTree+ indexes. It aims to be a simple yet powerful database making it easy to develop with, easy to debug with, easy to inspect, ... 

To read more please have a look at the [documentation](https://github.com/ApptiveGrid/Soil/blob/HEAD/docs/soil.md), to learn about Soil internals, follow the [Soil Blog Series](https://norbert.hartl.name/blog/series/soil.html) 

## Loading

Load it in 64bit Pharo 11/12/13/alpha with Metacello:

```smalltalk
Metacello new 
	repository: 'github://ApptiveGrid/Soil:main/src';
	baseline: 'Soil';
	load.
```
Note: For now, Windows is not supported. Work on this is ongoing (see [PR #980](https://github.com/ApptiveGrid/Soil/pull/980)) and it is planned for an upcoming release

**caution** Soil is in an early stage meaning there are might be things missing. It is battle tested as it is the driving database behind [ApptiveGrid](http://www.apptivegrid.de) but you might have different requirements. If so, tell us!

## Latest release

The latest release is…
