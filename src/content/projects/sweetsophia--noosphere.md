---
repo: "SweetSophia/noosphere"
name: "noosphere"
description: "A universal memory and wiki knowledge layer for AI agents — structured enough for automation, readable enough for humans."
url: "https://github.com/SweetSophia/noosphere"
homepage: "https://noosphere-memory.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["agentic-memory", "agentic-rag", "agentic-workflow", "ai", "ai-agent", "ai-skill", "document-management", "memory-system", "wiki"]
stars: 22
forks: 1
openIssues: 0
closedIssues: 47
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-04-11T06:53:39Z"
lastCommitAt: "2026-06-26T06:46:30Z"
lastReleaseAt: "2026-05-22T11:44:50Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 54
maintainers: ["SweetSophia", "cybercylena", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/66ddd92c407dd2481ca26e7620a180b7d7df703dfc8d5595fd8747feb30bcc70/SweetSophia/noosphere"
discussionCount: 1
---

# Noosphere

Noosphere is a self-hosted knowledge and memory layer for AI agents and humans.  
Agents use it to recall, save, and organize durable and detailed project knowledge; humans use
the same data as a browsable Markdown wiki with topics, revisions, scoped access,
and Obsidian-friendly export/import.  

**All agent systems and humans access the same memory data. You can start in Openclaw and continue in OpenCode and add new data yourself via web browser.** 
The system is database PostgreSQL based with Redis for fast recall. Markdown import and export is possible by the user and agents.
 

It sits between a chat transcript and a full documentation site:

- **Agent memory**: recall relevant project context, save draft memory
  candidates, and promote useful facts into curated articles.
- **Human wiki**: browse, edit, review, restore, and search Markdown articles.
- **Scoped access**: give agents or users narrow API keys for only the knowledge
  they should read or write.
- **Integration-first design**: OpenClaw, Hermes Agent, Opencode, Kilo Code, and
  any REST client can use the same Noosphere instance.

The old long-form README is preserved at…
