---
repo: "markusthiel/lumio"
name: "lumio"
description: "Self-hosted client galleries for photographers — proofing, image selection, print shop, AI tagging. GDPR-native, your data stays with you. A source-available alternative to Pixieset & Picdrop."
readmeQualityOk: true
url: "https://github.com/markusthiel/lumio"
homepage: "https://lumio-app.de"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["client-gallery", "docker", "gdpr", "nextjs", "photo-gallery", "photographer", "photography", "picdrop-alternative", "print-shop", "proofing"]
stars: 86
forks: 13
openIssues: 5
closedIssues: 31
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-05-31T10:19:30Z"
lastCommitAt: "2026-11-01T22:59:16Z"
lastReleaseAt: "2026-06-02T13:53:51Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 35
maintainers: ["manuzzi", "bradley-varol"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1255037665/6a50d278-4ef9-4582-ab10-4ab3d245696e"
---

**English** · [Deutsch](https://github.com/markusthiel/lumio/blob/HEAD/README.de.md) · [Italiano](https://github.com/markusthiel/lumio/blob/HEAD/README.it.md)

  A self-hostable alternative to Picdrop, Pixieset and Pic-Time — your data stays with you.

---

## Who is Lumio for?

Three typical setups — the Quick Start below covers the first; everything else is optional.

| You are… | Setup | Docs |
|---|---|---|
| **Photographer or studio** | Single mode, bundled storage, one domain | [Quick Start](#quick-start) — 5 minutes |
| **Agency with several photographer clients** (self-hosted, for your own business) | Multi mode without billing, tenants created manually via super admin | [docs/MULTI_TENANT.md](https://github.com/markusthiel/lumio/blob/HEAD/docs/MULTI_TENANT.md) |

In **single mode** the tenant is created automatically on first start — you only need `create-admin` for your first user. No super admin, no Stripe.

> **Want to offer Lumio as a SaaS to paying third parties?** That's *Competing Use* and not freely permitted under the license (it's the business model behind our own lumio-cloud.de). A commercial license is available on request — see [License](#license). The SaaS…
