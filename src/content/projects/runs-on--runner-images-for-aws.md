---
repo: "runs-on/runner-images-for-aws"
name: "runner-images-for-aws"
description: "GitHub Actions Runner images for AWS"
url: "https://github.com/runs-on/runner-images-for-aws"
homepage: "https://runs-on.com/"
language: "PowerShell"
languages: ["PowerShell", "Shell"]
languagePcts: [59, 34]
topics: ["aws", "github-actions", "self-hosted-runners"]
stars: 41
forks: 18
openIssues: 10
closedIssues: 24
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2023-11-16T14:31:08Z"
lastCommitAt: "2026-07-01T07:06:08Z"
lastReleaseAt: "2025-02-20T12:20:25Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 55
maintainers: ["crohr", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/5443367209d203de9cfaa6ec2810bec2822bab2ad5026b0e47512187b0d09c65/runs-on/runner-images-for-aws"
---

# GitHub Actions runner images for AWS

GitHub Actions Runner images for AWS, to be used with [RunsOn](https://runs-on.com/?ref=runner-images-for-aws), or for your own usage.

Official images are replicated and published every 15 days.

## Supported images

### Linux

Those images are very close to 1-1 compatible with official GitHub Actions runner images. Some legacy or easily available through actions software has been removed to ensure faster boot times and lower disk usage.

* `ubuntu22-full-x64`
* `ubuntu22-full-arm64`
* `ubuntu24-full-x64`
* `ubuntu24-full-arm64`

### Windows

These images are being aligned with upstream "full" Windows tooling (including Visual Studio/C++ and Hyper-V-related components where supported). Some legacy or easily available through actions software may still be removed to ensure faster boot times and lower disk usage. Availability of virtualization-dependent components can vary based on EC2 instance capabilities and build tooling support.

* `windows22-full-x64`
* `windows25-full-x64`
* `windows25-gpu-x64`

### GPU

Those use the corresponding base images.
Linux GPU images include NVIDIA GPU drivers, CUDA toolkit, and container toolkit.
Windows…
