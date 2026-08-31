---
repo: "openmrs/openmrs-module-chartsearchai"
name: "openmrs-module-chartsearchai"
description: "AI-powered chart search module for OpenMRS"
readmeQualityOk: true
url: "https://github.com/openmrs/openmrs-module-chartsearchai"
language: "Java"
languages: ["Java"]
languagePcts: [94]
stars: 5
forks: 11
openIssues: 33
closedIssues: 117
watchers: 1
contributors: 155
recentReleases: 0
createdAt: "2026-03-10T22:21:53Z"
lastCommitAt: "2026-08-31T09:59:50Z"
lastReleaseAt: "2026-05-31T10:56:30Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 94
undervaluedScore: 67
maintainers: ["dkayiwa"]
openGraphImageUrl: "https://opengraph.githubassets.com/734df21de404c7e4b6f23467139ae7e886db130370714edffd349abe271f6266/openmrs/openmrs-module-chartsearchai"
---

# Chart Search AI Module

An OpenMRS module that lets clinicians ask natural language questions about a patient's chart and get answers with source citations.

For project background, community discussion, and roadmap, see the [wiki project page](https://openmrs.atlassian.net/wiki/spaces/projects/pages/373325839/Chart+Search+aka+ChartSearchAI).

The standalone download above includes the backend module, frontend ESM, and the following AI models — ready to run:

- **LLM**: [Gemma 4 E4B Instruct (Q4_K_M)](https://huggingface.co/unsloth/gemma-4-E4B-it-GGUF) — ~5 GB, the module's default model, for answering clinical questions. (A larger Gemma 4 26B MoE bundle can be built via the workflow's `gguf_model_url` input.)
- **Retrieval + embedding**: the [querystore module](https://github.com/openmrs/openmrs-module-querystore) with [e5-base-v2](https://huggingface.co/intfloat/e5-base-v2) (~440 MB ONNX) — querystore is a required module and owns the retrieval path. chartsearchai no longer ships its own embedder; retrieval and citation grounding both use querystore's model.

> **Before running the download, see [Standalone platform notes](#standalone-platform-notes)** — in particular the…
