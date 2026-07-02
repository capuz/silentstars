---
repo: "AnshMNSoni/Disee"
name: "Disee"
description: "🌐 A Simple Distributed Query Processing Engine"
url: "https://github.com/AnshMNSoni/Disee"
homepage: "https://disee.xyz"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [54, 33]
topics: ["cloud", "distributed-systems", "docker-compose", "python", "spark", "aws", "deployed"]
stars: 17
forks: 1
openIssues: 4
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-22T02:56:04Z"
lastCommitAt: "2026-07-02T06:35:30Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "funded"]
healthScore: 74
undervaluedScore: 34
maintainers: ["AnshMNSoni", "pdeu-princepatel"]
openGraphImageUrl: "https://opengraph.githubassets.com/a4b6d6bc8989f671ff0d0db4f296e1d4d388ae4f980219af19c40f9b508c823e/AnshMNSoni/Disee"
fundingLinks: ["GITHUB:https://github.com/AnshMNSoni", "PATREON:https://patreon.com/AnshMNSoni", "BUY_ME_A_COFFEE:https://buymeacoffee.com/anshsoni70x", "CUSTOM:https://anshmnsoni.in", "CUSTOM:https://linkedin.com/in/anshmnsoni"]
discussionCount: 0
---

</div>

# 🔍 Distributed Search Engine (DSE)

A high-performance, containerized, distributed search engine built with **FastAPI** and **Docker**. This project implements a scalable architecture for dynamically fetching results from external sources (Wikipedia, StackOverflow), partitioning the data into chunks, and distributing them across multiple worker nodes for parallel processing and aggregation.

## 🏗️ System Architecture

<br>

The project is structured around a **Gateway-Worker** pattern. The central Gateway fetches real-time data from external APIs (Wikipedia, StackOverflow), partitions the content, and distributes it to multiple worker nodes that process and attribute the data in parallel.

### Phase 1: Single Node (Single Machine)
Initial implementation focused on a standalone node managing its own inverted index and search logic.

### Phase 2: Multiple Nodes (Single Machine)
Introduction of the **Gateway Service**, which orchestrates search queries across multiple containers running on the same host via Docker Compose.

### Phase 3: Static Nodes (Multiple Machine) (Currently 3 static nodes)
The goal of Phase 3 is to achieve full distribution across multiple physical or…
