---
repo: "0cv/herdr-mobile-relay"
name: "herdr-mobile-relay"
description: "Approve and monitor Herdr agents remotely from your phone, a mobile web app for Android/iOS smartphones with push notifications, QR setup, and multi-computer relays."
readmeQualityOk: true
url: "https://github.com/0cv/herdr-mobile-relay"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [54, 31]
topics: ["approvals", "cloudflare", "herdr-plugin", "mobile", "multi-machine", "relay", "android", "ios", "monitoring", "notifications"]
stars: 308
forks: 42
openIssues: 4
closedIssues: 25
watchers: 3
contributors: 18
recentReleases: 7
createdAt: "2026-07-03T11:41:38Z"
lastCommitAt: "2026-10-23T08:46:53Z"
lastReleaseAt: "2026-07-28T19:33:42Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 94
undervaluedScore: 30
maintainers: ["0cv", "jfugalde", "evnchn"]
openGraphImageUrl: "https://opengraph.githubassets.com/48eeb7509a259f21a48b02f0a5ebbc8aa19a0e1eca27335cd17d1d9340b2f3d0/0cv/herdr-mobile-relay"
---

# Herdr Mobile Relay

Control [Herdr](https://herdr.dev) agents from your phone. Each Linux or macOS
computer runs its own relay; the phone connects to them and merges every agent
into one installable web app.

**Current version:** [`0.22.11`](https://github.com/0cv/herdr-mobile-relay/releases/tag/v0.22.11) · [Changelog](https://github.com/0cv/herdr-mobile-relay/blob/HEAD/CHANGELOG.md)

> [!IMPORTANT]
> Native Windows is not supported. WSL2 may work but is not tested.

> [!WARNING]
> 0.20.0 replaces the shared relay key with per-device credentials and a new
> encrypted transport. It cannot be installed through the phone updater:
> [upgrade the relay manually and pair every phone again](https://github.com/0cv/herdr-mobile-relay/blob/HEAD/docs/updates.md#upgrading-from-v0191).

## Get started in two minutes

Requirements: Herdr 0.7.5 or newer, Git, and `curl`. Herdr 0.9.0 is
recommended for the complete live JSON inventory and workspace-management
surface; the relay does not treat that recommendation as a new minimum.

The relay reports the installed Herdr client version separately from the
running local server version and protocol. A server upgrade can enable or
disable individual…
