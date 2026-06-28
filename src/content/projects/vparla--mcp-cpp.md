---
repo: "vparla/mcp-cpp"
name: "mcp-cpp"
description: "Model Context Protocol implementation in Pure C++20.  See https://modelcontextprotocol.io/docs/sdk for context"
url: "https://github.com/vparla/mcp-cpp"
language: "C++"
languages: ["C++"]
languagePcts: [97]
stars: 9
forks: 3
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2025-08-28T00:11:38Z"
lastCommitAt: "2026-06-28T00:00:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 59
maintainers: ["vparla"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb4be8485d1ddaa56be82b79cc4d0fe565c2c2a46606d8107544c2e0c8616867/vparla/mcp-cpp"
discussionCount: 1
---

# MCP C++ SDK

A C++20 SDK for the Model Context Protocol (MCP).

Cross-platform (Windows/macOS/Linux), CMake-based. 
See Docker-first instructions in [BUILD+TEST.MD](./BUILD+TEST.MD).

## Quick start

Docker-first workflow for all platforms. For details, see [BUILD+TEST.MD](./BUILD+TEST.MD).

- Linux/macOS:
```bash
docker buildx build -f Dockerfile.demo --target test --progress=plain --pull --load -t mcp-cpp-test .
docker buildx build -f Dockerfile.demo --target demo --progress=plain --pull --load -t mcp-cpp-demo .
docker run --rm --name mcp-cpp-demo --mount type=bind,src=$(pwd),dst=/work mcp-cpp-demo
```

- Windows (PowerShell via WSL2 Ubuntu):
```powershell
wsl -d Ubuntu -- bash -lc "cd /mnt/c/<path-to-repo>/mcp-cpp && docker buildx build -f Dockerfile.demo --target test --progress=plain --pull --load -t mcp-cpp-test ."
wsl -d Ubuntu -- bash -lc "cd /mnt/c/<path-to-repo>/mcp-cpp && docker buildx build -f Dockerfile.demo --target demo --progress=plain --pull --load -t mcp-cpp-demo ."
wsl -d Ubuntu -- bash -lc "docker run --rm --name mcp-cpp-demo --mount type=bind,src=/mnt/c/<path-to-repo>/mcp-cpp,dst=/work mcp-cpp-demo"
```

## API Reference

This section summarizes the primary…
