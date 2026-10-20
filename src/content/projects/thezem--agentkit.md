---
repo: "thezem/AgentKit"
name: "AgentKit"
description: "One Layer, Any CLI; One TypeScript API for building on top of Codex and Claude local agents: sessions, controls, approvals, resume, and activity streams."
readmeQualityOk: true
url: "https://github.com/thezem/AgentKit"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 2
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-05T13:00:42Z"
lastCommitAt: "2026-10-20T08:48:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 29
maintainers: ["thezem"]
openGraphImageUrl: "https://opengraph.githubassets.com/95dd6894abf41267a169f70f20db06cd93d0d26953c969e1cf757bafb4e79264/thezem/AgentKit"
---

# @ouim/agentkit

One layer over the coding agents you're **already signed in to**: Claude Code, Codex and OpenCode. No API keys. Same sessions, events, permissions, modes, interrupt, resume and rewind for all three.

Build a paseo / t3code-style harness by writing UI, not provider glue.

```bash
npm install @ouim/agentkit
npm run doctor            # what's installed + signed in
```

```ts
import { createAgentKit } from '@ouim/agentkit'

const kit = createAgentKit()
const session = await kit.session({ provider: 'codex', cwd: process.cwd(), access: 'auto-edit' })

session.on((event) => {
  if (event.type === 'timeline' && event.item.type === 'assistant_message') process.stdout.write(event.item.text)
  if (event.type === 'permission_requested') session.respond(event.request.id, 'allow')
})

const result = await session.run('Add a --verbose flag to the CLI')
console.log(result.status, session.handle)   // handle = JSON you can resume from anywhere
await kit.shutdown()
```

Swap `'codex'` for `'claude'` or `'opencode'`. Nothing else changes.

**Building an app on AgentKit?** Start with [Build your consumer…
