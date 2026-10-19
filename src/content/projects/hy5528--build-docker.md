---
repo: "hy5528/build-docker"
name: "build-docker"
description: "构建lunatv、MoonTVPlus、GoFilm、KVideo、VideoX、LX Music 、solara等自用镜像，支持arm32。"
readmeQualityOk: true
url: "https://github.com/hy5528/build-docker"
language: "Dockerfile"
languages: ["Dockerfile", "TypeScript", "HTML"]
languagePcts: [45, 31, 24]
stars: 9
forks: 5
openIssues: 4
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-11-10T00:33:11Z"
lastCommitAt: "2026-10-19T09:14:49Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 70
undervaluedScore: 62
maintainers: ["hy5528"]
openGraphImageUrl: "https://opengraph.githubassets.com/3618812371eeeb51e46397d58322a02462ab0f95dd6ee118c235c4d64490b7de/hy5528/build-docker"
---

构建lunatv、MoonTVPlus、GoFilm、KVideo、VideoX、splayer、LX Music 、solara-music等自用镜像，测试用。
---

# lunatv
基于 MoonTV 深度二次开发的全功能影视聚合播放平台。

kvrocks储存
```text
services:
  moontv-core:
    image: ghcr.io/hy5528/lunatv66:latest
    container_name: moontv-core
    restart: always
    ports:
      - '3000:3000'
    environment:
      - USERNAME=admin
      - PASSWORD=ww123456
      - NEXT_PUBLIC_STORAGE_TYPE=kvrocks
      - KVROCKS_URL=redis://moontv-kvrocks:6666
    networks:
      - moontv-network
    depends_on:
      - moontv-kvrocks

  moontv-kvrocks:
    image: apache/kvrocks
    container_name: moontv-kvrocks
    restart: always
    volumes:
      - kvrocks-data:/var/lib/kvrocks
    networks:
      - moontv-network

networks:
  moontv-network:
    driver: bridge

volumes:
  kvrocks-data:

```
redis储存
```text
services:
  moontv-core:
    image: ghcr.io/hy5528/lunatv66:latest
    container_name: moontv-core
    restart: always
    ports:
      - '3000:3000'
    environment:
      - USERNAME=admin
      - PASSWORD=ww123456
      - NEXT_PUBLIC_STORAGE_TYPE=redis
      - REDIS_URL=redis://moontv-redis:6379
    networks:
      - moontv-network
    depends_on:
      - moontv-redis

  moontv-redis:…
