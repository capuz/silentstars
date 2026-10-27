---
repo: "DocForum/docforum-web"
name: "docforum-web"
description: "React/Vite frontend, consumes docforum-core's API."
readmeQualityOk: true
url: "https://github.com/DocForum/docforum-web"
homepage: "https://docforum.github.io/docforum-web/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["gsap", "healthcare", "react", "typescript", "vite"]
stars: 13
forks: 47
openIssues: 37
closedIssues: 91
watchers: 0
contributors: 34
recentReleases: 0
createdAt: "2026-09-10T09:03:58Z"
lastCommitAt: "2026-10-27T12:40:01Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 87
undervaluedScore: 62
maintainers: ["afeezorobsco-cyber", "lawalajose", "meem08"]
openGraphImageUrl: "https://opengraph.githubassets.com/71e36c4bc617c773edd65796ca16841b5f344f34f5b06d7dd25d823597dac72c/DocForum/docforum-web"
---

# docforum-web

**🔗 [Live UI preview](https://docforum.github.io/docforum-web/)** — deployed
from `main` on every push, connected to a real backend (`docforum-core`
running on Render). Signup/login work end-to-end. **Still a preview, not
production:** the free-tier backend cold-starts after 15 minutes idle
(~1 minute delay on the first request) and its database expires
2026-10-14 unless renewed — see [Getting started](#getting-started).

**Frontend for DocForum** — the patient/doctor/facility web client for the
booking → referral → prescription/lab-order → fulfillment flow described in
[`docforum-core`'s `PRD.md`](https://github.com/DocForum/docforum-core/blob/main/PRD.md).

This repo owns presentation only. It talks exclusively to
[`docforum-core`](https://github.com/DocForum/docforum-core)'s API — it
never calls [`docforum-escrow`](https://github.com/DocForum/docforum-escrow)
or any Stellar SDK directly. If a screen needs payment/escrow data, that's
a `docforum-core` API gap to file, not a reason to add a Stellar dependency
here (see [`ARCHITECTURE_ESSENTIALS.md` hard rule 1](https://github.com/DocForum/docforum-web/blob/HEAD/ARCHITECTURE_ESSENTIALS.md#hard-rules)).

> **Full…
