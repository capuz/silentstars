---
repo: "nekonihq/murmur"
name: "murmur"
description: "Turn your phone into an AI agent for your Pi over BLE - no network on the Pi, bring your own LLM key."
readmeQualityOk: true
url: "https://github.com/nekonihq/murmur"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [77, 21]
topics: ["ai-agent", "ble", "bluetooth-low-energy", "claude", "expo", "llm", "python", "raspberry-pi", "react-native", "remote-shell"]
stars: 18
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-06-29T03:36:23Z"
lastCommitAt: "2026-10-24T00:15:05Z"
lastReleaseAt: "2026-09-27T04:03:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 28
maintainers: ["malykhin"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1283570249/0f95bec5-4eb1-41fe-95c2-4c9c83939acb"
discussionCount: 1
---

# murmur

**Talk to your Raspberry Pi. No network required on the Pi — just your phone and Bluetooth.**

murmur turns your phone into an AI agent for a headless Pi: give it a goal in plain English
("what's eating my disk space?", "set up a static IP"), and it plans and runs shell commands
on the Pi for you, showing every command and its output as it goes. It also doubles as a
plain remote terminal when you'd rather drive the shell yourself. Either way, the Pi never
needs internet — it can be fully offline.

- **Agent mode** — a chat UI where an LLM (your choice of Anthropic Claude, OpenAI, Google
  Gemini, or OpenRouter, using **your own API key**) reasons about your goal and drives the
  shell for you, one command at a time. Every command and result is shown inline so you can
  follow — and stop — at any point. Conversations are saved on the phone so you can resume past
  sessions.
- **Shell mode** — a real interactive terminal (xterm.js), for when you just want to type.

Two halves, one wire protocol:

- **`murmurd`** — a Python daemon on the Pi that exposes a shell over a custom BLE GATT
  service. No compilation needed — just BlueZ and a venv.
- **`murmur app`** — a React…
