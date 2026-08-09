---
repo: "Sentry-Six/Sentry-USB-Rusty"
name: "Sentry-USB-Rusty"
description: "A smart USB drive for Tesla Dashcam - extended storage, auto archive, web viewer "
readmeQualityOk: true
url: "https://github.com/Sentry-Six/Sentry-USB-Rusty"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 66
forks: 14
openIssues: 1
closedIssues: 10
watchers: 3
contributors: 10
recentReleases: 10
createdAt: "2026-04-16T06:10:16Z"
lastCommitAt: "2026-08-09T04:46:28Z"
lastReleaseAt: "2026-06-17T07:25:40Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 41
maintainers: ["ChadR23", "Scottmg1", "JeffFromTheIRS"]
openGraphImageUrl: "https://opengraph.githubassets.com/2aee727ade1096cf0ad4032a4493ff34bb5f51732d63bdb006b54075c34432c5/Sentry-Six/Sentry-USB-Rusty"
---

<h1 align="center">Sentry USB</h1>

  <strong>Turn a Raspberry Pi into a smart USB drive for your Tesla's dashcam.</strong><br>
  Auto-archives. Modern web UI. Multi-camera viewer. Privacy-first.
</p>

</p>

</p>

---

## What it does

- **Plugs into your Tesla's USB port** and pretends to be a dashcam drive.
- **Tracks every drive** — route on a map, distance, speed, and the dashcam clips that recorded it — built from the metadata Tesla embeds in each clip.
- **Enriches drives with Tesla BLE telemetry** — battery, HVAC, cabin and exterior temps, TPMS, odometer, and location — pulled over Bluetooth and layered onto each trip for a much fuller picture than the dashcam metadata gives you on its own.
- **Archives clips automatically** to your NAS, cloud, or wherever — over WiFi, in the background.
- **Keeps the car awake** (and the dashcam recording) via the same BLE link — no Tesla API subscription needed.
- **Privacy-first.** No fingerprinting by default; everything sensitive is opt-in.

The Rust rewrite of the original Go version. Same `sentryusb.conf`, faster server, more reliable.

Sentry USB is one of the free tools for Tesla owners from the [Sentry Six](https://sentry-six.com)…
