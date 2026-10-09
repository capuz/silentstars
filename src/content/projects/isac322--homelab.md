---
repo: "isac322/homelab"
name: "homelab"
description: "Reproducible GitOps based k8s homelab"
originalDescription: "Reproducible GitOps based k8s homelab"
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/isac322/homelab"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [59, 25]
topics: ["helm", "kubernetes", "terraform"]
stars: 10
forks: 0
openIssues: 25
closedIssues: 23
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2022-05-06T07:55:24Z"
lastCommitAt: "2026-10-09T10:50:05Z"
lastReleaseAt: "2022-05-15T13:49:07Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 65
maintainers: ["isac322"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e451c4fae1fef233ffc54103f397ace5302857b727505eb0d59dd34da0c3d46/isac322/homelab"
---

# Homelab GitOps and host management

Argo CD manages the Kubernetes desired state, `system-manager` manages Linux hosts, and `nix-darwin` manages macOS hosts. Host and WireGuard authoritative data are in `nix/lib/topology.nix`, and private keys and PSKs are not stored in plaintext in Git or the Nix store.

## Active topology

```bash
nix run .#homelab-host -- inventory
```

- Linux: `n2p1`, `n2p2`, `rpi4`, `rpi5`, `rock5bp`, `macmini`
- macOS: `bhyoo-macbook-pro`
- `wg0`: 21 links from the 7-node full mesh and 14 `/32` edge links through rpi5
- Total required links: 35. `linkId` is immutable.
- The 6 links where the MacBook is one endpoint, and the edge links, have `managed=false`. Only links whose both Linux bundles are owned by this repository are targets for PSK generation and rotation.

## Secret model

WireGuard ciphertext is placed in `nix/secrets/wireguard/hosts/<nodeId>.sops.yaml`. Each bundle is encrypted to three recipients: the node's host-local age identity, the online operator identity used for routine SOPS work, and the offline recovery identity used only for emergency recovery. One host identity is created per node, while the operator and recovery identities are…
