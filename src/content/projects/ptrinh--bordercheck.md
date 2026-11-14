---
repo: "ptrinh/BorderCheck"
name: "BorderCheck"
description: "Helps limit the damage when a work laptop is compromised: finds exposed ports, plain-text secrets, AI-agent tokens, tunnels and unprotected SSH keys, and says how to close each. No admin rights needed. macOS, Windows, Linux. Reports to a self-hosted portal (Cloudflare Worker)."
readmeQualityOk: true
url: "https://github.com/ptrinh/BorderCheck"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [58, 40]
topics: ["cloudflare-workers", "compliance", "device-posture", "endpoint-security", "golang", "linux", "macos", "secrets-detection", "security", "windows"]
stars: 21
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-30T15:03:53Z"
lastCommitAt: "2026-11-14T22:01:05Z"
lastReleaseAt: "2026-11-12T07:32:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 44
maintainers: ["ptrinh", "J2TeamNNL"]
openGraphImageUrl: "https://opengraph.githubassets.com/f81e14e24c501e63512ce1012f272451c0b705e6b2ceba5face9c1e4d4749dbf/ptrinh/BorderCheck"
---

# BorderCheck

**Finds the open doors on your work laptop and tells you how to close them.**

One stolen password or one bad download can let someone onto a laptop. How much damage they do next depends
on what was left open. BorderCheck looks for:

- programs that accept connections from other machines
- API keys and passwords saved as plain text
- SSH keys with no passphrase
- tunnels, remote access and AI agents that skip approvals

For each one it finds, it says how to fix it. It runs on macOS, Windows and Linux and needs no admin rights.
A plain run only reads: it changes nothing and sends nothing.

It is small and fast. BorderCheck is one file of about 8 MB with nothing else to install, and a full check takes
less than a second on an Apple M5 MacBook. An installed copy does not stay running in the background: the system
starts it once an hour, it does its work and exits.

It is not an antivirus. It does not catch malware; it limits what malware, or a person, can reach. A few of its
findings are strong signs that something hostile is already installed (a startup item that downloads and runs
code, an extension IT has blocked, a crack tool); when it sees one it says so first…
