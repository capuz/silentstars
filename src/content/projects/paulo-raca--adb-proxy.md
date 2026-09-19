---
repo: "paulo-raca/adb-proxy"
name: "adb-proxy"
description: "Use an Android device attached to any machine as if it were plugged into your own."
readmeQualityOk: true
url: "https://github.com/paulo-raca/adb-proxy"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 82
forks: 17
openIssues: 0
closedIssues: 6
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2020-02-28T03:22:36Z"
lastCommitAt: "2026-09-19T01:16:59Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 98
undervaluedScore: 48
maintainers: ["paulo-raca", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a664eb27a093055fb4b4384a54392d250c898661054c304a2b263afcf8c42e0b/paulo-raca/adb-proxy"
---

# ADB Proxy

> Use an Android device attached to any machine as if it were plugged into your own.

</p>

## Quick intro

ADB, the Android Debug Bridge, is what allows an Android device to talk to a computer for transferring files, installing apps, debugging, etc.

It consists of several parts, typically:

- An Android device, usually attached to your computer via a USB cable
- An application, like Android Studio or the `adb` CLI
- An ADB server, running on your computer and usually listening on `localhost:5037`, which mediates the communication between devices and applications

While this setup works fine for local development, sometimes I need to access a device somewhere else to test or debug something device-specific.

To address this scenario, ADB-Proxy connects to two ADB servers and bridges them:

- On the local computer, it acts as a local device connected via TCP.
- On the remote server, it acts as an application that communicates with a specific device.

When ADB-Proxy is running, the device appears to be attached to both computers.

## Installation

Requires Python 3.10+. The easiest way is to install with [pipx](https://pipx.pypa.io/) or [uv](https://docs.astral.sh/uv/)…
