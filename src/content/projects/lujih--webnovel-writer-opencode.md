---
repo: "lujih/webnovel-writer-opencode"
name: "webnovel-writer-opencode"
description: "This project is an OpenCode version adapted from webnovel-writer. It lets users run a long-form web novel creation system in OpenCode, addresses the \"forgetting\" and \"hallucination\" problems of AI writing, and supports serialized creation at the scale of 2 million characters."
originalDescription: "本项目是基于webnovel-writer 改编的 OpenCode 版本，目标是让用户在OpenCode 使用长篇网文创作系统，解决 AI 写作中的「遗忘」和「幻觉」问题，支持 200 万字量级 连载创作。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/lujih/webnovel-writer-opencode"
homepage: "https://wnw.cszxorx.dpdns.org"
language: "Python"
languages: ["Python"]
languagePcts: [88]
topics: ["agents", "ai-writing", "chinese-novel", "long-form", "novel", "opencode", "opencode-plugin", "rag", "skills", "storytelling"]
stars: 226
forks: 38
openIssues: 13
closedIssues: 7
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-10T15:37:37Z"
lastCommitAt: "2026-11-01T10:44:09Z"
lastReleaseAt: "2026-05-11T15:19:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 29
maintainers: ["lujih", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e08d920cb2309291ffc49ef0717c47095883614ba8972daacd2c51a7aeb6771/lujih/webnovel-writer-opencode"
discussionCount: 2
---

# Webnovel Writer for OpenCode — AI Long-Form Web Novel Creation System

## 1. Introduction

In the wave of AI-assisted writing, an excellent creation system is like a lighthouse, guiding authors to keep their sense of direction and consistency through a long serialized journey. As Antoine de Saint-Exupéry wrote in *The Little Prince*: "One can only see rightly with the heart. The true essence of things is invisible to the naked eye."

### 1.1 Why We Need This Project

The core challenge of long-form web novel writing is not "writing one chapter" but "remembering the chapter-one foreshadowing when you reach chapter two hundred." Traditional AI writing tools face three fundamental dilemmas:

| Dilemma | Manifestation | This Project's Response |
|---------|---------------|-------------------------|
| **Forgetting** | AI forgets earlier settings, character relationships, and planted foreshadowing | 3-layer RAG context + story contract engine + SSOT event sourcing (foreshadowing / entities / world rules all projected) |
| **Hallucination** | AI fabricates settings out of thin air and contradicts itself | Graph-RAG entity relationship graph + Code Checker hard-constraint blocking |
|…
