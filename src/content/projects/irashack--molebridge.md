---
repo: "irashack/molebridge"
name: "molebridge"
description: "A self-hosted NetBird exit node that sends your peers' internet traffic out through Mullvad, PIA or NordVPN, or through gluetun for four more providers, with routing that fails closed."
readmeQualityOk: true
url: "https://github.com/irashack/molebridge"
language: "Go"
languages: ["Go"]
languagePcts: [92]
topics: ["exit-node", "gluetun", "mullvad", "netbird", "nordvpn", "pia", "self-hosted", "vpn", "wireguard"]
stars: 10
forks: 0
openIssues: 5
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-09-17T00:02:13Z"
lastCommitAt: "2026-11-19T05:03:55Z"
lastReleaseAt: "2026-10-10T15:16:23Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 81
undervaluedScore: 45
maintainers: ["claude", "irashack-products[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/25cd6e4be82cf97583bf7586679084984d200b8e6bc0b1d19f5a58200a953bbc/irashack/molebridge"
---

Self-hosted. It uses Mullvad, PIA or NordVPN directly, or gluetun for
  FastestVPN, IVPN, Mullvad, NordVPN, Surfshark and Windscribe. Routing
  fails closed, and a small web panel switches servers.

---

Phones can usually run only one VPN at a time, so turning on Mullvad, PIA or
NordVPN means turning off NetBird. Molebridge moves the commercial VPN tunnel
onto a machine you keep running. That machine joins your NetBird network as an
exit node. Your devices stay on NetBird, select the exit, and their Internet
traffic leaves through the VPN provider.

By default Molebridge builds the tunnel itself (Mullvad, PIA, NordVPN).
An experimental second backend hands the tunnel to
[gluetun](https://github.com/qdm12/gluetun) instead, and Switchyard then
chooses servers for FastestVPN, IVPN, Mullvad, NordVPN, Surfshark and
Windscribe through it ([the gluetun form](https://github.com/irashack/molebridge/blob/HEAD/docs/gluetun-netbird-exit.md)).
Either way, the devices using the exit are NetBird peers.
