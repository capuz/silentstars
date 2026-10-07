---
repo: "Iranman/beets-web-manager"
name: "beets-web-manager"
description: "Self-hosted Beets music library manager with import review, playlist repair, cleanup jobs, and metadata verification."
readmeQualityOk: true
url: "https://github.com/Iranman/beets-web-manager"
language: "Python"
languages: ["Python"]
languagePcts: [80]
stars: 12
forks: 0
openIssues: 17
closedIssues: 20
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-07-16T20:33:50Z"
lastCommitAt: "2026-10-07T10:30:50Z"
lastReleaseAt: "2026-09-17T15:11:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 90
undervaluedScore: 48
maintainers: ["Iranman", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/62a190042c0690ef0cab358fdc1a666ed18fec2cecb891c13cfcd9f1569eb614/Iranman/beets-web-manager"
---

# Beets Web Manager

Beets Web Manager is a self-hosted web application for managing a Beets music library, import review, playlist repair, acquisition queues, cleanup jobs, metadata verification, and media-server synchronization from one operator-focused interface.

The app is designed for local or self-hosted deployments where the music library, download staging folders, Beets database, Plex, downloader services, MusicBrainz, AcoustID, and optional AI providers are controlled by the administrator.

This project exists because the Beets web plugin didn't cover enough on its own: a full UI, import review, playlist repair, acquisition queues, cleanup jobs, and metadata verification on top of Beets. Issues and improvement suggestions are welcome.

## Features

- Flask web manager that talks to a standard stock `lscr.io/linuxserver/beets` container over HTTP via its `web` plugin (reads) and a bundled `webmanager` integration plugin (authenticated mutations) — Beets Web Manager has no Beets runtime of its own.
- React and Next.js static frontend served by the backend.
- Import review queue with evidence-driven accept, reject, and cleanup actions.
- Playlist ingestion from files, URLs,…
