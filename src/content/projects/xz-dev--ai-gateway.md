---
repo: "xz-dev/AI-gateway"
name: "AI-gateway"
description: "Reusable Docker Compose AI gateway with CLIProxyAPI, Sub2API, Apache APISIX, and Cloudflare Tunnel."
readmeQualityOk: true
url: "https://github.com/xz-dev/AI-gateway"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [36, 30]
topics: ["ai-gateway", "apache-apisix", "cli-proxy-api", "cloudflare-tunnel", "docker-compose", "sub2api"]
stars: 31
forks: 5
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-26T02:57:06Z"
lastCommitAt: "2026-10-29T05:49:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 42
maintainers: ["xz-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/cb4859ae4ad13667b184eb0f735153f6a3bdb14935bf8bc9403f8ffdbd50527e/xz-dev/AI-gateway"
---

# AI Gateway

> [!IMPORTANT]
> You can use this project exactly as it is, but consider it merely a starting point—your imagination will surely enable you to create something even better than what I have built.
> This project is also my protest against the proliferation of AI gateways that lack any standardization.
>
> 这个项目你可以原样使用，也是抛砖引玉，你的想象力一定能创造比我更美好的东西。此外本项目是我对于 AI 网关满天飞但是却毫不规范的抗议。

A reusable Docker Compose stack that builds a self-owned AI gateway from separate modules: [CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI), [Sub2API](https://github.com/Wei-Shaw/sub2api), [AISIX](https://github.com/api7/aisix), [Apache APISIX](https://apisix.apache.org/), [ai-sse-keepalive-proxy](https://github.com/xz-dev/ai-sse-keepalive-proxy), [openai-api-cache-keeper](https://github.com/xz-dev/openai-api-cache-keeper), [Squid](https://www.squid-cache.org/), [socat](http://www.dest-unreach.org/socat/) and [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/). Each module keeps one job: provider credentials, client API keys, logical-model routing, public routing and Internet ingress stay separate. Components are cleanly separated…
