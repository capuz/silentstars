---
repo: "davidjurgens/potato"
name: "potato"
description: "potato: the portable annotation tool"
readmeQualityOk: true
url: "https://github.com/davidjurgens/potato"
homepage: "https://www.potatoannotator.com/"
language: "Python"
languages: ["Python"]
languagePcts: [83]
topics: ["agentic-ai", "agentic-workflow", "agents", "annotation", "annotation-tool", "audio", "data-labeling", "image", "labeling-tool", "nlp"]
stars: 420
forks: 73
openIssues: 1
closedIssues: 93
watchers: 7
contributors: 27
recentReleases: 0
createdAt: "2020-04-23T16:49:28Z"
lastCommitAt: "2026-09-05T07:47:34Z"
lastReleaseAt: "2026-03-17T20:05:47Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 98
undervaluedScore: 39
maintainers: ["davidjurgens", "Eyecatch3r"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/258270256/9b6aad0f-6d79-4768-ba93-d27369362341"
discussionCount: 1
---

# Potato: The Portable Annotation Tool

**Potato** is a free, self-hosted annotation platform for NLP, Agentic, GenAI, and qualitative research. Annotate text, audio, video, images, documents, agent traces, and more — or run a full qualitative data analysis (QDA) workflow with a living codebook, memos, and cases. Configured entirely through YAML. No coding required.

**[Try the live demo on HuggingFace Spaces](https://huggingface.co/spaces/Blablablab/agent-trace-evaluation)** — no installation needed. More at **[www.potatoannotator.com](https://www.potatoannotator.com)**.

---

## Quick Start

```bash
pip install potato-annotation
# The examples/ folder ships with the source repo (see "run from source" below).
# After a PyPI install, clone the repo for the examples, or point `potato start`
# at your own config (see docs/quick-start.md).
potato start examples/classification/single-choice/config.yaml -p 8000
```

Or run from source (recommended to get the `examples/`):

```bash
git clone https://github.com/davidjurgens/potato.git
cd potato && pip install -r requirements.txt
python potato/flask_server.py start examples/classification/single-choice/config.yaml -p 8000
```

Open…
