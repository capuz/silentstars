---
repo: "kgdunn/process-improve"
name: "process-improve"
description: "Python toolkit for analysis of industrial process data; multivariate analysis, designed experiments, process monitoring."
readmeQualityOk: true
url: "https://github.com/kgdunn/process-improve"
homepage: "https://kgdunn.github.io/process-improve/"
language: "Python"
languages: ["Python"]
languagePcts: [89]
topics: ["chemometrics", "design-of-experiments", "multivariate-analysis", "pca", "pls", "batch-process", "latent-variables", "multiblock-structures", "partial-least-squares", "principal-component-analysis-pca"]
stars: 21
forks: 13
openIssues: 50
closedIssues: 225
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2019-09-08T14:09:58Z"
lastCommitAt: "2026-10-25T22:11:03Z"
lastReleaseAt: "2026-04-27T08:09:31Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 72
maintainers: ["claude", "kgdunn"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/207122113/9f44623d-e829-4df9-976c-1d7571fb4813"
discussionCount: 1
---

# process-improve

**Designed experiments, multivariate analysis and process monitoring for Python.**
Built for the chemometrics, manufacturing and pharma workflows where you need to know
not just *what fits*, but *which factors matter, is this observation normal, which
variable moved, and how sure am I?*

**[Try it in your browser](https://factori.al/)** ·
[Documentation](https://kgdunn.github.io/process-improve/) ·
[Free textbook](https://learnche.org/pid) ·
[Design gallery](#designed-experiments-in-one-call)

```bash
pip install process-improve
```

## Try it without installing anything

[Factorial](https://factori.al/), the designed-experiments app, runs
this package inside your browser tab (Pyodide / WebAssembly). Say what you will measure, with
its units and goal, and what might change it: the app lists the designs that can learn how the
one depends on the other, scored on the nine measures of
[Process Improvement using Data](https://learnche.org/pid) and on their power to find the change
you care about. Run the one you pick, type in the results or practise with results simulated from
a process whose true model is known, and read the analysis, beside the truth when it is…
