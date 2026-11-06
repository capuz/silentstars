---
repo: "h1d3mun3/augur"
name: "augur"
description: "Sandboxed macOS VMs with full Xcode for AI coding agents — plus a lightweight Linux container mode."
readmeQualityOk: true
url: "https://github.com/h1d3mun3/augur"
language: "Shell"
languages: ["Shell"]
languagePcts: [83]
topics: ["claude-code", "cli", "macos-vm", "sandbox", "ai-agents", "apple-container", "developer-tools", "egress-filtering", "ios", "macos"]
stars: 10
forks: 2
openIssues: 2
closedIssues: 35
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-03-24T10:15:05Z"
lastCommitAt: "2026-11-06T02:44:29Z"
lastReleaseAt: "2026-07-14T15:01:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 56
maintainers: ["h1d3mun3"]
openGraphImageUrl: "https://opengraph.githubassets.com/841c3d53ffca5f0dc9689bbf5eede71a5d2404dccae1a03cd665ad8e98a8400f/h1d3mun3/augur"
---

augur runs Claude Code inside an isolated guest where it can build, run, and **test** Apple-platform
code, while your host stays out of reach. Only the current directory is exposed; network egress is
limited to an allowlist enforced on the host.

## Why augur

- **Xcode inside the sandbox — not just Linux.** macOS VM mode boots a real macOS guest on Apple's
  Virtualization.framework, with Xcode, `xcodebuild`, and the iOS Simulator preinstalled. Most agent
  sandboxes stop at Linux containers; augur gives the agent the full Apple toolchain without giving
  it your Mac.
- **`xcodebuild test` works headless, over SSH.** Tests that need `testmanagerd` normally require a
  GUI login session. The base VM is built with auto-login and a virtual display, so the agent can run
  every test type unattended. See [Running `xcodebuild test`](#running-xcodebuild-test).
- **One command, no GUI on macOS 27.** On a macOS 27+ host and guest, `augur build --macos`
  provisions the VM's account through macOS 27's `VZMacGuestProvisioningOptions`. There is no Setup
  Assistant to click through, and the admin password is randomized per build. Older pairs fall back to
  a short manual step. See…
