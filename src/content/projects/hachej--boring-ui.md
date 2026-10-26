---
repo: "hachej/boring-ui"
name: "boring-ui"
description: "Build agent-powered apps without reinventing the shell."
readmeQualityOk: true
url: "https://github.com/hachej/boring-ui"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [59, 40]
stars: 49
forks: 2
openIssues: 0
closedIssues: 403
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-04-24T09:41:38Z"
lastCommitAt: "2026-10-26T09:17:05Z"
lastReleaseAt: "2026-06-11T17:42:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 37
maintainers: ["hachej"]
openGraphImageUrl: "https://opengraph.githubassets.com/df9f2443c3ff356f0c2f535278844ee8f330e35bd20fcda812a27887096f93de/hachej/boring-ui"
---

# Boring UI

**Put an AI agent inside your app.**

Chat, files, document viewers, approvals and background work for React and Node apps, built on the [Pi](https://www.npmjs.com/package/@earendil-works/pi-durable) agent harness. You keep authentication, data, permissions and model keys.

```tsx
// Browser: a whole agent app (sessions, chat, artifact viewers) from one registry block.
import { AgentWorkspace, useConversations, useRemoteChat } from '@/components/pi-app/agent-workspace';

const conversations = useConversations({ endpoint: '/api/conversations', fetch, activeId, onSelect });
const chat = useRemoteChat({ conversationId: activeId, endpoint: id => `/api/chat?conversation=${id}`, fetch, identity });
<AgentWorkspace conversationId={activeId} conversations={conversations} revisionProvider={revisionProvider}
  controller={chat.status === 'ready' ? chat.controller : undefined} />;
```

```js
// Server: your process opens the Pi Harness and the workspace; the kit adds an agent definition and HTTP handlers.
const agent = defineAgent({ id: 'writer', model: { provider: 'openai', modelId: 'gpt-5-mini' },
  tools: [createPresentTool({ workspace: { files, root, access } })] });…
