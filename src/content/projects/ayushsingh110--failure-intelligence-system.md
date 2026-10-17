---
repo: "AyushSingh110/Failure_Intelligence_System"
name: "Failure_Intelligence_System"
description: "An AI observability system that watches how models behave, detects when they fail, and explains why it happened. It tracks uncertainty and inconsistencies, groups similar mistakes, and turns them into preventive “auto-vaccines” to reduce overconfident errors and make AI systems more reliable."
readmeQualityOk: true
url: "https://github.com/AyushSingh110/Failure_Intelligence_System"
homepage: "https://failure-intelligence-system.pages.dev"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook", "Python"]
languagePcts: [49, 42]
stars: 5
forks: 0
openIssues: 10
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-02-23T11:27:01Z"
lastCommitAt: "2026-10-17T07:59:13Z"
lastReleaseAt: "2026-08-10T03:59:05Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 76
undervaluedScore: 49
maintainers: ["AyushSingh110"]
openGraphImageUrl: "https://opengraph.githubassets.com/8844fdfa513d9e18cab6eae90b13cfb97f47ac79dcc02ea04c3d9f0af1467e5b/AyushSingh110/Failure_Intelligence_System"
discussionCount: 4
---

# Failure Intelligence Engine (FIE)

**A 23M-parameter offline LLM guardrail — and an honest measurement of why guardrails fail.**

## ▶ [Watch the 2-minute walkthrough: how FIE works](https://github.com/AyushSingh110/Failure_Intelligence_System/blob/main/docs/media/fie-explainer.mp4)

Covers the problem, the pipeline step by step (quick lookup → 12 parallel layers →
weighted vote and routing), what happens after the model answers, the results, and
where FIE still fails.

---

## ▶ Try it right now — no install, no signup

### **[ayush-singh9791-fie.hf.space](https://ayush-singh9791-fie.hf.space)**

Paste a prompt and watch all twelve detection layers score it in ~33 ms.
Attack examples and benign ones are preloaded — including the "safe but scary"
prompts FIE gets wrong, because the over-refusal problem below is real and worth
seeing for yourself.

The same URL serves the API:

```bash
curl https://ayush-singh9791-fie.hf.space/health        # liveness
curl https://ayush-singh9791-fie.hf.space/ready         # readiness (503 until models warm)
curl https://ayush-singh9791-fie.hf.space/health/deep   # every dependency, per component
```

| Endpoint | What |
| --- | --- |
| `/` |…
