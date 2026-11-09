---
repo: "OICWS/Coscribe"
name: "Coscribe"
description: "Coscribe is a local, user-friendly, highly agentic working assistant."
readmeQualityOk: true
url: "https://github.com/OICWS/Coscribe"
homepage: "https://oicws.github.io/Coscribe/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [74, 26]
topics: ["agentic-ai", "file-system", "office-automation", "agent", "agentic-workflow", "desktop-agent", "langchain", "langgraph"]
stars: 37
forks: 0
openIssues: 24
closedIssues: 74
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-09-11T01:32:38Z"
lastCommitAt: "2026-11-09T03:30:19Z"
lastReleaseAt: "2026-10-30T05:09:17Z"
status: "newborn"
tags: ["hidden_gem", "under_pressure"]
healthScore: 95
undervaluedScore: 43
maintainers: ["OICWS", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2df041f3a552f3092ced921c2bebc9d5c212accf0e6c6a35d11ce9747918b9ae/OICWS/Coscribe"
discussionCount: 1
---

# Coscribe

A local, user-friendly assistant for office work. It reads and writes your
files, produces Word, Excel, PowerPoint and PDF documents, makes Docs, slide
decks, designs and dashboards you edit beside the conversation, uses the web
and your tools, and can repeat work on a schedule. It needs only a model API
key.

Website: https://oicws.github.io/Coscribe/

- **Documents first.** High-quality `.pptx`, `.docx` and `.xlsx` output, checked
  by rendering the pages.
- **Your models.** Anthropic, OpenAI and Gemini directly, and any
  OpenAI-compatible API (DeepSeek, Kimi, GLM, local runners).
- **Connectors and skills.** Hosted services you sign in to once in your own
  browser, and skills (folders of instructions and files) you can read before
  adding.
- **You stay in control.** Permission modes, approvals for risky tools, and
  per-tool settings for each connector.

## Run it

```bash
cd office-agent
python3 -m venv .venv && source .venv/bin/activate   # Windows: .\.venv\Scripts\Activate.ps1
pip install -e ".[dev,web]"
pip install -U "google-genai>=2.13.0,<2.14.0"
cp .env.example .env                                   # add a model API key
(cd frontend && npm install && npm…
