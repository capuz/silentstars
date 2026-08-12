---
repo: "killertcell428/aigis"
name: "aigis"
description: "Deterministic, zero-dependency Python firewall for AI agents — MCP rug-pull, memory poisoning, indirect injection, exfil channels. 44 compliance templates (US/CN/JP/EU)."
readmeQualityOk: true
url: "https://github.com/killertcell428/aigis"
homepage: "https://pypi.org/project/pyaigis/"
language: "Python"
languages: ["Python"]
languagePcts: [75]
topics: ["ai-security", "firewall", "llm", "mcp", "owasp", "prompt-injection", "ai-agent", "compliance", "cybersecurity", "guardrails"]
stars: 54
forks: 8
openIssues: 6
closedIssues: 18
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-04-11T02:56:13Z"
lastCommitAt: "2026-08-12T05:14:08Z"
lastReleaseAt: "2026-05-08T18:14:33Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 93
undervaluedScore: 37
maintainers: ["dependabot[bot]", "killertcell428", "01luyicheng"]
openGraphImageUrl: "https://opengraph.githubassets.com/933c2813a8553145e0dd8e2d5e90063ef1b5e75d19fca4dc540f1c2fe5372acc/killertcell428/aigis"
discussionCount: 1
---

</p>

<h1 align="center">Aigis</h1>

  <strong>The open-source trust layer for bringing Claude Code (and other autonomous AI agents) to work — with your security team's approval.</strong>
</p>

  Your company won't approve Claude Code? The blocker is rarely the model — it's the missing answer to "what can it run, and where's the audit trail?"<br />
  Aigis is the layer that answers it: deterministic guardrails on every tool call, tamper-evident audit logs, and a generated IT-approval pack — on any Claude Code plan.<br />
  Independent OSS, Apache-2.0, zero runtime dependencies. <code>pip install pyaigis</code>.
</p>

<h3 align="center">From <code>pip install</code> to IT approval in 3 commands</h3>

```bash
pip install pyaigis
aigis init --agent claude-code --policy enterprise   # guardrails + audit log ON
aigis trust-pack --lang en                           # → hand ./aigis-trust-pack/ to your security team
```

`init` wires PreToolUse hooks into Claude Code so every Bash/Edit/Write/WebFetch is scanned *before* it runs, and records every decision to an append-only audit log. A tamper-evident signed log (HMAC-SHA256 + hash chain) ships in the box — prove log integrity anytime with…
