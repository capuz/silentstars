---
repo: "will-rice/lipsync-papers"
name: "lipsync-papers"
description: "A repo for collecting papers related to lipsync."
readmeQualityOk: true
url: "https://github.com/will-rice/lipsync-papers"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["lipsync", "lip-sync", "lip-synchronization", "lip-syncing", "paper-list", "research"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-07T01:07:26Z"
lastCommitAt: "2026-07-05T20:55:55Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 51
maintainers: ["github-actions[bot]", "will-rice", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd7a9df1ad05fb77f2eb446d1def96a047d6109b6e94159b3faf743a5361795d/will-rice/lipsync-papers"
---

# lipsync-papers

A curated, automatically-updated collection of papers on **lip sync**, talking-head synthesis, audio-driven face animation, and related topics — starting from [Wav2Lip](https://arxiv.org/abs/2008.10010) (2020) and growing every week.

Beyond a reading list, this repo is built to be **browsed by LLMs**. Every paper is mirrored as a markdown file with structured YAML frontmatter and inline citation links that resolve to sibling files in the corpus when the cited work is here, or to arXiv / DOI otherwise. Point an agent at [`papers/README.md`](https://github.com/will-rice/lipsync-papers/blob/HEAD/papers/README.md) and it can crawl the literature graph the same way you would.

## How it works

* Papers are sourced from [arXiv](https://arxiv.org/), [Semantic Scholar](https://www.semanticscholar.org/), and [Papers With Code](https://paperswithcode.com/) via their public APIs.
* A [GitHub Actions workflow](https://github.com/will-rice/lipsync-papers/blob/HEAD/.github/workflows/fetch_papers.yml) runs **daily at 06:00 UTC** to pull papers submitted in the previous 8 days.
* Results are filtered with a negative-keyword blacklist plus an ML signal check and a positive…
