---
repo: "arthurpanhku/dvalincode"
name: "dvalincode"
description: "Approvable, local-first AI coding agent for regulated teams: policy controls, governed MCP, evidence packs, audit trails, secure remediation, and any OpenAI-compatible model."
readmeQualityOk: true
url: "https://github.com/arthurpanhku/dvalincode"
homepage: "https://dvalincode.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
topics: ["ai-agent", "cli", "coding-agent", "coding-assistant", "developer-tools", "llm", "local-first", "typescript", "ai-governance", "audit-trail"]
stars: 110
forks: 9
openIssues: 10
closedIssues: 12
watchers: 4
contributors: 7
recentReleases: 10
createdAt: "2026-05-20T14:48:17Z"
lastCommitAt: "2026-08-10T05:06:55Z"
lastReleaseAt: "2026-06-16T09:09:39Z"
status: "thriving"
tags: ["needs_contributors", "release_machine"]
healthScore: 90
undervaluedScore: 35
maintainers: ["arthurpanhku", "dependabot[bot]", "shivasb42"]
openGraphImageUrl: "https://opengraph.githubassets.com/57f45c656457333dfd55b46699da050e060ebefa55f986e635adb762c8239cd4/arthurpanhku/dvalincode"
discussionCount: 4
---

</p>

  <b>English</b> · <a href="README.zh-CN.md">中文</a> · <a href="https://dvalincode.dev">🌐 dvalincode.dev</a>
</p>

</p>

  <b>Find the security holes in your repo, fix them, and prove the fix — in one command.</b><br>
  Every fix is diffed, tested, re-scanned, and recorded in a tamper-evident audit log before it can become a PR.
</p>

---

## ⏱️ 30 seconds, no install, no API key

```sh
npx dvalincode dvalin .
```

That is the whole thing. It runs the built-in rules for injection, hardcoded
secrets, XSS, `eval`, and unsafe shell use against the current directory and
prints what it found. No account, no model, no config, no code leaves your
machine. Add `--scanners builtin,semgrep,trivy,osv-scanner` to pull in whichever
of those engines you already have on `PATH`.

### Or put it on every pull request — nothing to install at all

```yaml
# .github/workflows/security.yml
permissions:
  contents: read
  security-events: write
steps:
  - uses: actions/checkout@v5
  - uses: arthurpanhku/dvalincode@v0.17.0
    with:
      fail-on: high
```

Findings land inline on the pull request diff and in your Security tab.
No API key, no secrets, no model — the scan is deterministic and local…
