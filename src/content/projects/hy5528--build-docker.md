---
repo: "hy5528/build-docker"
name: "build-docker"
description: "构建lunatv、MoonTVPlus、GoFilm、KVideo、VideoX、splayer、LX Music 、solara等自用镜像，支持arm32。"
readmeQualityOk: true
url: "https://github.com/hy5528/build-docker"
language: "Dockerfile"
languages: ["Dockerfile", "TypeScript", "HTML"]
languagePcts: [37, 34, 29]
stars: 7
forks: 4
openIssues: 4
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-11-10T00:33:11Z"
lastCommitAt: "2026-08-15T04:05:27Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 57
maintainers: ["hy5528"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f86ec437edd866010c4aae2167eb6807f1e74d7efa76778125e2f4d8a7b9ff8/hy5528/build-docker"
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
