---
repo: "OpenCoven/coven-cave"
name: "coven-cave"
description: "Cave is the native workspace for OpenCoven — a place to talk to your familiars, watch their tools, inspect their memory, and follow the work they're doing across sessions.  A familiar isn't a chat window. It has a name, a purpose, a memory, a toolset, and, now, a home."
url: "https://github.com/OpenCoven/coven-cave"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [80]
stars: 14
forks: 8
openIssues: 0
closedIssues: 48
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-05-30T14:44:50Z"
lastCommitAt: "2026-07-02T06:33:02Z"
lastReleaseAt: "2026-05-31T23:42:51Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 100
undervaluedScore: 63
maintainers: ["BunsDev"]
openGraphImageUrl: "https://opengraph.githubassets.com/19d39ec94ce3c5c6268483694f98f55aa37bfefc68ab108c206da8b8716e4b8b/OpenCoven/coven-cave"
---

# Coven Cave

Coven Cave is the desktop control room for OpenCoven familiars, workflows,
memory, local agent sessions, GitHub triage, calendars, libraries, and mobile
handoff.

It is a Next.js + React app packaged with Tauri for desktop, with a native iOS
client under `apps/ios/CovenCave`.

## Get Coven Cave

Download the latest desktop build from:

https://github.com/OpenCoven/coven-cave/releases/latest

Release assets usually include macOS, Windows, and Linux builds plus update
metadata and checksums.

## What it does

- Chat with OpenCoven familiars and route work through local agent sessions.
- Track tasks on the Board and Gantt surfaces, including bulk edits and undo.
- Browse project sessions, local libraries, reminders, calendars, workflows,
  marketplace packages, and GitHub activity.
- Launch desktop-local terminal and browser surfaces through the Cave sidecar.
- Hand off the app to a phone over Tailscale or run the native iOS client.

## Development

### Requirements

- Node.js 22+
- pnpm 10+
- Rust and Cargo
- Tauri desktop prerequisites for your platform
- Xcode + XcodeGen for iOS work

Install dependencies:

```bash
pnpm install
```

Run the web app with the custom…
