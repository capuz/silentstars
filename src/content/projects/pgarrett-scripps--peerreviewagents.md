---
repo: "pgarrett-scripps/PeerReviewAgents"
name: "PeerReviewAgents"
description: "Multi-agent LLM peer review: an editorial board for manuscripts. Eight specialist reviewers, an advocate/skeptic debate, an author rebuttal, and an editor's verdict, with full reports at every stage."
readmeQualityOk: true
url: "https://github.com/pgarrett-scripps/PeerReviewAgents"
homepage: "https://doi.org/10.5281/zenodo.21781895"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["langgraph", "llm", "multi-agent", "open-science", "peer-review", "python", "scholarly-publishing"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 6
createdAt: "2026-05-26T19:21:21Z"
lastCommitAt: "2026-11-12T11:41:14Z"
lastReleaseAt: "2026-11-12T05:29:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 58
maintainers: ["pgarrett-scripps"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3c07b9900f36f7068509e3b937bc8097d1e7523177fe88bcb8ed87657eeb908/pgarrett-scripps/PeerReviewAgents"
---

# PeerReviewAgents

Evidence-linked peer review of a manuscript PDF, on a Claude Code
subscription. One command imports the PDF into immutable source blocks and runs
the `pra` plugin over them: several core reviewers and six specialist tracks
work the paper in parallel and in isolation, then an editor pools what they
found into one package with a decision and a reason for every finding. There is
no API key — the models run on your signed-in Claude Code login.

Every finding carries the block it is anchored to and the exact quotation it
rests on. A finding whose quote does not match the manuscript does not ship.

```bash
peerreview review manuscript.pdf manuscript-review
```

That writes `manuscript-review/`, holding the imported manuscript, the run, and
`REVIEW.md` and `REVIEW.txt`.

## 0.9.0: the plugin is the only way to run a review

0.9.0 deleted the Python orchestration. Through 0.8.x a review was a Python
program that called a model CLI per reviewer: `ensemble`, `reviewer`,
`model_runtime`, the audited debate, six modes, three policies, `ReviewRequest`
and `run_review`. All of it is gone, along with the Codex provider, the web UI
and the standalone MCP server.

What runs a…
