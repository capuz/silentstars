---
repo: "alexeygrigorev/pocketshell"
name: "pocketshell"
description: "Voice-first, tmux-native, agent-aware Android SSH client (conceptual planning stage)"
url: "https://github.com/alexeygrigorev/pocketshell"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [86]
stars: 13
forks: 0
openIssues: 16
closedIssues: 888
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-05-21T04:30:21Z"
lastCommitAt: "2026-06-25T01:39:24Z"
lastReleaseAt: "2026-05-27T06:11:15Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "under_pressure"]
healthScore: 95
undervaluedScore: 54
maintainers: ["alexeygrigorev"]
openGraphImageUrl: "https://opengraph.githubassets.com/40b4553f54e2d9e14b26e2d5a09cc511c9ed77c11858919e5a009f2142c8d1dd/alexeygrigorev/pocketshell"
---

# PocketShell

PocketShell is a voice-first, tmux-native, agent-aware Android SSH client. It
connects your phone to the developer workstation you already use over SSH,
attaches to your **tmux** sessions in control mode, and gives you a phone-shaped
way to drive shells and AI coding agents (Claude Code, Codex, OpenCode) without
typing everything by hand.

It is built for one job: keep working on your dev box from your phone. Long-lived
state lives on the dev box in tmux and a small server-side `pocketshell` helper;
the app reconnects when you bring it back to the foreground.

## What it does

- **tmux-native sessions.** Attaches with `tmux -CC` control mode and renders one
  pane at a time in a real terminal emulator, instead of trying to read a tiled
  tmux layout on a small screen. Swipe/navigation controls move between panes.
- **Agent awareness.** Detects Claude Code, Codex, and OpenCode running in the
  visible tmux pane and shows a clean Conversation view of that agent's turns,
  tool calls, and output, with a reply composer that sends back into the pane.
- **Voice-first input.** A composer with OpenAI Whisper and the Android speech
  recognizer turns dictation into commands…
