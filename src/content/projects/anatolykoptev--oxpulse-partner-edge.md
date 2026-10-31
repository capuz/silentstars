---
repo: "anatolykoptev/oxpulse-partner-edge"
name: "oxpulse-partner-edge"
description: "OxPulse partner-edge deployment bundle — Caddy, coturn, xray, and str0m-based SFU for partners to self-host oxpulse video rooms on a VPS."
readmeQualityOk: true
url: "https://github.com/anatolykoptev/oxpulse-partner-edge"
language: "Shell"
languages: ["Shell", "Rust"]
languagePcts: [65, 34]
stars: 5
forks: 1
openIssues: 117
closedIssues: 44
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-04-22T05:37:19Z"
lastCommitAt: "2026-10-31T07:46:02Z"
lastReleaseAt: "2026-04-25T22:41:39Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 82
undervaluedScore: 48
maintainers: ["anatolykoptev", "krolik-release-bot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f07a75fa5c5910eb76a0b2786e49d32683886397dd69305123ec02e554ed5c2/anatolykoptev/oxpulse-partner-edge"
---

# oxpulse-partner-edge

Production-ready co-brand mirror node for the OxPulse network. One command installs TLS termination, an encrypted bypass tunnel, an obfuscated fallback channel, TURN/STUN relay, a WebRTC SFU, and an AmneziaWG mesh link to the central node — on any VPS.

## Why

OxPulse is encrypted real-time communication built to work under network-level filtering. The partner-edge bundle in this repository is the open-source component that operators self-host to extend the OxPulse mesh. Every byte that passes through a partner-edge node is end-to-end encrypted between participants — operators see only ciphertext and minimal forwarding metadata. Run by individual sysadmins, civic-tech communities, and university labs in jurisdictions that respect privacy.

## Relay-only node

A TURN-only profile for hosts that must hold no registration material: coturn, a
host firewall, the self-relay guard and a liveness heartbeat, installed by
`relay/install-relay.sh` with a per-node secret instead of the register path.
See [docs/relay-only-node.md](https://github.com/anatolykoptev/oxpulse-partner-edge/blob/HEAD/docs/relay-only-node.md). Never run `install.sh`
or `/api/partner/register`…
