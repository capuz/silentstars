---
repo: "YeyingLab/StoryEngine"
name: "StoryEngine"
description: "An evidence-first story-to-video production engine."
originalDescription: "An evidence-first story-to-video production engine."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/YeyingLab/StoryEngine"
homepage: "https://yeyinglab.github.io/StoryEngine/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 19
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-26T18:11:46Z"
lastCommitAt: "2026-11-23T10:16:05Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 61
undervaluedScore: 15
maintainers: ["wwwTaylor"]
openGraphImageUrl: "https://opengraph.githubassets.com/f0ec8d9ae9a30e1a932469947bdaeee85419146ca70c038377d7f695f5a44915/YeyingLab/StoryEngine"
---

# StoryEngine

StoryEngine is a story-to-video engine that provides story planning, reference asset generation, space and camera-position solving, shot-by-shot generation and evaluation, and final video assembly.

Version: `1.2.0` · Python: `>= 3.12`

## Project Structure

```text
StoryEngine/
├── story_engine/              # Core Python source code
├── examples/
│   └── tiny_request.yaml      # Example story and Provider configuration
├── README.md
├── pyproject.toml             # Installation config, dependencies, and command entry points
├── uv.lock                    # Locked dependency versions
└── .gitignore
```

## Installation

Requires Python 3.12 or later, [uv](https://docs.astral.sh/uv/), FFmpeg and FFprobe, and available text, image, video, and evaluation Providers.

```bash
git clone https://github.com/YeyingLab/StoryEngine.git
cd StoryEngine
uv sync
uv run story-engine doctor
```

`doctor` checks whether FFmpeg and FFprobe are available.

## Configuration and Running

Copy the example as your local configuration:

```bash
cp examples/tiny_request.yaml tiny_request.local.yaml
```
