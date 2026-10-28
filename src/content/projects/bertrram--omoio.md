---
repo: "Bertrram/omoio"
name: "omoio"
description: "A game library for Windows that sets up and runs your PS3 and Wii U games through RPCS3 and Cemu, with a Skylanders portal menu"
readmeQualityOk: true
url: "https://github.com/Bertrram/omoio"
homepage: "https://omoio.app"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [72, 20]
topics: ["big-picture", "cemu", "emulator-frontend", "game-library", "ps3", "rpcs3", "skylanders", "tauri", "wii-u", "windows"]
stars: 17
forks: 4
openIssues: 4
closedIssues: 4
watchers: 4
contributors: 2
recentReleases: 10
createdAt: "2026-08-30T18:18:03Z"
lastCommitAt: "2026-10-28T09:57:22Z"
lastReleaseAt: "2026-10-10T00:33:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 50
maintainers: ["Bertrram"]
openGraphImageUrl: "https://opengraph.githubassets.com/4bb513ee17d8117057c0de3a29665bfe2a17fba1de02ace0d2b37a0aacbd6fef/Bertrram/omoio"
discussionCount: 1
---

Omoio is a game library for Windows. You import the dumps of games you own
and press Play. Omoio installs the emulator and sets up your controller, then
starts the game in its own window. It's made for big collections spread across
systems, the kind that sits on a few drives in a home lab.

Omoio is in very early development. PS3 games run through RPCS3, Wii U games
through Cemu, and Wii and GameCube games through Dolphin. More systems are
planned. Things will break, and feedback is really appreciated, so open an
issue.

## What you get

- One library for every system. Import a folder, a zip or 7z file, or scan a
  whole drive at once.
- Games run inside Omoio's window, fullscreen with F11, and you never see the
  emulator.
- RPCS3, Cemu and Dolphin installed for you. RPCS3 is kept up to date, and
  Dolphin is updated to the newest version Omoio has been tested with. Cemu is
  Omoio's own build of Cemu 2.6, which adds a portal server for the Skylanders
  portal menu and plays Trap Team's portal speaker.
- One controller layout for every emulator, set by pressing the buttons, for up
  to four players.
- Keyboard and mouse for any player, on every system. W A S D move, the mouse…
