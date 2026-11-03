---
repo: "0cv/herdr-mobile-relay"
name: "herdr-mobile-relay"
description: "Approve and monitor Herdr agents remotely from your phone, a mobile web app for Android/iOS smartphones with push notifications, QR setup, and multi-computer relays over Cloudflare, WebRTC or Tailscale connections."
readmeQualityOk: true
url: "https://github.com/0cv/herdr-mobile-relay"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [48, 40]
topics: ["approvals", "cloudflare", "herdr-plugin", "mobile", "multi-machine", "relay", "android", "ios", "monitoring", "notifications"]
stars: 347
forks: 46
openIssues: 3
closedIssues: 26
watchers: 2
contributors: 16
recentReleases: 0
createdAt: "2026-07-03T11:41:38Z"
lastCommitAt: "2026-11-03T19:05:21Z"
lastReleaseAt: "2026-07-28T19:33:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 26
maintainers: ["0cv", "laidick"]
openGraphImageUrl: "https://opengraph.githubassets.com/4429b1c3dceb6871ae9e50073d19f226510df7aae7795c334ed71304f5d926ee/0cv/herdr-mobile-relay"
---

# Herdr Mobile Relay

Control [Herdr](https://herdr.dev) agents from your phone. Each Linux or macOS
computer runs its own relay; the phone connects to them and merges every agent
into one installable web app.

**Current version:** [`0.24.0`](https://github.com/0cv/herdr-mobile-relay/releases/tag/v0.24.0) · [Changelog](https://github.com/0cv/herdr-mobile-relay/blob/HEAD/CHANGELOG.md)

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
