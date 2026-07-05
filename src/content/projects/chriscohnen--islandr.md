---
repo: "chriscohnen/islandr"
name: "islandr"
description: "Self-hosted WireGuard® access management — bring every remote worker, device and site securely back to HQ. One native binary (Quarkus + GraalVM)."
readmeQualityOk: true
url: "https://github.com/chriscohnen/islandr"
language: "Java"
languages: ["Java", "JavaScript"]
languagePcts: [57, 36]
topics: ["graalvm", "homelab", "java", "open-source", "quarkus", "vue3", "wireguard-vpn-setup", "access-control", "nftables", "self-hosted"]
stars: 22
forks: 0
openIssues: 6
closedIssues: 4
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-06-04T11:08:33Z"
lastCommitAt: "2026-07-05T20:55:01Z"
lastReleaseAt: "2026-07-05T20:25:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 77
undervaluedScore: 42
maintainers: ["chriscohnen", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1259287965/e6633b25-698b-4f16-80b9-f121b33b3603"
discussionCount: 1
---

# Islandr

</p>

</p>

Peers, users, group-based ACLs and a self-service portal — one native binary, no SaaS.</p>

---

> **[islandr-gateway.net](https://islandr-gateway.net)** — landing page with setup guide and architecture overview.

---

> [!NOTE]
> **Early access — perfect for a homelab or a spare VM, not your production gateway just yet.**
> Islandr drives WireGuard and nftables directly (`wg set`, `ip link`, `nft`), so point it at a test box or lab network first and back up `/etc/wireguard/` and the database before upgrading — pre-1.0 releases can still bring breaking changes.
> This is exactly the stage where testers make the biggest difference. Kick the tyres, and if you hit a rough edge [open an issue](https://github.com/chriscohnen/islandr/issues) — that feedback is what moves it toward 1.0. Starring or watching the repo is the easiest way to follow releases.

---

## Who is this for?

Small teams, homelabs, and remote-first setups that want **sovereign WireGuard access management** without a SaaS control plane:

- Your ISP gives you CG-NAT and no fixed IPv4
- Your router has no WireGuard server mode (older Fritz!Box, or you don't want it there)
- You need more than one…
