---
repo: "sarthak-k/Onvif.Open"
name: "Onvif.Open"
description: "Onvif Library for .NET"
readmeQualityOk: true
url: "https://github.com/sarthak-k/Onvif.Open"
language: "C#"
languages: ["C#"]
languagePcts: [96]
stars: 15
forks: 5
openIssues: 3
closedIssues: 0
watchers: 5
contributors: 2
recentReleases: 0
createdAt: "2016-01-22T13:41:17Z"
lastCommitAt: "2026-11-08T14:13:50Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 55
maintainers: ["claude", "sarthak-k"]
openGraphImageUrl: "https://opengraph.githubassets.com/13a8936e384cf91c6b40aed1c28768e95070327eff0755bd1dee1554e1c6686c/sarthak-k/Onvif.Open"
---

# Onvif.Open
Onvif Library for .NET

Targets **.NET 10 (LTS)** and runs on Windows, Linux and macOS.

## Projects

| Project | Purpose |
| --- | --- |
| `Onvif.Open.Core` | Abstractions (`ICamera`, `IMediaService`, `ILiveVideoStream`, ...), WS-Security UsernameToken authentication, shared SOAP binding |
| `Onvif.Open.Device.Management` | ONVIF Device service (device information, date & time, media service discovery) |
| `Onvif.Open.Media` | ONVIF Media (ver10) and Media2 (ver20) services: profiles, stream URI, snapshot URI |
| `Onvif.Open.Discovery` | WS-Discovery: find ONVIF devices on the network |
| `Onvif.Open.Events` | ONVIF Events service: PullPoint subscriptions (motion, tampering, inputs, ...) |
| `Onvif.Open.Ptz` | ONVIF PTZ service: pan/tilt/zoom moves, presets, home position |
| `Onvif.Open.Imaging` | ONVIF Imaging service: brightness, contrast, day/night (IR cut filter), WDR, focus |
| `Onvif.Open.Replay` | ONVIF Recording Search and Replay services (Profile G): recordings stored on the camera |
| `Onvif.Open.DeviceIo` | ONVIF DeviceIO service: digital inputs (relays use the Device service) |
| `Onvif.Open.Streaming` | Dependency-free RTSP/RTP client: Basic/Digest…
