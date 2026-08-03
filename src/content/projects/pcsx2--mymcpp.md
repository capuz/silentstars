---
repo: "PCSX2/myMCpp"
name: "myMCpp"
description: "Open-source PlayStation 2 memory card manager and save editor"
readmeQualityOk: true
url: "https://github.com/PCSX2/myMCpp"
homepage: "https://pcsx2.net"
language: "C++"
languages: ["C++"]
languagePcts: [89]
topics: ["cpp", "memory-card", "playstation", "playstation-2", "ps2", "sony"]
stars: 38
forks: 5
openIssues: 4
closedIssues: 18
watchers: 5
contributors: 27
recentReleases: 0
createdAt: "2025-12-19T05:15:51Z"
lastCommitAt: "2026-08-03T06:44:21Z"
lastReleaseAt: "2026-04-26T09:18:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 94
undervaluedScore: 44
maintainers: ["SternXD", "dependabot[bot]", "chaoticgd"]
openGraphImageUrl: "https://opengraph.githubassets.com/43359e4368f9701d4463862b34cddb4fbbdf7310e73fec749eada82a93532eee/PCSX2/myMCpp"
fundingLinks: ["GITHUB:https://github.com/SternXD", "PATREON:https://patreon.com/SternXD", "KO_FI:https://ko-fi.com/stern"]
discussionCount: 1
---

</p>

<h1 align="center">myMCpp</h1>

	</a>
</p>

	<code>myMCpp</code> is a PlayStation 2 memory card manager for <code>.ps2</code>, <code>.mc2</code>, <code>.mcd</code>, <code>.vm2</code>, and raw VMC files.
</p>

	This project is in <strong>alpha</strong>. It is <strong>experimental</strong>, <strong>unstable</strong>, and <strong>not intended for production or general use</strong>. Interfaces and behavior may change at any time.
</p>

	The project is a full C++ rewrite of the original Python based mymc++, with a Qt GUI and CLI.
</p>

## Usage

### GUI 

Just run `myMCpp` without arguments or double click it to launch the GUI. You can open memory card images, view and manage saves, and export/import files.

### CLI

```zsh
myMCpp [options] memcard.ps2 command [...]
```

Example:

```zsh
myMCpp -i new_card.ps2 format
```

Commands:
- `format`: Create a new memory card image.
- `dir`: List files with details.
- `ls`: List directory contents.
- `export`: Export saves from the card.
- `import`: Import saves to the card.
- `add`: Add files to the card.
- `extract`: Extract specific files.
- `delete` / `remove`: Delete files or directories.
- `mkdir`: Create a directory.
- `df`: Show…
