---
repo: "chriscohnen/islandr"
name: "islandr"
description: "Self-hosted WireGuard® access management — bring every remote worker, device and site securely back to HQ. One native binary (Quarkus + GraalVM)."
readmeQualityOk: true
url: "https://github.com/chriscohnen/islandr"
language: "Java"
languages: ["Java", "JavaScript"]
languagePcts: [59, 34]
topics: ["graalvm", "homelab", "java", "open-source", "quarkus", "vue3", "wireguard-vpn-setup", "access-control", "nftables", "self-hosted"]
stars: 41
forks: 0
openIssues: 8
closedIssues: 23
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-04T11:08:33Z"
lastCommitAt: "2026-08-01T06:12:27Z"
lastReleaseAt: "2026-07-12T20:59:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 83
undervaluedScore: 41
maintainers: ["chriscohnen", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1259287965/e6633b25-698b-4f16-80b9-f121b33b3603?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260801%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260801T061725Z&X-Amz-Expires=300&X-Amz-Signature=b649568d19ab797c204446396a0bcbe321ec71ad9c23c2e2ab0643a177e05ace&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTU2NTM0NSwibmJmIjoxNzg1NTY1MDQ1LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.RrXWtDLsmAMh8QW222JD9d_lmhSN2grSu_1xUyCJgDU"
fundingLinks: ["GITHUB:https://github.com/chriscohnen"]
discussionCount: 2
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

</p>
</p>

---

## Who is this for?

Small teams, homelabs, and remote-first setups that want **sovereign WireGuard access management** without a SaaS control plane:

- Your ISP gives you CG-NAT and no fixed IPv4
- Your router has no WireGuard server mode (older Fritz!Box, or you don't want it there)
- You need…
