---
repo: "selfpatch/ros2_medkit_web_ui"
name: "ros2_medkit_web_ui"
description: "SOVD Web UI for ros2_medkit . Explore discovery and entity hierarchies via a simple SPA."
readmeQualityOk: true
url: "https://github.com/selfpatch/ros2_medkit_web_ui"
homepage: "https://selfpatch.github.io/ros2_medkit/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["diagnostics", "react", "sovd", "typescript", "vite", "ros2-medkit", "tailwindcss", "rest-api", "robotics", "ros2"]
stars: 9
forks: 2
openIssues: 16
closedIssues: 40
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2025-11-27T20:28:45Z"
lastCommitAt: "2026-09-01T08:43:22Z"
lastReleaseAt: "2026-06-11T18:10:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 37
maintainers: ["bburda", "heapghost96", "mfaferek93"]
openGraphImageUrl: "https://opengraph.githubassets.com/474dea800a8237191886877f34d97e2c4a870b13117e6a142107ab3b02229627/selfpatch/ros2_medkit_web_ui"
---

# ros2_medkit_web_ui

Simple, open-source web UI for browsing SOVD (Service-Oriented Vehicle Diagnostics) entity trees via discovery endpoints.

## What is ros2_medkit_web_ui?

ros2_medkit_web_ui is a lightweight single-page application that connects to a SOVD server and visualizes the entity hierarchy. It provides:

- **Server Connection Dialog** - Enter the URL of your SOVD server (supports both `http://ip:port` and `ip:port` formats)
- **Entity Tree Sidebar** - Browse the hierarchical structure of SOVD entities with lazy-loading, with a readiness lamp on app and component nodes (a green disc for ready, an amber ring for not ready, a grey square for a readiness the UI has not established). The lamp is re-read while the branch is open, so it tracks an entity that stops or comes back
- **Entity Detail Panel** - View raw JSON details of any selected entity
- **Entity Lifecycle Status Control** - View readiness and request lifecycle transitions (start, restart, force-restart, shutdown, force-shutdown) for apps and components, degrading gracefully on an entity with no lifecycle provider, without taking the entities that have one with it. Actions are gated by the current status (a…
