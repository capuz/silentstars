---
repo: "Denrox/ui-apt-mirror"
name: "ui-apt-mirror"
description: "A containerized APT mirror solution with a web interface. This project provides a complete local Ubuntu / Debian package repository with an admin panel, npm caching proxy with web ui, and file hosting capabilities."
url: "https://github.com/Denrox/ui-apt-mirror"
homepage: "https://ui-apt-mirror.dbashkatov.com/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
topics: ["apt-mirror", "file-manager", "apt-mirror2"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-06-29T10:57:21Z"
lastCommitAt: "2026-06-26T06:46:58Z"
lastReleaseAt: "2025-08-07T07:34:44Z"
status: "thriving"
tags: []
healthScore: 83
undervaluedScore: 48
maintainers: ["Denrox"]
openGraphImageUrl: "https://opengraph.githubassets.com/e7eec4cc91448e1098435b6be897411c10ee999c1a1c9f38961bf9148d692bac/Denrox/ui-apt-mirror"
---

# UI APT Mirror

A containerized APT mirror solution with a web interface. This project provides a complete local Ubuntu / Debian package repository with an admin panel, file hosting capabilities, optional npm package caching, and developer cheatsheets. Perfect for organizations that need to work in a totally offline environment while maintaining access to essential development resources.

## Features

- **APT Mirror**: Local Ubuntu package repository with automatic synchronization using apt-mirror2 (Python/asyncio version) from PyPI
- **GPG Signing**: Optional per-host signing keys generated via the admin panel — re-signs `Release` files so clients can verify the mirror with a real key instead of relying on `[trusted=yes]`. Sources.list snippets in the admin UI auto-include the correct `signed-by` / `Signed-By` directive when a key is present.
- **NPM Proxy**: Optional local npm package registry cache for faster npm installs and reduced bandwidth usage
- **Developer Cheatsheets**: Built-in command reference with tldr-pages integration for offline access to programming and system administration guides
- **Web Interface**: web UI for all services
- **Multi-Host Setup**: Five…
