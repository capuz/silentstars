---
repo: "cxy0714/research-news"
name: "research-news"
description: "Personal customized research news system: daily arXiv + journal reading + lecture/conference summaries"
originalDescription: "个人定制的研究资讯系统：每日 arXiv+期刊阅读+讲座/会议总结"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/cxy0714/research-news"
homepage: "https://cxy0714.github.io/research-news/"
language: "Python"
languages: ["Python"]
languagePcts: [76]
topics: ["causal-inference", "paper-reading", "stastistics", "personal-assistant"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-15T17:27:21Z"
lastCommitAt: "2026-11-12T11:45:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 48
maintainers: ["cxy0714", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/00665f7615d9cef464f6d6b91b059ee258778cb41259597408072429def531c7/cxy0714/research-news"
discussionCount: 1
---

# research-news

A personalized research news system. It has two independent pipelines:

- **Daily arXiv + Hexagon**: Fetches new submissions from stat.ME / stat.TH / math.ST / econ.EM / astro-ph.IM, plus new entries from [Hexagon](https://hexagonmath.org) (often called "the arXiv of the AI era": a preprint repository for mathematics and theoretical CS that includes AI-generated text and tool attribution). Papers are scored by personal interest. Highly relevant papers are grouped by topic and used to generate Chinese abstracts, download PDFs, and produce LLM full-text close readings.
- **Quarterly journals**: Fetches the latest issue (or the most recent N issues) of JMLR / AoS / JASA / JRSSB / Biometrika, etc. It applies the same scoring, abstracts, topic grouping, and close readings.

Both pipelines use the SJTU LLM API (default deepseek-chat) and render to a MkDocs Material site.

## Quick start (Windows 11 / PowerShell)

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -e ".[docs]"

copy .env.example .env
# edit .env and fill in SJTU_API_KEY

python -m research_news.smoke_test    # verify the API connection
```

Interest configuration: edit…
