---
repo: "acentrist/MecchaCamouflage"
name: "MecchaCamouflage"
description: "Auto Camouflage Mod for Meccha Chameleon."
url: "https://github.com/acentrist/MecchaCamouflage"
language: "C++"
languages: ["C++"]
languagePcts: [97]
topics: ["game", "meccha-chameleon", "mod"]
stars: 41
forks: 9
openIssues: 9
closedIssues: 19
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-06-20T13:29:17Z"
lastCommitAt: "2026-06-27T00:36:58Z"
lastReleaseAt: "2026-06-25T14:23:28Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 73
undervaluedScore: 41
maintainers: ["acentrist"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1275272453/9feb0278-1883-4180-9546-ac4da81b8bb6"
discussionCount: 0
---

</p>

# Meccha Camouflage

A standalone Windows tool for MECCHA CHAMELEON camouflage experiments.

## Download

Download the latest `meccha-camouflage.exe` from GitHub Releases:

- https://github.com/acentrist/MecchaCamouflage/releases/latest

The EXE is self-contained. it finds the running game process by name.

## Usage

1. Start MECCHA CHAMELEON.
2. Start `meccha-camouflage.exe`.
3. Press `F10` in game.

## Logs

Logs and status files are written under:

```text
%LOCALAPPDATA%\MecchaCamouflage\runtime\
```

Useful files:

- `events.jsonl`: structured runtime events.
- `runtime.log`: plain text runtime log.
- `last_status.json`: latest success or failure summary.
- `.progress.json`: transient bridge progress sidecar used by the controller.

If the game crashes after a MECCHA CHAMELEON update, the tracked SDK may need to be regenerated and reviewed.

## Development

```bash
git clone https://github.com/acentrist/MecchaCamouflage.git
cd MecchaCamouflage
make run
```

## License

This project is licensed under the [MIT License](LICENSE.txt).
