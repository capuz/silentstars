---
repo: "eriknewton/sanctuary-framework"
name: "sanctuary-framework"
description: "An open standard for sovereignty in the agentic economy. Four-layer architecture protecting humans acting through agents and autonomous agents acting on their own behalf."
readmeQualityOk: true
url: "https://github.com/eriknewton/sanctuary-framework"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["agent-infrastructure", "ai-agents", "decentralized-identity", "open-standard", "privacy", "sovereign-ai", "sovereignty", "trusted-execution-environment", "zero-knowledge-proofs"]
stars: 5
forks: 0
openIssues: 3
closedIssues: 10
watchers: 0
contributors: 3
recentReleases: 9
createdAt: "2026-03-22T19:21:45Z"
lastCommitAt: "2026-07-05T20:54:17Z"
lastReleaseAt: "2026-04-27T01:40:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 60
maintainers: ["eriknewton", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e323bc1e775b0973a33d801d4bb6b4f9a1c4a0ac4c0298d12673f333cf258aa8/eriknewton/sanctuary-framework"
discussionCount: 0
---

# Sanctuary

**The firewall and control panel for your AI agents.**

Sanctuary wraps any AI agent, on your machine or in your cloud, so every action it takes is blocked at the network layer if you did not allow it, signed with keys only you hold, and logged to an audit trail you can actually read. One dashboard manages the security and privacy of every agent you run, whether that is one agent on your laptop or a whole fleet across your machines. Your data, and the reputation your agents build, stay on hardware you control, and you can pick them up and leave whenever you want. No lock-in.

Already running Claude Code, Cursor, Hermes, OpenClaw, Cline, or Mastra?

```bash
npx @sanctuary-framework/mcp-server protect --claude-code
```

That one command puts the wall, the keys, the audit trail, and the dashboard around the agent you already use. You keep your harness; Sanctuary adds the protection underneath.

**Under the hood:** a kernel-level wall that holds even when a prompt-injected agent tries to misbehave (Linux today, macOS in progress), cryptographic identity and encrypted state the platform running your agent cannot read, and full data portability so you are never trapped in…
