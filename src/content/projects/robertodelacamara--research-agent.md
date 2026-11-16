---
repo: "RobertoDeLaCamara/Research-Agent"
name: "Research-Agent"
description: "Autonomous research agent — 10 sources in parallel, self-correcting loop, exports PDF/Word/HTML. Powered by LangGraph + Ollama."
readmeQualityOk: true
url: "https://github.com/RobertoDeLaCamara/Research-Agent"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["ai-agent", "artificial-intelligence", "autonomous-agent", "chromadb", "langchain", "langgraph", "llm", "multi-source-search", "ollama", "python"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-01-10T11:32:32Z"
lastCommitAt: "2026-11-16T11:50:24Z"
lastReleaseAt: "2026-04-03T13:23:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 91
undervaluedScore: 65
maintainers: ["RobertoDeLaCamara", "robcamgar"]
openGraphImageUrl: "https://opengraph.githubassets.com/848094748811c6770768d1df49d181c573687780a63b3e5455cdf6e96033110c/RobertoDeLaCamara/Research-Agent"
fundingLinks: ["KO_FI:https://ko-fi.com/bobelsilencioso"]
discussionCount: 4
---

---
title: Research Agent
emoji: 🔍
colorFrom: blue
colorTo: indigo
sdk: docker
app_port: 7860
pinned: false
short_description: LangGraph agent — 10 sources, fact-checking, memory, MCP
tags:
  - langgraph
  - rag
  - streamlit
  - llm
  - agent
license: mit
---

# Research-Agent

## 🌟 Key Features

Research-Agent is a LangGraph-based autonomous agent that searches **10 sources in parallel** (web via DuckDuckGo, arXiv, Wikipedia, Semantic Scholar, GitHub, Hacker News, Stack Overflow, Reddit, YouTube, local RAG), fact-checks the synthesis and flags dubious claims, then exports a cited report with word count and reading time in PDF, Word, Markdown, or HTML — all through a Streamlit UI backed by a local Ollama LLM. Cross-session memory prevents re-investigating past topics.

## Features

- **Parallel Multi-Source Research**: Web, Wikipedia, arXiv, Semantic Scholar, GitHub, Hacker News, Stack Overflow, Reddit, YouTube, and local RAG -- all execute concurrently via `ThreadPoolExecutor`.
- **Research Personas**: Generalist, Market Analyst, Software Architect, Scientific Reviewer, Product Manager, or News Editor -- each shapes source selection and analysis style.
- **Local Knowledge…
