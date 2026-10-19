---
repo: "stadia/cachy-omarchy-overlay"
name: "cachy-omarchy-overlay"
description: "Hyprland + Quickshell overlay on CachyOS — launcher, command menu, and keybinding viewer (based on upstream omarchy)"
originalDescription: "CachyOS 위 Hyprland + Quickshell 오버레이 — 런처·커맨드 메뉴·키바인딩 뷰어 (upstream omarchy 기반)"
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/stadia/cachy-omarchy-overlay"
language: "Shell"
languages: ["Shell"]
languagePcts: [87]
stars: 6
forks: 0
openIssues: 1
closedIssues: 5
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-08-17T22:24:32Z"
lastCommitAt: "2026-10-19T09:14:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 51
maintainers: ["stadia"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a7fe308cdad94366b8e329a1d5771aa5cf63f16fa55f0b7e445698e29786c3e/stadia/cachy-omarchy-overlay"
---

# Cachy Omarchy Overlay

*[Korean README](https://github.com/stadia/cachy-omarchy-overlay/blob/HEAD/README.ko-KR.md)*

An Arch package overlay that runs the [Omarchy](https://github.com/basecamp/omarchy)
Quattro shell **as upstream ships it** on CachyOS + Hyprland.

It does not reimplement the launcher. It pins the official Omarchy repository to a
specific commit, extracts and packages only the runtime it needs, and patches only
where a patch is unavoidable (SPEC §1).

```text
SUPER + SPACE  →  Omarchy Quattro launcher / menu
SUPER + K      →  Omarchy-style keybinding viewer
```

## Components

Two Arch packages are produced.

| Package | Version | Role |
|---|---|---|
| `cachy-omarchy-shell` | 4.0.4-7 | The pinned Omarchy Quattro shell runtime (Quickshell tree, `omarchy-settings` excluded) |
| `cachy-omarchy-overlay` | 1.0.2-5 | The CachyOS integration layer (wrapper commands, Hyprland bindings, defaults) |

The upstream pin is managed by `upstream.lock` (currently `basecamp/omarchy @ v4.0.4`,
`c668141`).

Six public commands are installed into `/usr/bin`:

- `cachy-omarchy-shell` — lock-aware manual restart (`--restart`); startup is upstream `omarchy-launch-shell` and IPC is…
