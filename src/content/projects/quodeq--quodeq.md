---
repo: "quodeq/quodeq"
name: "quodeq"
description: "AI-powered code quality and security scanner. Open source, MIT, runs locally. <🧭>"
readmeQualityOk: true
url: "https://github.com/quodeq/quodeq"
homepage: "https://quodeq.ai"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [62, 34]
topics: ["ai-tools", "code-analysis", "quality-assurance", "cli", "code-quality", "cwe", "devtools", "iso-25010", "llm", "open-source"]
stars: 23
forks: 3
openIssues: 0
closedIssues: 43
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2026-02-25T17:32:28Z"
lastCommitAt: "2026-10-09T10:49:56Z"
lastReleaseAt: "2026-03-26T06:16:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "community_hub"]
healthScore: 100
undervaluedScore: 51
maintainers: ["VictorPurMar", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1166862990/1213e01f-50a4-4a03-9b0d-3fdafed076af"
discussionCount: 25
---

---

AI models can now find vulnerabilities and design flaws that human review misses, but most tools that put this to work are locked behind enterprise contracts. Quodeq is the open alternative.

**Open source. MIT license. Runs locally. No telemetry. No account. No servers.**

Scans any codebase with AI across six quality dimensions from [ISO 25010](https://www.iso.org/standard/35733.html):
**Security**, **Reliability**, **Maintainability**, **Performance**, **Flexibility**, and **Usability**.

Every finding maps to a [CWE](https://cwe.mitre.org/) identifier. You get grades, violations with line numbers, and a fix plan. Cloud providers (Claude, Gemini, Codex, GitHub Copilot) for speed. Local models via [Ollama](https://ollama.com) for privacy.

---

## What It Finds

```
CRITICAL    src/db.py:15        SQL injection via string concatenation     CWE-89
            query = f"SELECT * FROM users WHERE id = {user_id}"

MAJOR       src/auth.py:42      Hardcoded credentials in source code       CWE-798
            credentials = {"user": "admin", "pass": "secret123"}

MINOR       src/utils.py:23     Bare except clause hides errors            CWE-396
            except: pass

COMPLIANT…
