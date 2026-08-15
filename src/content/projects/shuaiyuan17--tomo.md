---
repo: "shuaiyuan17/tomo"
name: "tomo"
description: "A personal AI assistant that lives in your messaging apps."
readmeQualityOk: true
url: "https://github.com/shuaiyuan17/tomo"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 5
forks: 2
openIssues: 3
closedIssues: 10
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-04-07T02:02:40Z"
lastCommitAt: "2026-08-15T04:04:33Z"
lastReleaseAt: "2026-04-19T23:04:12Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 57
maintainers: ["clawcrab", "shuaiyuan17", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6243b7cb9536a5dece0143ed7def76958b43d5da3ee122473fc64d5a13d7555c/shuaiyuan17/tomo"
---

<h1 align="center">Tomo</h1>
</p>

</p>

  Powered by <a href="https://platform.claude.com/docs/en/agent-sdk/overview">Claude Agent SDK</a> &middot;
  Personality system &middot;
  Persistent memory &middot;
  Scheduled tasks &middot;
  Telegram &middot; iMessage
</p>

---

## Quick Start

```bash
npm install -g tomo-ai
tomo init       # Set up config, pick a name and personality
tomo start      # Runs in background
```

That's it. Open Telegram and message your bot.

## Requirements

- Node.js 22.12+
- [Claude Code](https://claude.com/claude-code) installed. Direct Claude models can use a Claude subscription or an Anthropic API key; LiteLLM gateways support other backends.
- At least one channel:
  - **Telegram** — bot token from [@BotFather](https://t.me/BotFather)
  - **iMessage** — [BlueBubbles](https://bluebubbles.app) server running on a Mac with iMessage signed in

## CLI

```bash
tomo init              # First-time setup
tomo config            # Interactive settings (authentication, model, LiteLLM, channels, identities, groups)
tomo start             # Start in background (daemon)
tomo start -f          # Start in foreground (for dev)
tomo stop              # Stop the…
