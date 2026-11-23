---
repo: "BandarLabs/Cobalt"
name: "Cobalt"
description: "SDK for building apps & an app store for your Kobo eInk reader"
readmeQualityOk: true
url: "https://github.com/BandarLabs/Cobalt"
homepage: "https://bandarlabs.github.io/Cobalt/"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
topics: ["kobo", "kobo-ereader", "opds-client", "sdk", "rss-reader", "eink", "epub", "epub-reader", "ereader", "arxiv"]
stars: 441
forks: 45
openIssues: 16
closedIssues: 34
watchers: 6
contributors: 19
recentReleases: 0
createdAt: "2026-07-29T15:06:20Z"
lastCommitAt: "2026-11-23T10:17:01Z"
lastReleaseAt: "2026-08-09T15:15:11Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 25
maintainers: ["abhishek-anand"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d54a47d6dee967acf6009c3a5e35e8b99553d91d47514f9598129b0b9c334c1/BandarLabs/Cobalt"
discussionCount: 1
---

Cobalt adds apps to Kobo e-readers. It includes a launcher, an app store, a
Rust SDK, a runtime that runs each app in its own restricted process, and a
simulator for building apps without a device.

Install Cobalt once over USB. After that, apps install, update and uninstall
over Wi-Fi, and your Kobo's own reader stays as it was.

> **Important**
>
> Tested on the Kobo Clara BW (N365 and the 2025 P365), Clara Colour, Clara HD,
> Elipsa 2E, Libra 2, Libra Colour, Libra H2O and Nia, at the firmware listed in the
> [device support matrix](https://github.com/BandarLabs/Cobalt/blob/HEAD/docs/DEVICES.md#device-support-matrix). Other Kobos
> can run it too: Cobalt lists what has not been tested and asks once before
> it starts. Kobo firmware 5.x is not supported. Cobalt is not affiliated with
> Rakuten Kobo.

## Install

The easiest way is the [browser installer](https://bandarlabs.github.io/Cobalt/install/),
in Chrome, Edge or Opera. Plug in your Kobo and follow the steps.

Or, on macOS or Linux:

```sh
curl -fsSL https://bandarlabs.github.io/Cobalt/install.sh | sh
```
