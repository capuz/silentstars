---
repo: "ModioStudio/MiniFy"
name: "MiniFy"
description: "MiniFy is an enhanced Spotify mini player"
url: "https://github.com/ModioStudio/MiniFy"
homepage: "https://minify.modio.studio"
language: "TypeScript"
languages: ["TypeScript", "MDX"]
languagePcts: [65, 25]
topics: ["beatiful-ui", "nextjs", "shadcn-ui", "spotify", "spotify-api", "spotify-mini-player", "tauri", "ai", "mcp"]
stars: 5
forks: 1
openIssues: 3
closedIssues: 19
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-10-28T20:57:26Z"
lastCommitAt: "2026-07-04T19:19:23Z"
lastReleaseAt: "2026-01-21T13:13:46Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 41
maintainers: ["Skeptic-systems", "J4ron", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c44897619f5d62a65e8e4716f3e6f93fe29bd0f6c6e0f7ab20060abba102fab7/ModioStudio/MiniFy"
discussionCount: 0
---

<h1>MiniFy</h1>
  <p>A lightweight desktop mini player for Spotify, built with Tauri, React, and Rust.</p>
  <p>
    ·
    ·
  </p>
  <p>
  </p>
</div>

## Overview

MiniFy is a compact Spotify companion for the desktop. It runs as a native
Tauri app, shows the current track in small always-available layouts, and keeps
playback controls, settings, themes, and AI-assisted recommendations close at
hand.

The repository also contains the public website and documentation site.

## Features

- Spotify OAuth PKCE login with automatic token refresh
- Secure OS keyring storage for Spotify tokens and AI provider keys
- Compact player layouts with playback controls, progress, and track metadata
- Built-in themes plus a JSON-based Theme Studio for custom themes
- AI DJ chat for recommendations and playback-aware music prompts
- Provider settings for Spotify, YouTube Music, and AI services
- Native desktop shell powered by Tauri and Rust

## Architecture

- `apps/desktop`: Tauri 2 desktop app with React, Vite, Tailwind CSS, and Rust.
- `apps/www`: Next.js site for the project website and downloads.
- `apps/docs`: Astro Starlight documentation site.
- Rust commands handle OAuth, local callback…
