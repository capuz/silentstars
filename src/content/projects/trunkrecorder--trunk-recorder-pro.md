---
repo: "TrunkRecorder/trunk-recorder-pro"
name: "trunk-recorder-pro"
description: "All the cool kids are doing it"
readmeQualityOk: true
url: "https://github.com/TrunkRecorder/trunk-recorder-pro"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [71, 22]
topics: ["trunk-recorder-pro"]
stars: 32
forks: 18
openIssues: 7
closedIssues: 36
watchers: 7
contributors: 11
recentReleases: 10
createdAt: "2026-09-29T12:00:14Z"
lastCommitAt: "2026-11-23T12:24:46Z"
lastReleaseAt: "2026-10-09T14:23:40Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 96
undervaluedScore: 49
maintainers: ["robotastic", "gofaster", "devicenull"]
openGraphImageUrl: "https://opengraph.githubassets.com/a647bcaba623319805d9f3f21f7fe4c8a036e0544932d9de22d2530f39521e89/TrunkRecorder/trunk-recorder-pro"
---

# Trunk Recorder Pro

Trunk Recorder Pro records the calls on trunked and conventional radio systems. Point one or more
SDRs at a system and it follows the control channel and records every call it can hear, as WAV
files with Trunk Recorder–compatible JSON beside them. Plugins upload the calls to OpenMHz,
Broadcastify Calls or Rdio Scanner, stream them, or hand them to a script of yours.

It is a rewrite of [Trunk Recorder](https://github.com/TrunkRecorder/trunk-recorder) in Rust, with
no GNU Radio or OP25 dependency. It is a single program of a few megabytes, with a browser
interface built in, and runs on macOS, Linux (including the Raspberry Pi), Windows and Docker.
The same engine also runs in the browser with nothing to install. On a Raspberry Pi 5 it uses
4–6× less CPU than Trunk Recorder on the same system ([Performance](https://github.com/TrunkRecorder/trunk-recorder-pro/blob/HEAD/docs/developer/performance.md)).

**It records:**
