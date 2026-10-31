---
repo: "AmbitiousJun/live-server"
name: "live-server"
description: "An HTTP live TV streaming service"
originalDescription: "一个 HTTP 电视直播服务"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/AmbitiousJun/live-server"
language: "Go"
languages: ["Go"]
languagePcts: [90]
topics: ["docker-compose", "iptv", "redirect", "reverse-proxy"]
stars: 23
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-10-06T14:07:35Z"
lastCommitAt: "2026-10-31T15:59:02Z"
lastReleaseAt: "2024-11-08T02:25:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 52
maintainers: ["AmbitiousJun"]
openGraphImageUrl: "https://opengraph.githubassets.com/eead08b064e20f37296e22dbd523b5d9a1b0b7a86860ea7480a33eeeec7bb5ae/AmbitiousJun/live-server"
---

An HTTP live TV streaming service

## DockerCompose Installation

docker-compose.yml:

```yaml
version: "3.1"
services:
  live-server:
    image: ambitiousjun/live-server:latest
    environment:
      - TZ=Asia/Shanghai
      - GIN_MODE=release
    container_name: live-server
    volumes:
      - ./data:/app/data
    ports:
      - 5666:5666
```

Run:

```shell
docker-compose up -d
```

View runtime logs:

```shell
docker logs -f live-server -n 1000
```

## Running the Binary Directly

Download the corresponding binary file from the release page.

Run in the terminal:

```shell
live-server -prod=true
```

The program runs on port `5666` by default. To customize the port:

```shell
live-server -prod=true -p 8880
```

Run as a daemon in the background:

```shell
nohup live-server -prod=true -p 8880 > "./app.log" 2>&1 &
```

Stop the process on port `8880`:

```shell
lsof -ti:8880 | xargs -r kill -9
```

## Buy me a 9.9💰 Luckin Coffee☕️
