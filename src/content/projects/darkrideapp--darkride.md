---
repo: "DarkRideApp/DarkRide"
name: "DarkRide"
description: "AI-powered mobile application reverse engineering and network traffic analysis toolkit"
readmeQualityOk: true
url: "https://github.com/DarkRideApp/DarkRide"
homepage: "https://darkride.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["android", "apk-analysis", "automation", "frida", "ios", "mitmproxy", "mobile-security", "plugin-system", "reverse-engineering", "traffic-analysis"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-04-09T22:34:19Z"
lastCommitAt: "2026-07-18T05:48:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 60
maintainers: ["cubehouse"]
openGraphImageUrl: "https://opengraph.githubassets.com/3e72b07b3530e2642df44c5b4411d5e73d6ae3d12316bdd5f6af0fc776056577/DarkRideApp/DarkRide"
fundingLinks: ["GITHUB:https://github.com/cubehouse"]
discussionCount: 0
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="brand/wordmark-dark.svg">
  </picture>

  <p><strong>An AI-native workbench for mobile reverse engineering.</strong></p>
  <p>For mobile pentesters, bug bounty hunters &amp; app reverse engineers.</p>

  <p>
  </p>

  <p>
  </p>

</div>

Self-hosted toolkit for Android device control, network traffic capture, APK analysis, and Frida instrumentation — all driven from a single web UI, with a TypeScript automation engine and a plugin system for extending it. iOS support is limited to USB device discovery and traffic capture today; screen control, automation, and Frida are Android-only ([see roadmap](https://github.com/DarkRideApp/DarkRide/blob/HEAD/ROADMAP.md)).

## Features

- **Live device control** — H.264 stream via scrcpy with WebCodecs decoding in the browser; adaptive bitrate (500 kbps–8 Mbps); adb-screencap fallback; hardware buttons; per-device proxy/TLS profile.
- **TypeScript automation engine** — Monaco editor with full `DeviceAPI` typings (click, scroll, getText, waitFor, DOM queries, HTTP); cron/HTTP triggers; rule system for popups; session history with logs, screenshots, and captured traffic; AI…
