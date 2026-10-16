---
repo: "zjunlp/HarnessGrad"
name: "HarnessGrad"
description: "A platform for running and comparing harness self-improvement methods."
readmeQualityOk: true
url: "https://github.com/zjunlp/HarnessGrad"
homepage: "https://zjunlp.github.io/HarnessGrad/"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-10-08T03:41:24Z"
lastCommitAt: "2026-10-16T08:25:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 51
maintainers: ["Xubqpanda"]
openGraphImageUrl: "https://opengraph.githubassets.com/94d890274c09ef5df46533e3a272b07b965f32ec86487ccd7318e8d4c8246f9e/zjunlp/HarnessGrad"
---

🌐 <a href="https://zjunlp.github.io/HarnessGrad/"><b>Website</b></a> ·
  🚀 <a href="https://zjunlp.github.io/HarnessGrad/getting-started/"><b>Quickstart</b></a> ·
  📰 <a href="https://zjunlp.github.io/HarnessGrad/news/"><b>News</b></a> ·
  ✍️ <a href="https://zjunlp.github.io/HarnessGrad/blog/"><b>Blog</b></a> ·
  📜 <a href="INTERFACE.md"><b>Contract</b></a>

---

**Why the name.** A *gradient* is the signal you need before you can improve anything, and it
is only worth having if it can be trusted. That is what this is: the training signal for
harness self-improvement, built so the number can be checked rather than asserted.

Every harness-evolution method reports a final score delta. None of them can say what that
delta is *made of*, and none report it on a curve a reader can compare against another
method's — the field has no shared training signal. HarnessGrad defines one: a base
harness, a fixed task set, a sampling loop, and a curve point that records the harness
state, the two models involved, the score with an interval, and the compute spent.

**Scoring is not delegable.** A subject that scores itself makes every cross-method
comparison meaningless, so the platform owns…
