---
repo: "mojtaba-arvin/video-service"
name: "video-service"
description: "Python Video Streaming microervice | supports HLS, MPEG-DASH and HLS with fmp4 segments (CMAF), this project uses gRPC protocol for communication and S3-compatible object storage. The multi-stage dockerfile of project uses Python3.9.2 and FFmpeg4.1"
readmeQualityOk: true
url: "https://github.com/mojtaba-arvin/video-service"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["python", "video", "hls", "ffmpeg", "mpeg-dash", "grpc", "docker-compose", "video-streaming", "vod", "transcoding"]
stars: 38
forks: 5
openIssues: 1
closedIssues: 0
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2021-02-21T16:42:37Z"
lastCommitAt: "2026-11-17T14:39:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 22
maintainers: ["mojtaba-arvin"]
openGraphImageUrl: "https://opengraph.githubassets.com/b7370ce263af5f09ccb678fc3649e877bd7dd45844d2e00344043649a1cba2f3/mojtaba-arvin/video-service"
discussionCount: 1
---

# **[Python Video Streaming Microservice](https://github.com/mojtaba-arvin/video-service)**

> **Project direction:** evolve the legacy VOD service into a portable, AI-native, cost-aware video orchestration layer. The repository currently contains the original gRPC/Celery/FFmpeg pipeline; durable orchestration, MCP, edge execution, cost intelligence, and player QoE are target capabilities, not claims about the current implementation.

**Architecture and delivery docs:** [Product vision](https://github.com/mojtaba-arvin/video-service/blob/HEAD/docs/architecture/vision.md) · [Verified current state](https://github.com/mojtaba-arvin/video-service/blob/HEAD/docs/architecture/current-state.md) · [Outcome backlog](https://github.com/mojtaba-arvin/video-service/blob/HEAD/docs/roadmap/README.md) · [Documentation index](https://github.com/mojtaba-arvin/video-service/blob/HEAD/docs/README.md)

Python video streaming microservice, allows you to change the number of qualities or formats,
to reduce processing and storage space costs.

For some delivery profiles, HLS with fragmented MP4 (fMP4/CMAF) can reduce duplicated packaging or storage compared with maintaining separate HLS and DASH…
