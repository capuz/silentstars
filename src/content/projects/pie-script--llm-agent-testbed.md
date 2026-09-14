---
repo: "pie-script/llm-agent-testbed"
name: "llm-agent-testbed"
description: "An empirical security testbed evaluating prompt injection, confused-deputy vulnerabilities, and tool-calling defenses in LLM agents."
readmeQualityOk: true
url: "https://github.com/pie-script/llm-agent-testbed"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agentic-ai", "appsec", "cybersecurity", "gemini-api", "llm-security", "owasp", "prompt-injection", "python", "tool-calling"]
stars: 14
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-08-23T17:22:23Z"
lastCommitAt: "2026-09-14T09:12:43Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 32
maintainers: ["pie-script"]
openGraphImageUrl: "https://opengraph.githubassets.com/00c050203a27b0560e0e417fbcf76cba74587c233e3cb5839d59522caf1de5f5/pie-script/llm-agent-testbed"
---

# 🛡️ LLM Agent Security Testbed
### *Empirical Vulnerability & Defense Harness for Tool-Calling LLM Agents*

<br>

  <b>A disciplined security testbed testing whether tool-equipped LLM agents can be manipulated into unauthorized data exfiltration via prompt injection, role-claim social engineering, and confused-deputy attacks.</b>
</p>

[Core Architecture](#-core-architecture) •
[Attack Taxonomy](#-attack-taxonomy) •
[Naive vs Hardened](#-the-two-tool-paradigms) •
[Quickstart](#-quickstart) •
[Roadmap](#-phase-progress)

</div>

---

## 🎯 Executive Overview

Modern LLM-powered agents execute privileged actions: querying internal databases, reading file systems, and interacting with backend APIs. Every action is a boundary where an attacker’s prompt can trigger unauthorized execution.

> ⚠️ **Key Architectural Takeaway:**  
> **The vulnerability rarely lives inside the LLM weights alone.** It thrives in the trust boundary between the model's intent request and the application backend executing it without validation.

Much like **SQL Injection** stemmed from unparameterized string concatenation rather than the database engine itself, **LLM Confused-Deputy Flaws** occur when…
