---
repo: "utrad-ical/circus"
name: "circus"
description: "The monorepo for CIRCUS projects"
readmeQualityOk: true
url: "https://github.com/utrad-ical/circus"
homepage: "https://circus-project.net/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["circus-cs", "circus-db"]
stars: 6
forks: 4
openIssues: 59
closedIssues: 92
watchers: 3
contributors: 10
recentReleases: 0
createdAt: "2020-04-30T04:00:45Z"
lastCommitAt: "2026-11-11T19:47:56Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 92
undervaluedScore: 83
maintainers: ["smikitky"]
openGraphImageUrl: "https://opengraph.githubassets.com/86057accebe264d88bd11b70261fd6111f18cc860486e7f9c3c161a6f5bbf412/utrad-ical/circus"
discussionCount: 0
---

# CIRCUS

This is a monorepo that contains all CIRCUS projects.

- **circus-api**: JSON-based REST API server
- **circus-web-ui**: Front-end code for CIRCUS web UI
- **circus-rs**: Web-based DICOM viewer with 3D annotation capability
- **circus-cs-core**: Includes job manager daemon and CS related code
- **circus-icons**: Icons used by CIRCUS projects
- **circus-ui-kit**: Includes React-bindings of CIRCUS RS and displays for CS results display
- **circus-lib**: Code shared among the above projects

## Install

The easiest way to get CIRCUS working is to use Docker Compose.
CIRCUS consists of the following containers:

| Service | Image                           | Description                                              |
| ------- | ------------------------------- | -------------------------------------------------------- |
| `mongo` | `mongo:9.0`                     | MongoDB (replica set `rs0`)                              |
| `api`   | `ghcr.io/utrad-ical/circus-api` | API server, CIRCUS RS, and CS job manager                |
| `web`   | `ghcr.io/utrad-ical/circus-web` | Web UI served by Caddy, proxying `/api`, `/login`, `/rs` |

Each service belongs to a profile of the same…
