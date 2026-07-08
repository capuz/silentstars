---
repo: "dealfluence/adeu"
name: "adeu"
description: "docx ↔ LLM translator. Projects .docx to Markdown for editing. Projects edits back to OOXML as tracked changes. Python and Node.js implementations."
readmeQualityOk: true
url: "https://github.com/dealfluence/adeu"
homepage: "https://adeu.ai"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [61, 33]
topics: ["ai-agents", "document-automation", "docx-converter", "legaltech", "llm-tools", "mcp-server", "python-library", "redline", "gemini-cli-extension"]
stars: 120
forks: 16
openIssues: 0
closedIssues: 20
watchers: 2
contributors: 4
recentReleases: 7
createdAt: "2025-12-30T19:38:23Z"
lastCommitAt: "2026-07-08T05:41:53Z"
lastReleaseAt: "2026-05-09T18:58:43Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 100
undervaluedScore: 40
maintainers: ["mkorpela", "Git-Uzair", "claude"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1125472138/e8d2df4a-6948-4c85-a744-bb1bea318a4a"
---

# Adeu: Track Changes for the LLM era

**LLMs speak Markdown; reviewers speak "Track Changes."**

Adeu is a **docx ↔ LLM translator**: a Model Context Protocol (MCP) server (Python and Node.js implementations) and accompanying SDKs that act as a **Virtual DOM for Microsoft Word**. It provides a two-way abstraction layer that lets AI agents freely edit document text without destroying the underlying formatting or complex DOCX XML.

While standard libraries like `python-docx` excel at generating documents from scratch, they fail at non-destructive redlining. Adeu solves this by translating `.docx` files into a token-efficient Markdown representation. This frees AI agents to focus entirely on document semantics instead of wasting tokens wrestling with OpenXML.

Adeu acts as an **intelligent proxy**, processing AI edits as safe, atomic transactions:

1. **Read:** Translates the document (from disk or live Word) into LLM-friendly **[CriticMarkup](https://fletcher.github.io/MultiMarkdown-6/syntax/critic.html)** with a **Semantic Appendix** of defined terms, cross-references, and likely typos. The agent starts with semantic structure, not raw data.
2. **Validate:** Acts as a strict…
