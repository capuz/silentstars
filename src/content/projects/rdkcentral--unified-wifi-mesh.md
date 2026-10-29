---
repo: "rdkcentral/unified-wifi-mesh"
name: "unified-wifi-mesh"
description: "Easy Mesh based agent and controller that provides easymesh release-5 based features"
readmeQualityOk: true
url: "https://github.com/rdkcentral/unified-wifi-mesh"
language: "C++"
languages: ["C++"]
languagePcts: [92]
stars: 15
forks: 90
openIssues: 4
closedIssues: 11
watchers: 4
contributors: 69
recentReleases: 1
createdAt: "2024-04-17T15:01:26Z"
lastCommitAt: "2026-10-29T14:06:27Z"
lastReleaseAt: "2026-08-19T18:20:58Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 77
maintainers: ["dkyncu", "Yashu37", "vlad-safonov"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4058b78479301072f8f9d23bd2d7cdbc076393b8547fe304a48696da3842993/rdkcentral/unified-wifi-mesh"
---

# Unified WiFi Mesh

The database backend is SQLite3. The default database file is
`/var/lib/unified-wifi-mesh/unified_wifi_mesh.db`; it is created and initialized
on first startup. Pass a different SQLite file path as the controller database
argument when required.

Build systems require the SQLite3 development package (`libsqlite3-dev` on
Debian/Ubuntu) and `pkg-config`. MariaDB is not required. See
`docs/sqlite3_migration.md` for migrating an existing MariaDB database.

The documentation is available in Unified-Wifi-Mesh file under docs directory
