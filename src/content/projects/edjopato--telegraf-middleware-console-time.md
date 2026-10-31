---
repo: "EdJoPaTo/telegraf-middleware-console-time"
name: "telegraf-middleware-console-time"
description: "Quick and dirty way to see what's incoming to your Telegraf or grammY Telegram bot while developing"
readmeQualityOk: true
url: "https://github.com/EdJoPaTo/telegraf-middleware-console-time"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["telegraf", "telegraf-middleware", "grammy"]
stars: 6
forks: 0
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2020-03-31T17:46:26Z"
lastCommitAt: "2026-10-31T02:00:27Z"
lastReleaseAt: "2025-04-01T10:34:28Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 54
undervaluedScore: 25
maintainers: ["dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cbe3b1c44ba0f79ee8f191763de630c376b6a55f48611f1869b6297491d6e146/EdJoPaTo/telegraf-middleware-console-time"
---

# telegraf-middleware-console-time

> Debug your Telegram middlewares

When testing your bot it's nice to know what's coming in and how long it did
take to process this request.

This library is not meant for usage in production. It's meant for debugging
purposes.

In production the individual request wouldn't be as interesting as the general
kind of request. For example not taking a look onto a specific '/start' command
but onto all /start messages. This is kind of the opposite of what this library
tries to achieve: Helping with understanding individual requests.

## Install

```bash
npm install telegraf-middleware-console-time
```

## Usage

### Test your implementation

```js
import {generateUpdateMiddleware} from 'telegraf-middleware-console-time';

const bot = new Bot(…);

// Other middlewares unrelated to your code
bot.use(…);

// Check your implementation for each telegram update (only when not in production)
if (process.env['NODE_ENV'] !== 'production') {
    bot.use(generateUpdateMiddleware());
}

// Your implementation
bot.command('start', …);
```

This will output something like this:

```plaintext
2020-03-31T14:32:36.974Z 490af message Edgar 6 /start: 926.247ms…
