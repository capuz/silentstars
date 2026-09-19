---
repo: "x3me/omacal"
name: "omacal"
description: "Native calendar for Google Calendar, iCloud and any CalDAV server. Born on Omarchy Linux, runs on any Linux and on macOS, with a CLI your agent can use. Tauri, Rust, Svelte."
readmeQualityOk: true
url: "https://github.com/x3me/omacal"
homepage: "https://omacal.app"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [49, 34]
topics: ["arch-linux", "calendar", "google-calendar", "hyprland", "linux", "omarchy", "rust", "svelte", "tauri", "caldav"]
stars: 26
forks: 9
openIssues: 4
closedIssues: 49
watchers: 0
contributors: 9
recentReleases: 10
createdAt: "2026-08-07T07:50:03Z"
lastCommitAt: "2026-09-19T02:48:04Z"
lastReleaseAt: "2026-08-14T18:02:21Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 55
maintainers: ["x3m", "cpbjr", "jondkinney"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1326371998/af8ad84c-75c4-4758-9f90-25bb69aa686c"
---

# OmaCal

**Site, downloads and the CLI guide: [omacal.app](https://omacal.app)**

A native desktop calendar for **Google Calendar, iCloud and any CalDAV
server**. Born on Omarchy Linux; runs on any Linux and on macOS. Tauri v2,
Rust, Svelte 5. **No servers**: your events live in a local database, your
tokens in your keyring, and nothing of yours passes through us.

## Your terminal and your agent read the same calendar

The app binary is also a CLI. Reads come straight off the local database,
offline:

    omacal agenda --json
    omacal events list --from 2026-09-01 --to 2026-09-05 --json
    omacal search quarterly review

Writes (`events create / update / delete / respond`) are carried out by the
running app through the same guards its own form has. The CLI **refuses to
guess** which occurrences of a repeating event you mean, or whether guests
get emailed. Stable JSON envelope, stable exit codes, never prompts.

Wiring an agent is one command, and every update refreshes the installed
skill:

    omacal skill install

The full guide, with real output: [omacal.app/agents](https://omacal.app/agents).

## Built into Omarchy, not just running on it

Colours follow your Omarchy…
