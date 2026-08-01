---
repo: "fathom-lab/styxx"
name: "styxx"
description: "The measurement layer for machine minds. Reads what a model means and whether it holds the truth; certifies every claim re-runs. meaning_diff + OATH certify + mind profiles + live grounding signal + the cognometric instruments. No torch, no LLM in the loop for the core; MIT, open at the core."
readmeQualityOk: true
url: "https://github.com/fathom-lab/styxx"
homepage: "https://styxx-org.netlify.app"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["ai-safety", "llm", "python", "guardrails", "hallucination-detection", "llm-safety", "mit-license", "rag", "cognometry", "interpretability"]
stars: 13
forks: 1
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-04-13T17:03:39Z"
lastCommitAt: "2026-08-01T06:13:47Z"
lastReleaseAt: "2026-04-22T22:17:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 53
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/49eece09023cbf7cf8fe072f78356a2e42646422dcfb6ec20f69186d53bf0bef/fathom-lab/styxx"
---

```
   ███████╗████████╗██╗   ██╗██╗  ██╗██╗  ██╗
   ██╔════╝╚══██╔══╝╚██╗ ██╔╝╚██╗██╔╝╚██╗██╔╝
   ███████╗   ██║    ╚████╔╝  ╚███╔╝  ╚███╔╝
   ╚════██║   ██║     ╚██╔╝   ██╔██╗  ██╔██╗
   ███████║   ██║      ██║   ██╔╝ ██╗██╔╝ ██╗
   ╚══════╝   ╚═╝      ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝

           · · · nothing crosses unseen · · ·
```

### the measurement layer for machine minds

</div>

styxx is a cognitive-integrity SDK for LLM agents. it reads the cognitive state of a generation —
drift, confabulation, refusal, sycophancy, deception signature, goal drift — from the text and the
token stream, scores it against calibrated instruments with published AUCs, and certifies that every
number it reports can be re-run from a committed receipt. it is built for engineers shipping agents
who need to know when an output flatters, fabricates, loops, or quietly stops matching its plan —
before it reaches a user. the drop-in is one line: `from styxx import OpenAI` (same interface as
`openai.OpenAI`, every response gains a `.vitals` read; `from styxx import Anthropic` likewise, on
text-heuristic vitals — the Anthropic API exposes no logprobs). the base install carries no torch,
no GPU requirement, and…
