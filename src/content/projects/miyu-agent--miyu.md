---
repo: "miyu-agent/miyu"
name: "miyu"
description: "Miyu is an AI assistant."
originalDescription: "Miyu是一个Ai助手。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/miyu-agent/miyu"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2026-09-25T18:33:56Z"
lastCommitAt: "2026-10-26T02:29:47Z"
lastReleaseAt: "2026-10-24T17:03:50Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 51
maintainers: ["SHORiN-KiWATA", "shorinkiwata"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d052c8dea670433901bf585b88e75f69d55db47b46b284081dc6980458c92e8/miyu-agent/miyu"
---

# Miyu

Miyu is an AI assistant that runs on your own computer. It can be used for writing code and getting work done, as well as for chatting and role-play. It supports Linux, macOS, and Windows.

It consists of a headless core and several swappable "heads": a terminal interface, a web page, a command line, seamless terminal integration, and communication platforms such as QQ. The core is designed after Linux: the kernel provides only mechanisms, and policies are data. All state is a projection of the event log. Model drivers, tools, and extensions are modules registered with the kernel.

> This is a ground-up rewrite. It is under construction and not yet usable.

## Documentation

- `docs/designs/`: design documents. Read them in numerical order, starting with `00-设计理念.md`.
- `docs/construction/`: construction plans, and a work order for each step.

## License

The core (the code and resources written in this repository itself) is licensed under AGPL-3.0-or-later. See `LICENSE`. If you modify Miyu and provide it to others, including only by offering it as a network service, you must make the modified source code available to the people using it.

The following parts, which are…
