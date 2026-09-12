---
repo: "Minecraftgoose/GooseHost"
name: "GooseHost"
description: "GooseHost静态网站托管，无需服务器，搭建在cloudflare全球网络上"
readmeQualityOk: true
url: "https://github.com/Minecraftgoose/GooseHost"
homepage: "https://host.goose.cc.cd/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [58]
topics: ["goosehost"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 4
createdAt: "2026-07-22T10:35:36Z"
lastCommitAt: "2026-09-12T08:04:22Z"
lastReleaseAt: "2026-08-22T03:48:30Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 61
maintainers: ["Minecraftgoose", "dependabot[bot]", "web-flow"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a884195d5d4f28699489abb9259890138db3b25519c6188fbbdb36a8617121f/Minecraftgoose/GooseHost"
discussionCount: 1
---

</p>

</p>

</p>

  <b>免费静态网站托管平台 &middot; 无需服务器 &middot; 无需命令行 &middot; 一键部署到全球 CDN</b><br>
  <sub>由 <a href="https://github.com/Minecraftgoose">Minecraft_goose</a> 开发 &middot; GooseCode 旗下产品</sub>
</p>

---

### 关于GooseHost

**GooseHost** 的诞生源于--现在的部署网站都太重量级了，而大家有的时候只是为了让别人看一个HTML网页

而有些人be like ：哎，你看我做的网页`https://localhost:8080`!

<p><img src="https://tse1.explicit.bing.net/th/id/OIP.fDLRpe7hxXGkp0Gk-8cVLAHaII?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="GooseHost Logo" width="100"></a></p>

somebody get html belike ：我靠咋打开啊，这啥啊？

- GitHubpages：你敢来我就敢部署
- cloudflare：笑而不语
- netlify：我高兴给你墙两天
- vercel：哦，你滴邮箱有问题
- surge：你把电脑打开再给我下载个Node.js。。。

所以GooseHost 就是为了给那些拿着一个HTML着急变成URL的friends用的

> 不过最近也推出了上传zip的beta功能

### 架构
GooseHost是搭建在cloudflare和SUPABASE上的

cloudflare负责前端和worker调用

SUPABASE负责用户认证和储存（有1GB空间）（其实cloudflareR2更好）

### 项目结构

```
GooseHost
├─ front
│  ├─ app.js
│  ├─ BingSiteAuth.xml
│  ├─ index.html
│  ├─ logo.svg
│  ├─ manifest.json
│  ├─ robots.txt
│  ├─ sitemap.xml
│  ├─ style.css
│  ├─ sw.js
│  ├─ _headers
│  ├─ _redirects
│  ├─ status
│  │  ├─ app.js
│  │  ├─ index.html
│  │  └─ style.css
│  ├─ reset-password
│  │  ├─ app.js
│  │  ├─ index.html
│  │  └─ style.css
│  ├─…
