---
repo: "RedHatProductSecurity/aegis-ai"
name: "aegis-ai"
description: "genAI agent providing security context, tooling for performing security analysis on CVE, components and more"
readmeQualityOk: true
url: "https://github.com/RedHatProductSecurity/aegis-ai"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 32
forks: 16
openIssues: 0
closedIssues: 12
watchers: 3
contributors: 15
recentReleases: 0
createdAt: "2025-05-19T17:17:45Z"
lastCommitAt: "2026-09-12T00:02:14Z"
lastReleaseAt: "2025-11-04T15:47:25Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 64
maintainers: ["red-hat-konflux-kflux-prd-rh02[bot]", "kdudka", "superbuggy"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a884195d5d4f28699489abb9259890138db3b25519c6188fbbdb36a8617121f/RedHatProductSecurity/aegis-ai"
---

# <img src="docs/logo.png" alt="logo" width="50"> Aegis-AI - Red Hat Product Security Agent

**Note: As Aegis is an agent - be careful of which LLM model you use ... if you want to integrate with OSIDB/RHTPA, you MUST use a secure model**

## Overview

**Aegis enables security teams to leverage the latest Generative AI models for enhanced security analysis.** Integrate your preferred LLM (ChatGPT, Anthropic, Gemini, or even a local model) to quickly perform deep security analysis on critical artifacts like **CVEs, advisories, and more**.

Aegis helps by:

* **Accelerate Analysis:** Insights into complex security data.
* **Improve Accuracy:** Augment LLM capabilities with in-context security information.
* **Enhance Efficiency:** Automate repetitive analysis tasks, working on security entities (ex. CVE) to focus on higher-value work.

---

## Features
Aegis features provide common product security analysis:

### CVE Analysis
* **Suggest Impact:** Get an in context LLM-driven suggestion for a CVE's overall impact.
* **Suggest CWE:** Get an in context LLM-driven Common Weakness Enumeration (CWE) mappings for CVE.
* **Suggest CVSS:** Get an in context LLM-driven Common Vulnerability…
