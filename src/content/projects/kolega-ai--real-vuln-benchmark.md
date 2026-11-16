---
repo: "kolega-ai/Real-Vuln-Benchmark"
name: "Real-Vuln-Benchmark"
description: "A benchmark for SAST security scanners against a suite of realistic OS apps."
readmeQualityOk: true
url: "https://github.com/kolega-ai/Real-Vuln-Benchmark"
language: "HTML"
languages: ["HTML"]
languagePcts: [88]
stars: 38
forks: 12
openIssues: 8
closedIssues: 3
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2026-03-12T12:44:43Z"
lastCommitAt: "2026-11-16T10:55:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 39
maintainers: ["kolega-ai-dev", "FaizanKolega", "Hasan-Koelga"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1179842623/e196a69b-303a-4c0a-a9f4-e2c1f9dfa291"
---

# RealVuln Benchmark

**[Live Dashboard →](https://realvuln.com/dashboard.html)**

An open benchmark for evaluating security scanners against ground-truth vulnerabilities in real-world code. Primary metric is **F3 Score** (0–100, recall-weighted 9:1).

## Problem & Purpose

Application security scanners routinely fail to catch basic vulnerabilities — missing authentication, broken access control, IDOR — in real-world code. No credible, open benchmark exists to measure this:

- **OWASP Benchmark** uses synthetic single-file test cases. Scanners can be tuned to ace it without improving real-world detection.
- **Vendor self-benchmarks** (DryRun, ZeroPath, Cycode/Bearer) use small samples, vendor-controlled methodology, and no reusable infrastructure.
- **Academic benchmarks** (NIST Juliet, NIST SARD, CVEFixes, VulBench) lack scoring tooling, have inconsistent labelling, or target ML evaluation rather than scanner comparison.
- **Academic papers** produce one-off results locked in PDFs that nobody reproduces.

**RealVuln** is an open, extensible benchmark that uses real-world code, provides machine-readable ground truth with CWE mappings, includes an automated scoring engine, and is…
