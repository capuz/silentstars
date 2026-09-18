---
repo: "Consensys/repo-security-review"
name: "repo-security-review"
description: "A Claude Skill to perform security code review for repositories (code and Skill)"
readmeQualityOk: true
url: "https://github.com/Consensys/repo-security-review"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 15
forks: 3
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 25
recentReleases: 0
createdAt: "2026-05-25T10:34:41Z"
lastCommitAt: "2026-09-18T14:02:41Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 39
maintainers: ["behroozreview"]
openGraphImageUrl: "https://opengraph.githubassets.com/50fd2ce3ba7fc44e95a1c519bd9334953abd2921fb0826915038a73eb6833fb3/Consensys/repo-security-review"
---

# repo-security-review

A Claude Code **skill** that runs a full, multi-phase security review of a code repository — secret scanning, architecture and threat analysis, dependency CVEs, OWASP code review, and independent validation — then writes a single markdown report. Each phase runs as an isolated subagent, and findings pass through a finder → judgment trust boundary before they reach the report.

Works on a single repo or across multiple microservices, has a dedicated mode for auditing third-party/open-source tools before adopting them, and a fast diff-scoped mode for reviewing a single pull request without scanning the whole repo first.

> Full specification: [SKILL.md](https://github.com/Consensys/repo-security-review/blob/HEAD/SKILL.md).

---

## Installation

Skills live under `~/.claude/skills/`. Clone the repo there so updates are a `git pull` away:

```bash
mkdir -p ~/.claude/skills
git clone https://github.com/<your-org>/repo-security-review ~/.claude/skills/repo-security-review
```

Install the external scanners the phases use (`gitleaks`, `osv-scanner`, `semgrep`, `jq`, `curl` for `--verify-deployment`, and optionally `docker` for `--runtime` — `playwright`+Chromium…
