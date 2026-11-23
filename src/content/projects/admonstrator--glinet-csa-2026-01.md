---
repo: "admonstrator/glinet-csa-2026-01"
name: "glinet-csa-2026-01"
description: "Detection & Mitigation script for the CSA-2026-01 security incident on GL.iNet Routers and KVM devices."
readmeQualityOk: true
url: "https://github.com/admonstrator/glinet-csa-2026-01"
homepage: "https://gl-i.net/security/csa-2026-01/"
language: "HTML"
languages: ["HTML", "Shell"]
languagePcts: [49, 35]
topics: ["glinet", "kvm", "openwrt", "router"]
stars: 26
forks: 2
openIssues: 9
closedIssues: 12
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-11-21T13:13:52Z"
lastCommitAt: "2026-11-23T10:01:29Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 91
undervaluedScore: 40
maintainers: ["claude", "remotetohome", "admonstrator"]
openGraphImageUrl: "https://opengraph.githubassets.com/c51a5e67721932cfd308b700f054a3dc724fbdeacb60ecd08fc478f21c1c720a/admonstrator/glinet-csa-2026-01"
fundingLinks: ["GITHUB:https://github.com/admonstrator", "KO_FI:https://ko-fi.com/admon", "BUY_ME_A_COFFEE:https://buymeacoffee.com/admon", "CUSTOM:https://link.admon.me/paypal"]
---

## gl-helper Triage for GL.iNet Routers and KVMs

**Check a device for the malware from GL.iNet's security notice of 20 November 2026, save the evidence, then clean up.**

---

> **Warning**
>
> **Community work, not an official GL.iNet tool.** GL.iNet has not reviewed or endorsed it.
> It finds and removes only the indicators we know of, and it **does not replace the factory
> reset** GL.iNet recommends. Use it at your own risk.

---

## 📖 About

On 20 November 2026 GL.iNet published a [security notice](https://www.gl-inet.com/blogs/blog/glinet-security-notice-2026-11-20):
its cloud remote management service had been abused to install malware on a subset of
GL.iNet routers and KVM devices. The community advisory is
[CSA-2026-01](https://gl-i.net/security/csa-2026-01/).

This repository contains a triage script for the implant known as "gl-helper". It runs on
GL.iNet KVMs (RM1 family, buildroot based) and on GL.iNet / OpenWrt routers.

By [Admon](https://forum.gl-inet.com/u/admon/) and the community: [RemoteToHome Consulting](https://remotetohome.io)
and users of GL.iNet's forum contributed findings and checks. See [Credits](#-credits).
