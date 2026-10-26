---
repo: "bubbleptr/pinomad"
name: "pinomad"
description: "Coding-first agent product built on Pi Durable: self-hosted host, multi-client UI"
readmeQualityOk: true
url: "https://github.com/bubbleptr/pinomad"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [61]
stars: 35
forks: 1
openIssues: 20
closedIssues: 77
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-10-04T11:46:33Z"
lastCommitAt: "2026-10-26T20:59:47Z"
lastReleaseAt: "2026-10-24T10:07:44Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 96
undervaluedScore: 43
maintainers: ["bubbleptr", "lodyai[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/58f1de9972c4acf4e6dd5ca232796979b39aad4c64b85e4ef2c78313bfd3fb7b/bubbleptr/pinomad"
---

# PiNomad

English · [中文](https://github.com/bubbleptr/pinomad/blob/HEAD/README.zh-CN.md) · [pinomad.si](https://pinomad.si)

A self-hosted coding agent built on [Pi Durable](https://www.npmjs.com/package/@earendil-works/pi-durable). The agent runs on your own machine; the Mac app, the web client, and the iPhone app all attach to the same runs.

- **Your machine does the work.** The host runs on a Mac mini, a Linux box, or a VPS, and the agent uses that machine's shell and repositories.
- **Runs survive crashes and restarts.** Pi Durable checkpoints every model call and tool call, so a restarted host picks up where it stopped.
- **Clients are just windows.** Start a task at your desk, then check on it or steer it from your phone. Devices pair with a one-time QR code and talk to the host over an end-to-end encrypted channel: directly on your LAN or tailnet, or through a relay that only sees ciphertext.

> **Status:** early and moving fast. Pi Durable is itself experimental, and the host and its clients must speak the same protocol major version.

## Quick start

The host needs Node 25+ on macOS or Linux.

```sh
npm i -g pinomad
pinomad host        # data and credentials live in…
