---
repo: "rahmanef63/control-room"
name: "control-room"
description: "terminals vps for vibe coders, tmux alternative"
url: "https://github.com/rahmanef63/control-room"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [68]
stars: 19
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-20T14:25:48Z"
lastCommitAt: "2026-06-23T23:29:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 40
maintainers: ["rahmanef63", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b7ce947bc699903ac903962c966d698f0d5a7847cf6cbe982812e883c5cc89d/rahmanef63/control-room"
---

# VPS Control Room — v2.0

A mobile-first PWA dashboard for driving a single VPS through a web browser:
multi-pane terminals (up to 16 concurrent ptys), AI agent launchers, host
ops, and audit — all behind a single shared secret and a Tailscale-only
domain.

</p>

> **What's new in v2.0**: single-kebab pane header, per-terminal skills
> (project + global), Move-to-workspace, 4-step zoom, heartbeat
> outer-glow + voice alerts with test buttons, cross-browser workspace
> sync via agent-side JSON, exact 2-row desktop grid, two-row mobile
> soft keyboard with prominent Tab, plus local laptop install via `vps-cr`.

## Capabilities at a glance

| Terminals | AI agents | Host ops | Mobile |
|:---:|:---:|:---:|:---:|
| 16 ptys, reconnect buffers, broadcast input | Claude / Codex / Gemini / OpenClaw launchers with regular or bypass modes | Agent-owned systemd, Docker, journal, telemetry and file APIs | PWA layout, soft keyboard with Tab, one-column portrait mode |

This is intentionally not a public SaaS or remote-desktop replacement. It is a
single-owner control surface: the browser sees a safe web UI, while the local
agent owns host access and validates commands through the allowlist.…
