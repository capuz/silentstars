---
repo: "wcvjk8tnz8-create/Noxc"
name: "Noxc"
description: "An open-source domain distribution platform that can be self-deployed."
originalDescription: "开源的域名分发平台，可自行部署"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/wcvjk8tnz8-create/Noxc"
homepage: "https://nic.299282.xyz"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
stars: 29
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-31T10:01:08Z"
lastCommitAt: "2026-11-27T12:57:45Z"
status: "thriving"
tags: []
healthScore: 79
undervaluedScore: 39
maintainers: ["wcvjk8tnz8-create"]
openGraphImageUrl: "https://opengraph.githubassets.com/26fb372dddff5f7d3a03990eada86e9b5d39b472c88872a54e8dfa1158e5600c/wcvjk8tnz8-create/Noxc"
---

# Noxc

**Noxc** — a free, open-source, next-generation second-level domain distribution and DNS management system.

> Officially renamed to **Noxc**. The `noxc.uk` subdomain is now the top recommendation: it ranks first in the suffix selector and is labeled “首推” (Top Recommended). **The primary domain is still `meoy.top`**. `ROOT_DOMAIN` and the default Cloudflare Zone (`CF_ZONE_ID`) are unchanged. The recommendation is display ordering only and does not require changing the Zone ID or reconfiguring the primary domain in site settings. To actually open `noxc.uk` for applications, add that root domain and its Zone configuration in the admin panel.

Frontend: **React 18 + TypeScript + Vite** (single-page application, with no hand-written HTML pages across the site). Backend: **TypeScript + Hono on Cloudflare Workers + D1 + KV + R2**. Users apply for `xxx.your-root-domain` on their own. After review passes, they add DNS records themselves. Each root domain can separately choose to issue records via the **Cloudflare API** or the **Spaceship DNS API**.
