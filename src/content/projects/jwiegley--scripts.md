---
repo: "jwiegley/scripts"
name: "scripts"
description: "Various and sundry shell scripts used on my system"
readmeQualityOk: true
url: "https://github.com/jwiegley/scripts"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [69, 31]
stars: 21
forks: 6
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2018-01-28T09:44:16Z"
lastCommitAt: "2026-07-30T06:06:38Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 78
undervaluedScore: 57
maintainers: ["jwiegley"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b73020484e22b72811f61fda986077d83d4ef13187689c2ad64e8d88927e1c5/jwiegley/scripts"
---

# Personal Scripts

A personal collection of ~200 utility scripts and automation tools, primarily written in Bash and Python, designed for system administration, development workflows, and personal automation on macOS/Darwin systems with NixOS integration.

## Statistics

- **Total Scripts:** 200
- **Language Distribution:** 
  - Bash: 195 scripts (97.5%)
  - Python: 5 scripts (2.5%)
- **Script Types:** Executable scripts, shell scripts (.sh), Python scripts (.py), Awk scripts (.awk)

---

## Categories

### 1. AI/LLM Tools (14 scripts)

Tools for interacting with AI models and language learning platforms.

| Script | Purpose |
|--------|---------|
| `ai` | Main Claude interface wrapper with model selection (sonnet/opus) and MITM proxy support |
| `ask` | LLM query interface supporting multiple providers (OpenAI, Anthropic, OpenRouter, Perplexity) with customizable endpoints |
| `ask-litellm` | LiteLLM proxy interface for accessing local/remote models |
| `claude-auth` | Authentication helper for Claude via pass password manager |
| `claude-sandbox` | Runs Claude in a sandboxed firejail environment with filesystem isolation |
| `hf` | Hugging Face model utilities wrapper |
|…
