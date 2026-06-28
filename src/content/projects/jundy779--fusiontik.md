---
repo: "jundy779/FusionTik"
name: "FusionTik"
description: "A source code of the tiktok downloader website."
url: "https://github.com/jundy779/FusionTik"
homepage: "https://fusiontik.vercel.app/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["tiktok-downloader-app", "tiktok-video-downloader-no-watermark", "tiktok-video-downloader-without-watermark"]
stars: 25
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-10-23T04:18:04Z"
lastCommitAt: "2026-06-28T13:17:44Z"
lastReleaseAt: "2026-02-27T22:18:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 71
undervaluedScore: 48
maintainers: ["jundy779"]
openGraphImageUrl: "https://opengraph.githubassets.com/5fa558c617f0869b1850eb08c3174aa160a407211bd65f5aeac92f1e9c9d6aaf/jundy779/FusionTik"
fundingLinks: ["CUSTOM:https://linktr.ee/fusionifytempest"]
discussionCount: 1
---

<br/>

_⚡ FusionTik_

**Modern TikTok Downloader — Video · Photo Mode · MP3**

  </a>
  </a>
  </a>
  </a>
  </a>
  </a>
</p>

  </a>
  </a>
  </a>
</p>

  </a>
  </a>
  </a>
</p>

</div>

_🌸 Overview_

**FusionTik** adalah web application modern untuk mendownload konten TikTok tanpa watermark. Dibangun dengan **Next.js 15 App Router**, **TypeScript**, dan **Tailwind CSS** — FusionTik menawarkan pengalaman download yang cepat, bersih, dan responsif di semua perangkat.

Tidak perlu install aplikasi. Tidak perlu login. Cukup **paste link TikTok**, klik **Download**, dan simpan konten ke perangkatmu.

Built on Next.js • Powered by Supabase • Written in TypeScript

_🏗️ Architecture Overview_

```mermaid
graph TD
    A["User Browser - Paste TikTok URL"] -->|Submit Form| B["Next.js Frontend - app/page.tsx"]
    B -->|POST /api/tiktok| C["API Route Handler - Validate URL"]
    C -->|Try Provider 1| D["Zell API - apizell.web.id"]
    C -->|Fallback| E["Sanka API - sankavollerei.com"]
    D -->|Success| F["Parse Response - video, audio, images"]
    E -->|Success| F
    D -->|Fail| E
    E -->|All Fail| G["notifyProviderFailure - Alert System"]
    G --> H["Telegram Bot - Instant Alert"]…
