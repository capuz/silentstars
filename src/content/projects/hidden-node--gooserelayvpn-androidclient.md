---
repo: "Hidden-Node/GooseRelayVPN-AndroidClient"
name: "GooseRelayVPN-AndroidClient"
description: "GooseRelayVPN Android client: a SOCKS5 VPN with profile-based setup, live logs, and JSON import/export that tunnels raw TCP   through Google Apps Script to your VPS exit server (AES-256-GCM, domain-fronted)."
readmeQualityOk: true
url: "https://github.com/Hidden-Node/GooseRelayVPN-AndroidClient"
language: "Go"
languages: ["Go", "Kotlin"]
languagePcts: [48, 48]
topics: ["aes-gcm", "http-proxy", "mitm", "proxy", "sni", "socks5", "tunnel", "tunneling", "vpn", "vpn-client"]
stars: 250
forks: 16
openIssues: 6
closedIssues: 6
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-04-28T22:33:54Z"
lastCommitAt: "2026-09-21T09:08:24Z"
lastReleaseAt: "2026-05-25T21:28:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 21
maintainers: ["Hidden-Node", "ArashAfkandeh"]
openGraphImageUrl: "https://opengraph.githubassets.com/8e6de1f2bc73c27c04b40c4cc0ac023d07f2bfb82ff5512ed805250db104f823/Hidden-Node/GooseRelayVPN-AndroidClient"
---

# GooseRelayVPN Android Client
🌐 **[فارسی](https://github.com/Hidden-Node/GooseRelayVPN-AndroidClient/blob/HEAD/README_FA.md)** 

Android client for GooseRelayVPN that runs the GooseRelay core through a Go mobile bridge and provides a complete Android UI for VPN lifecycle, profiles, logs, and settings.

- Upstream core project: https://github.com/kianmhz/GooseRelayVPN
- This repository: Android-focused client implementation

## What This App Does

This app creates a local SOCKS5 endpoint on Android and tunnels TCP traffic through the GooseRelay architecture:

1. Local app/browser traffic → SOCKS5
2. GooseRelay encrypted framing (AES-256-GCM key from your profile)
3. HTTPS path through Google-facing endpoints (Apps Script flow)
4. Your VPS exit server handles outbound target connections

The app wraps this flow in Android `VpnService` so selected/full traffic can be routed through the tunnel.

## App Screenshots

<table>
  <tr>
    <td align="center"><strong>Home</strong></td>
    <td align="center"><strong>Profiles</strong></td>
    <td align="center"><strong>Settings</strong></td>
    <td align="center"><strong>Logs</strong></td>
  </tr>
  <tr>
    <td><img…
