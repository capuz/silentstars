---
repo: "zhurong2020/pyobfus"
name: "pyobfus"
description: "AST-based Python obfuscator with reverse stack-trace mapping — obfuscate before shipping and keep production tracebacks AI-debuggable. MCP + VS Code."
readmeQualityOk: true
url: "https://github.com/zhurong2020/pyobfus"
homepage: "https://zhurong2020.github.io/pyobfus/"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["ai-native", "claude-code", "code-obfuscator", "code-protection", "cursor", "llm-tools", "mcp-server", "pyarmor-alternative", "python-obfuscator", "python-security"]
stars: 11
forks: 4
openIssues: 0
closedIssues: 12
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-11-11T04:20:59Z"
lastCommitAt: "2026-10-29T10:21:26Z"
lastReleaseAt: "2025-12-25T22:24:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 77
maintainers: ["zhurong2020", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1093960892/0269d9df-5b04-4b71-9619-ebcdc94aa3f4"
discussionCount: 7
---

# pyobfus: the Python obfuscator

pyobfus is a local-first, AST-based Python obfuscator for Python 3.9–3.15. It
obfuscates multi-file projects and packages as a whole: names are renamed
consistently across modules and imports are rewritten to match, so Community
output is still ordinary `.py` that runs without pyobfus installed. Keep the
mapping file from the build private, and `pyobfus --unmap` turns a production
traceback back into your original names, for you or an AI coding agent.
Community is Apache-2.0, has no file or line limits, and requires no trial.

> **What's new in v0.11.0:** `--check-delivery` now reports bounded `.pyc`
> source evidence and warns when a frozen executable's internal payload has
> not been inspected. Cross-file builds now recognize package-root absolute
> imports in module-attribute diagnostics; the optional
> `--preserve-unproved-module-attributes` keeps recognized export names when
> compatibility matters more than renaming them. These checks do not prove a
> delivered artifact safe. See the [changelog](https://github.com/zhurong2020/pyobfus/blob/main/CHANGELOG.md)
> and [delivery…
