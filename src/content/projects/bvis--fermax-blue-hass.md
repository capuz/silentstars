---
repo: "bvis/fermax-blue-hass"
name: "fermax-blue-hass"
description: "Home Assistant HACS integration for Fermax Blue"
readmeQualityOk: true
url: "https://github.com/bvis/fermax-blue-hass"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["doorbell", "fermax", "hacs", "home-assistant", "intercom"]
stars: 26
forks: 9
openIssues: 0
closedIssues: 29
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2026-04-03T14:03:07Z"
lastCommitAt: "2026-10-26T18:06:47Z"
lastReleaseAt: "2026-04-05T22:03:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 48
maintainers: ["bvis", "dependabot[bot]", "RazorMeister"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f1e52acd7445ad06b60035036cee97846de55170efd59caff9155dc29b0d67d/bvis/fermax-blue-hass"
fundingLinks: ["CUSTOM:https://buymeacoffee.com/basiliovera"]
---

# Fermax Blue for Home Assistant

> [!NOTE]
> Live video uses temporary forks of `aiortc` and `pymediasoup` that accept the `av 19` shipped by Home Assistant 2026.10 ([aiortc-fermax](https://github.com/bvis/aiortc/tree/fermax-1.15), [pymediasoup-fermax](https://github.com/bvis/pymediasoup-fermax/tree/fermax-1.5)), until aiortc 1.16.0 is out.

Home Assistant custom integration for **Fermax Blue** video door entry systems (DUOX PLUS / blueStream).

This integration simulates a Fermax Blue mobile app client, connecting to the Fermax cloud API and receiving real-time push notifications via Firebase Cloud Messaging when someone rings your doorbell.

## Features

- **Live video streaming** — Real-time video from the intercom camera (~720x480) with the intercom's audio, over WebRTC in the standard camera cards and the companion apps; MJPEG is still served. Opening the card wakes the intercom, and the card shows the last snapshot with a progress bar until the live picture arrives.
- **Talk-back** — Speak to the visitor from a card that captures the microphone; the first word answers the call (see [Live view and talk-back](#live-view-and-talk-back))
- **Answer from your phone** — A…
