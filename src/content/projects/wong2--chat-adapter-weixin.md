---
repo: "wong2/chat-adapter-weixin"
name: "chat-adapter-weixin"
description: "Weixin iLink bot adapter for Chat SDK."
readmeQualityOk: true
url: "https://github.com/wong2/chat-adapter-weixin"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 13
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-06-21T09:23:37Z"
lastCommitAt: "2026-07-20T06:33:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 18
maintainers: ["wong2", "sAkuraOfficial"]
openGraphImageUrl: "https://opengraph.githubassets.com/7cc5b8e048735675e24af402af982fd870b23cfec22f0475c9466058890e277e/wong2/chat-adapter-weixin"
---

# chat-adapter-weixin

Weixin iLink bot adapter for [Chat SDK](https://chat-sdk.dev/).

This package talks to Weixin's iLink bot HTTP JSON APIs directly. It uses long
polling for inbound messages and Chat SDK's `StateAdapter` for runtime cursor,
context-token, dedupe, and thread-history data.

## Install

```bash
pnpm add chat-adapter-weixin chat @chat-adapter/state-memory
```

## Quick Start

```ts
import { Chat } from "chat";
import { createMemoryState } from "@chat-adapter/state-memory";
import { createWeixinAdapter } from "chat-adapter-weixin";

const bot = new Chat({
  userName: "mybot",
  state: createMemoryState(),
  adapters: {
    weixin: createWeixinAdapter({
      accountId: process.env.WEIXIN_ACCOUNT_ID,
      token: process.env.WEIXIN_BOT_TOKEN,
      baseUrl: process.env.WEIXIN_BASE_URL,
    }),
  },
});

bot.onDirectMessage(async (thread, message) => {
  await thread.post(`You said: ${message.text}`);
});

await bot.initialize();
```

## QR Login

The CLI can acquire credentials. It does not replace Chat SDK state storage.

```bash
weixin-chat-adapter login --env
weixin-chat-adapter login --json
weixin-chat-adapter login --save --state-dir ./.weixin-dev
```

Use…
