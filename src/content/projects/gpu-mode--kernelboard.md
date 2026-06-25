---
repo: "gpu-mode/kernelboard"
name: "kernelboard"
description: "kernelboard is the webapp for https://www.gpumode.com"
url: "https://github.com/gpu-mode/kernelboard"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [54, 33]
stars: 17
forks: 13
openIssues: 0
closedIssues: 23
watchers: 1
contributors: 19
recentReleases: 0
createdAt: "2025-03-28T20:54:42Z"
lastCommitAt: "2026-06-25T06:40:37Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 95
undervaluedScore: 67
maintainers: ["msaroufim", "Jack-Khuu", "yangw-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/a41a5174fa8ac9c3664bd34986320bf4ee6f49d5e9cde83bb28e9c874fa70750/gpu-mode/kernelboard"
---

# Kernelboard

This is the repo for Kernelboard, the webapp front end for GPU MODE. Kernelboard
is a friendly source for information about GPU kernels submitted to the Discord
cluster manager, and contains helpful links related to GPU MODE.

## Development environment

Here's how to get started:

### Quick Start (News Tab Only)

If you just want to test the news section without setting up the full database:

1. Create a minimal `.env` file in the root directory:

   ```env
   SECRET_KEY=dev
   FLASK_DEBUG=1
   DATABASE_URL=postgresql://dummy:dummy@localhost/dummy
   REDIS_URL=redis://localhost:6379
   DISCORD_CLUSTER_MANAGER_API_BASE_URL=http://dummy
   DISCORD_CLIENT_ID=dummy
   DISCORD_CLIENT_SECRET=dummy
   ```

2. Set up Python environment:

   ```shell
   python3 -m venv .venv
   source .venv/bin/activate
   pip install -r requirements.txt
   ```

3. In one terminal, run Flask:

   ```shell
   flask --app kernelboard run --debug
   ```

   **macOS users:** Port 5000 is often used by AirPlay Receiver. If you see "Address already in use", either disable AirPlay Receiver in System Settings, or use a different port:

   ```shell
   flask --app kernelboard run --no-debugger --port…
