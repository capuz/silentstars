---
repo: "JerryI/fcks"
name: "fcks"
description: "fcks - F@cking Sync  // An experimental, simple, no-frills command-line WebDAV sync client written in plain JavaScript (Bun) with support for virtual folders."
readmeQualityOk: true
url: "https://github.com/JerryI/fcks"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 99
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-10-07T20:44:36Z"
lastCommitAt: "2026-10-09T18:56:19Z"
lastReleaseAt: "2026-10-09T18:56:40Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 16
maintainers: ["JerryI"]
openGraphImageUrl: "https://opengraph.githubassets.com/f4f86d2781d3b6511c57160bcf3d59a3a046e5c17c41acee271f1d74b0cbb6af/JerryI/fcks"
---

# fcks - F@cking Sync

An experimental, simple, no-frills command-line WebDAV sync client written in plain JavaScript (Bun) with support for virtual folders

```
LOCAL ROOT                                  DAV ROOT
/my/files                                   /remote/files
    |                                             |
    +---- docs/report.pdf <== same path ==> docs/report.pdf
    +---- photos/cat.jpg   <== same path ==> photos/cat.jpg
    |                                             |
    +---------------- SCAN BOTH ------------------+

      fcks push     = remote should look like local
      fcks pull     = local should look like remote
      fcks merge    = keep both sides; newest changed file wins
      fcks scaffold = copy remote folder structure, without files
      fcks free     = delete local files, but keep folders
      fcks rm       = delete a path locally and remotely
```

Features:

- No temporary files, no database
- Stateless
- Limited set of commands
- Virtual-folders (scaffold)
- Mirrors folder tree
- Download, upload, free up folders and any subfolders

This project was born out of deep frustration with OneDrive and Nextcloud sync issues on macOS.…
