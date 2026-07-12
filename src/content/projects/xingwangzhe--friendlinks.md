---
repo: "xingwangzhe/FriendLinks"
name: "FriendLinks"
description: "Explore the vast universe of blogs and find connections between them. Each node is a blog, and each line represents a friendship link."
originalDescription: "探索浩瀚的博客宇宙，寻找彼此之间的联系。每个节点是一个博客，每条连线是一段友链关系。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/xingwangzhe/FriendLinks"
homepage: "https://links.needhelp.icu/"
language: "TypeScript"
languages: ["TypeScript", "Astro"]
languagePcts: [70, 22]
topics: ["blogs"]
stars: 10
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2025-12-04T11:54:00Z"
lastCommitAt: "2026-07-12T06:17:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 63
maintainers: ["xingwangzhe"]
openGraphImageUrl: "https://opengraph.githubassets.com/03cb5c0c1e058e8c9a3f1754fa9d4d527d09839531da16ac908517e8c41aeda2/xingwangzhe/FriendLinks"
---

# Blog Universe

> Explore the vast universe of blogs and find connections between them. Each node is a blog, and each line represents a friendship link.

**Legal Compliance Notice:** Website owners and contributors must ensure that their published content and website operations comply with the laws and regulations of the People's Republic of China and, where applicable, the laws of the United States of America.

**Please ensure:** Your site uses `https` and is accessible in mainland China.

---

## Quickly Add Your Blog

Fill in `links/{your domain}.yml`:

```yaml
site:
  name: My Blog
  description: Sharing articles related to programming and technology
  url: https://example.com
  color: "#ff6600"       # Optional, custom node color (hexadecimal)
  links: /links          # Friendship link page route (required)
  friends:
    - name: Programming Station
      url: https://codehub.example.com
```

Submit a PR to proceed.

> **Common values for friendship link page routes:** `/links`, `/link`, `/friends`, `/friend`, `/links.html`, etc.

---

## ✨ 3D Rendering Features

### Node System
- **Custom ShaderMaterial** — Fresnel rim lighting, 20 times lighter than MeshStandardMaterial+
-…
