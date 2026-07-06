---
repo: "Antiz96/manora"
name: "manora"
description: "A simple CLI & TUI tool to display, download and save man pages as PDF files."
readmeQualityOk: true
url: "https://github.com/Antiz96/manora"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
topics: ["man", "manual", "zathura", "manpage", "manpages", "page", "pages", "pdf", "zaman", "cli"]
stars: 16
forks: 1
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2022-08-07T16:47:39Z"
lastCommitAt: "2026-07-06T07:04:23Z"
lastReleaseAt: "2025-01-22T22:58:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 84
undervaluedScore: 56
maintainers: ["Antiz96", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6bb6c3809c2530ccc410cd29798bfade5b918a1acaa467ac24ade666126ffcbc/Antiz96/manora"
fundingLinks: ["GITHUB:https://github.com/Antiz96", "KO_FI:https://ko-fi.com/Antiz96"]
---

# Manora

## Table of contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

## Description

A simple CLI & TUI tool to display, download and save man pages as PDF files.

Run the `manora` command to open a TUI menu (made with [Ratatui](https://ratatui.rs/)) that allows searching through local man pages, downloading man pages from <https://manned.org>, and displaying them as PDF files.

Alternatively, specify the man page to open as an argument (e.g. `manora ls`).
If the specified man page cannot be found locally, Manora offers to download it from <https://manned.org>.

Manora opens man pages in the default PDF reader defined in [XDG MIME Applications](https://wiki.archlinux.org/title/XDG_MIME_Applications), or fallback to [Zathura](https://pwmt.org/projects/zathura/) if no default PDF reader is set.

Manora also have a CLI including multiple options and can be opened from a keybinding.

See the "[Usage](#usage)" chapter and the demo video below for more details:

<https://github.com/user-attachments/assets/b85a7e05-48c5-4a77-9c38-56b1b3ab6ad2>

##…
