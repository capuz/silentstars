---
repo: "bilias/rqwatch"
name: "rqwatch"
description: "Rqwatch is a quarantine and map management system for Rspamd, written in PHP"
readmeQualityOk: true
url: "https://github.com/bilias/rqwatch"
language: "PHP"
languages: ["PHP"]
languagePcts: [85]
topics: ["quarantine", "rspamd", "anti-spam"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 14
watchers: 2
contributors: 1
recentReleases: 4
createdAt: "2025-10-17T07:04:42Z"
lastCommitAt: "2026-10-27T12:40:07Z"
lastReleaseAt: "2026-09-14T11:10:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 84
maintainers: ["bilias"]
openGraphImageUrl: "https://opengraph.githubassets.com/90b52c9705f1379268f04e97cf659ccc66b09ceaad3602243b52bb03d2564f55/bilias/rqwatch"
---

# Rqwatch

**Rqwatch** is a quarantine and map management system for [Rspamd](https://rspamd.com),
written in PHP.

It provides an intuitive web interface to monitor all incoming emails passing through your
mail gateway, accessible to both administrators and recipient users.

An API is available to insert data from Rspamd. This API is used by the Rspamd
[Metadata Exporter](https://docs.rspamd.com/modules/metadata_exporter) plugin to
export raw emails and Rspamd headers and symbols and store that metadata in a database.

Depending on the action taken by Rspamd and the configuration, raw emails can also
be saved in local quarantine storage to be examined and released by administrators
or recipient users, if desired.  This is particularly useful for rejected or discarded
emails, which in a default Rspamd setup would be lost, leaving the recipient unaware of them.

Additionally, an administrator can monitor all email traffic and the information
provided by Rqwatch, taking appropriate actions to improve Anti-Spam and Anti-Virus control
and minimize false positives and false negatives.

Apart from monitoring, this system can also be used as a complete map
management and distribution…
