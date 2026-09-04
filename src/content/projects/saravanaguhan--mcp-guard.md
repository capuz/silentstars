---
repo: "SaravanaGuhan/mcp-guard"
name: "mcp-guard"
description: "Comprehensive security scanner for Model Context Protocol (MCP) servers"
readmeQualityOk: true
url: "https://github.com/SaravanaGuhan/mcp-guard"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-security", "aivss", "cvss", "cybersecurity", "dast", "genai-security", "mcp", "mcp-security", "model-context-protocol", "model-context-protocol-servers"]
stars: 11
forks: 5
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-08-03T17:47:30Z"
lastCommitAt: "2026-09-04T08:01:50Z"
lastReleaseAt: "2025-08-03T19:55:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 48
maintainers: ["SaravanaGuhan"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b93940e62f5e94b3ac000e3ddd068e55c08491041079052aa56e8b04dd02bdd/SaravanaGuhan/mcp-guard"
discussionCount: 1
---

# MCP Guard

Security scanner for Model Context Protocol servers.

Every finding it reports carries the raw observation that produced it: the
literal source text at a file position, the exact bytes a server sent back, or
an advisory id and the lockfile line where a version is pinned. A finding
cannot be constructed without that evidence — it is a required field with no
default, and the report writer refuses to emit a report whose evidence does not
refer to something real.

> **Versions before 2.0.0 fabricated findings and should not be used or cited.**
> See [CHANGELOG.md](https://github.com/SaravanaGuhan/mcp-guard/blob/HEAD/CHANGELOG.md) and [docs/AUDIT.md](https://github.com/SaravanaGuhan/mcp-guard/blob/HEAD/docs/AUDIT.md).

---

## Install

```bash
git clone https://github.com/SaravanaGuhan/mcp-guard.git
cd mcp-guard
pip install -r requirements.txt
pip install tree-sitter tree-sitter-javascript     # JavaScript/TypeScript AST
```

Python 3.10+. Node is only needed to run dynamic analysis against Node targets.

## Use

```bash
# Static + dependency analysis. Executes nothing from the target.
python -m mcp_guard.cli <repo-url-or-path>

# Add dynamic analysis. This RUNS the…
