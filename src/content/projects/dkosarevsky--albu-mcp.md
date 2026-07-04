---
repo: "dKosarevsky/albu-mcp"
name: "albu-mcp"
description: "MCP server for AlbumentationsX image augmentation workflows"
readmeQualityOk: true
url: "https://github.com/dKosarevsky/albu-mcp"
homepage: "https://pypi.org/project/albumentationsx-mcp/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai", "augmentation", "mcp", "ai-tools", "albumentations", "computer-vision", "image-augmentation", "mcp-server", "model-context-protocol", "python"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-13T07:52:15Z"
lastCommitAt: "2026-07-04T22:20:12Z"
lastReleaseAt: "2026-06-13T19:03:39Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 60
maintainers: ["dKosarevsky"]
openGraphImageUrl: "https://opengraph.githubassets.com/5ba897f5cc3c58f7b2423326335d6e0d7b6bae9bad3d8401e50145f26a9edaeb/dKosarevsky/albu-mcp"
discussionCount: 0
---

# AlbumentationsX MCP

Model Context Protocol server for [AlbumentationsX](https://github.com/albumentations-team/AlbumentationsX): transform
discovery, pipeline validation, deterministic previews, feedback loops, and reproducible exports for computer vision.

## Purpose

AlbumentationsX MCP is a thin, typed MCP layer around existing AlbumentationsX primitives. It helps MCP hosts:

- discover transforms and schemas from `albu-spec`;
- recommend and validate augmentation pipelines;
- render local batch previews and compare preview runs;
- record concrete feedback such as `too_noisy:high`;
- export accepted pipelines and review reports.

The server does not execute arbitrary Python, fetch remote images, overwrite datasets, or train models. Local preview
access is bounded by `--allowed-root`, and generated artifacts are written under `--artifact-root`.

## Quick Start

Run the published server:

```bash
uvx --from albumentationsx-mcp albumentationsx-mcp
```

For local development:

```bash
uv sync --all-extras --dev
uv run albumentationsx-mcp
```

For preview work, scope filesystem access explicitly:

```bash
uvx --from albumentationsx-mcp albumentationsx-mcp \
  --allowed-root…
