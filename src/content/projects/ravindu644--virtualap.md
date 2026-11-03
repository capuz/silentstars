---
repo: "ravindu644/VirtualAP"
name: "VirtualAP"
description: "Turn your rooted Android phone into a real router - hostapd-powered hotspot with VPN tunneling, Wi-Fi repeater mode, and a static gateway, all from a 7MB APK"
readmeQualityOk: true
url: "https://github.com/ravindu644/VirtualAP"
language: "C"
languages: ["C", "Kotlin"]
languagePcts: [54, 44]
topics: ["droidspaces", "hotspot", "openwrt", "wifi"]
stars: 133
forks: 16
openIssues: 3
closedIssues: 3
watchers: 4
contributors: 4
recentReleases: 4
createdAt: "2026-06-11T18:53:16Z"
lastCommitAt: "2026-11-03T10:46:34Z"
lastReleaseAt: "2026-10-27T12:56:57Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 84
undervaluedScore: 31
maintainers: ["ravindu644"]
openGraphImageUrl: "https://opengraph.githubassets.com/60a0b4a574999e82729653281af8211e7335a626341e9c7298ebee7b9a1304a7/ravindu644/VirtualAP"
---

# VirtualAP

Turn a rooted Android phone into a real Wi-Fi router.

VirtualAP runs a proper access point on your phone's Wi-Fi chip. You pick the network
name, password, band and channel, the gateway address your devices see, and where their
traffic goes: mobile data, Wi-Fi, or a VPN.

## What you can do

- **Run OpenWrt as your hotspot's router.** Firewall zones, port forwards, traffic rules,
  bandwidth limits and the LuCI web interface, all on your phone. See managed mode below.
- **Share a VPN.** Every device on the hotspot goes through your phone's VPN. Nothing to
  install on the TV, the console or the laptop.
- **Repeat Wi-Fi.** Stay connected to a Wi-Fi network and rebroadcast it as your own.
- **Keep a fixed gateway.** The gateway address never changes, so port forwards and saved
  SSH targets keep working.
- **Tune the radio.** 2.4 or 5 GHz, channel and width, WPA2 or WPA3, hidden network name.
- **Hide tethering from your operator** with the optional TTL fix, on kernels that
  support it.

## Managed mode: OpenWrt runs your hotspot

This is what sets VirtualAP apart. Hand the hotspot to an OpenWrt container running in…
