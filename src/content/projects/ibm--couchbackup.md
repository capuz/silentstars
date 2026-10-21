---
repo: "IBM/couchbackup"
name: "couchbackup"
description: "Cloudant backup and restore library and command-line utility"
readmeQualityOk: true
url: "https://github.com/IBM/couchbackup"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 91
forks: 27
openIssues: 5
closedIssues: 172
watchers: 60
contributors: 25
recentReleases: 0
createdAt: "2017-04-11T08:55:36Z"
lastCommitAt: "2026-10-21T08:48:55Z"
lastReleaseAt: "2019-10-24T11:38:46Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 45
maintainers: ["dependabot[bot]", "ricellis", "veronika-alraheem"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c92e0ba06c40fc656629289e9c73787e7902d4d3b66254a1089d8693eae9429/IBM/couchbackup"
---

# CouchBackup

```
 _____                  _    ______            _
/  __ \                | |   | ___ \          | |
| /  \/ ___  _   _  ___| |__ | |_/ / __ _  ___| | ___   _ _ __
| |    / _ \| | | |/ __| '_ \| ___ \/ _` |/ __| |/ / | | | '_ \
| \__/\ (_) | |_| | (__| | | | |_/ / (_| | (__|   <| |_| | |_) |
 \____/\___/ \__,_|\___|_| |_\____/ \__,_|\___|_|\_\\__,_| .__/
                                                         | |
                                                         |_|
```

CouchBackup is a command-line utility that backs up a Cloudant or CouchDB database to a text file.
It comes with a companion command-line utility that can restore the backed up data.

## Limitations

CouchBackup has some restrictions in the data it's able to backup:

* **`couchbackup` does not do CouchDB replication as such, it simply streams through a database's `_changes` feed, and uses `POST /db/_bulk_get` to fetch the documents, storing the documents it finds on disk.**
* **`couchbackup` does not support backing up or restoring databases containing documents with attachments. The recommendation is to store attachments directly in an object store. The "attachments" option is provided…
