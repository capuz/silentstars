---
repo: "sam-dumont/immich-video-memory-generator"
name: "immich-video-memory-generator"
description: "Turn your Immich photo library into video memory compilations: pick a person, pick a year (or don't), get a video with music and smart cuts"
readmeQualityOk: true
url: "https://github.com/sam-dumont/immich-video-memory-generator"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["ffmpeg", "immich", "memories", "photo-library", "python", "self-hosted", "video"]
stars: 8
forks: 2
openIssues: 14
closedIssues: 95
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-06T07:40:36Z"
lastCommitAt: "2026-08-18T04:08:02Z"
lastReleaseAt: "2026-03-11T17:11:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 87
undervaluedScore: 27
maintainers: ["sam-dumont"]
openGraphImageUrl: "https://opengraph.githubassets.com/a4676ff3a397bcd5130628e2af4c7b35cd92c577bf91de1214dc0292140ad4fa/sam-dumont/immich-video-memory-generator"
---

# Immich Memories

**Turn your [Immich](https://immich.app/) photo library into video memory compilations with music, title screens, and smart cuts.**

Immich Memories connects to your self-hosted Immich server, selects the best moments from your videos *and* photos, and compiles them into shareable memory videos. Year-end recaps, trip highlights, person spotlights, seasonal compilations, monthly highlights, "on this day" flashbacks -- all from a single tool.

> **Full documentation**: [sam-dumont.github.io/immich-video-memory-generator](https://sam-dumont.github.io/immich-video-memory-generator/)

### Reference Setup

```mermaid
graph LR
    subgraph "Apple M2 Pro – 16GB RAM"
        IM["Immich Memories<br/>Python + FFmpeg"]
        LLM["omlx (mlx-vlm)<br/>Qwen2.5-VL local"]
    end

    subgraph "K8s Cluster (GPUs)"
        ACE["ACE-Step 1.5<br/>T1000 8GB"]
        MG["MusicGen API<br/>GTX 1070 8GB"]
    end

    subgraph "Synology NAS"
        Immich["Immich v2 or v3<br/>Photos + Videos"]
    end

    IM -->|"API reads<br/>(download clips)"| Immich
    IM -->|"Vision analysis<br/>(clip scoring)"| LLM
    IM -->|"Background music<br/>(AI-generated)"| ACE
    ACE -.->|"fallback"|…
