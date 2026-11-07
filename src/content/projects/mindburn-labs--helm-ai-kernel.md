---
repo: "Mindburn-Labs/helm-ai-kernel"
name: "helm-ai-kernel"
description: "Fail-closed execution firewall for AI agents: quarantine MCP tools, proxy OpenAI-compatible requests, emit signed receipts, and verify EvidencePacks offline."
readmeQualityOk: true
url: "https://github.com/Mindburn-Labs/helm-ai-kernel"
homepage: "https://helm.docs.mindburn.org/"
language: "Go"
languages: ["Go"]
languagePcts: [77]
topics: ["ai-agents", "ai-security", "developer-tools", "llm-security", "mcp", "model-context-protocol", "self-hosted", "zero-trust", "agent-security", "evidencepack"]
stars: 61
forks: 5
openIssues: 2
closedIssues: 36
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2026-02-15T12:51:47Z"
lastCommitAt: "2026-11-07T15:42:32Z"
lastReleaseAt: "2026-07-06T10:30:57Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 44
maintainers: ["peycheff-com", "mindburnlabs", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d2de7e27d0c9e3caf387174720228f634f421e6cc7c2f7074c445b4905b2d2a/Mindburn-Labs/helm-ai-kernel"
discussionCount: 6
---

# HELM AI Kernel

**Fail-closed execution firewall for AI agents.**

HELM sits between Claude Code, Codex, MCP tools, shell commands, and other agent
actions. It decides `ALLOW`, `DENY`, or `ESCALATE`, then writes a signed receipt
you can verify later. Verification checks signature integrity out of the box;
trusting *who* signed is a separate, explicit step — see
[local signer and trusted verification](https://github.com/Mindburn-Labs/helm-ai-kernel/blob/HEAD/docs/reference/workstation-governance.md#local-signer-and-trusted-verification).

## Try It

```bash
brew install mindburn-labs/tap/helm-ai-kernel
helm-ai-kernel                 # interactive TTY → operator TUI
# Text catalog: HELM_NO_TUI=1 helm-ai-kernel   (also TERM=dumb / pipes)
helm-ai-kernel setup claude-code --yes
# Codex: helm-ai-kernel setup codex --yes
# Hermes: helm-ai-kernel setup hermes --scope user --yes
# DeepSeek: helm-ai-kernel setup deepseek --scope user --yes
```

The fully qualified Homebrew install adds the tap and trusts only this formula.
See [Homebrew Tap Trust](https://docs.brew.sh/Tap-Trust).

Ask your agent to do something risky. HELM blocks or escalates the action before
it runs, then records the…
