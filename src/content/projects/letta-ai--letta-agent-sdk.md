---
repo: "letta-ai/letta-agent-sdk"
name: "letta-agent-sdk"
description: "The Letta Agent SDK is the SDK for stateful agents. Each agent has its own identity and long-term memory, and keeps both across conversations, models, and the computers it runs on."
readmeQualityOk: true
url: "https://github.com/letta-ai/letta-agent-sdk"
homepage: "https://docs.letta.com/agent-sdk"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 115
forks: 27
openIssues: 17
closedIssues: 27
watchers: 0
contributors: 14
recentReleases: 0
createdAt: "2026-01-27T08:23:17Z"
lastCommitAt: "2026-11-09T03:31:09Z"
lastReleaseAt: "2026-02-23T06:44:57Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 39
maintainers: ["github-actions[bot]", "letta-integration[bot]", "dream-integration[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc9d1f9911f6b0a627f2dc72b1b1598b4f23e18b4416ab3b17fe6111112e0db5/letta-ai/letta-agent-sdk"
---

# Letta Agent SDK

The SDK for [stateful agents](https://docs.letta.com/concepts/stateful-agents): create an agent once, then resume it from anywhere. Each agent has its own identity and long-term memory, and keeps both across conversations, models, and the computers it runs on.

Read the [documentation](https://docs.letta.com/agent-sdk) for guides and the full API reference.

## Quick start

```bash
npm install @letta-ai/letta-agent-sdk
```

```typescript
import { LettaAgentClient } from "@letta-ai/letta-agent-sdk";

const client = new LettaAgentClient({ backend: "cloud" });

// Create the agent once...
const agentId = await client.createAgent({
  systemPrompt: "You are Nora, a research analyst who tracks our competitors.",
  memfs: true,
});

// ...then resume it, from anywhere, for as long as it lives.
await using session = client.resumeSession(agentId);

await session.send("What changed since last week?");
for await (const message of session.stream()) {
  if (message.type === "assistant") process.stdout.write(message.content);
}
```

Local and remote management clients can use `await using client = new
LettaAgentClient(...)`, or call `await client.close()` explicitly. Client…
