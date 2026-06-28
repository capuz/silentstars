---
repo: "deonmenezes/mantishack"
name: "mantishack"
description: "Mantis Hack"
url: "https://github.com/deonmenezes/mantishack"
homepage: "https://mantishack.com"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["agent-harness", "ai-agents", "autonomous-agents", "bug-bounty", "claude-code", "mcp", "security", "mantis", "offensive-security"]
stars: 343
forks: 61
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2026-04-05T04:51:49Z"
lastCommitAt: "2026-06-28T03:08:56Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 12
maintainers: ["deonmenezes"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b9a7576a300ddfe993d700591ca90b56d9fabe79d92a778c118e0b9ecf15eac/deonmenezes/mantishack"
---

# Mantishack

`stalk · wait · strike · hold`
**Ethically hack and discover vulnerabilities in any software with the power of AI.**

[mantishack.com](https://mantishack.com)

</div>

---

## What is Mantishack?

Mantishack is an autonomous security research framework built on top of Claude Code (but not tied to it — you can plug in your own analysis layer too). It chains together static analysis, binary analysis, LLM-powered vulnerability validation, exploit generation, and patch writing into a single workflow you can run against a codebase or binary.

It is not polished software. It is held together with enthusiasm and duct tape, and it works well enough that we can't stop using it — usable in the field, rough in the corners.

---

## Quick start

### Option 1: Install manually

```bash
# Clone the repo
git clone https://github.com/deonmenezes/mantishack.git
cd mantishack

# Install Python dependencies
pip install -r requirements.txt

# Install Claude Code (required)
npm install -g @anthropic-ai/claude-code

# Install Semgrep (required for scanning)
pip install semgrep

# Open Mantishack
claude
```

### Option 2: Devcontainer (recommended)

Everything pre-installed. Open in VS…
