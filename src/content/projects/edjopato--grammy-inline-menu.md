---
repo: "EdJoPaTo/grammy-inline-menu"
name: "grammy-inline-menu"
description: "Inline Menus for Telegram made simple. Successor of telegraf-inline-menu."
readmeQualityOk: true
url: "https://github.com/EdJoPaTo/grammy-inline-menu"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["telegram-bot"]
stars: 382
forks: 41
openIssues: 3
closedIssues: 172
watchers: 6
contributors: 12
recentReleases: 0
createdAt: "2018-09-09T01:44:51Z"
lastCommitAt: "2026-10-31T02:00:33Z"
lastReleaseAt: "2018-09-16T18:19:47Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 73
undervaluedScore: 20
maintainers: ["dependabot[bot]", "EdJoPaTo"]
openGraphImageUrl: "https://opengraph.githubassets.com/f60f59fb7c80f054295d9ef6bff4eb2ca8d0b0fa158a9452f42c7f5b3e91f172/EdJoPaTo/grammy-inline-menu"
discussionCount: 4
---

# grammY Inline Menu

This menu library is made to easily create an inline menu for your Telegram bot.

## Installation

```bash
npm install grammy grammy-inline-menu
```

Consider using TypeScript with this library as it helps with finding some common mistakes faster.

A good starting point for TypeScript and Telegram bots might be this repo: [EdJoPaTo/telegram-typescript-bot-template](https://github.com/EdJoPaTo/telegram-typescript-bot-template)

## Examples

### Basic Example

```ts
import { Bot } from "grammy";
import { MenuMiddleware, MenuTemplate } from "grammy-inline-menu";

const menuTemplate = new MenuTemplate<MyContext>((ctx) =>
	`Hey ${ctx.from.first_name}!`
);

menuTemplate.interact("unique", {
	text: "I am excited!",
	do: async (ctx) => {
		await ctx.reply("As am I!");
		return false;
	},
});

const bot = new Bot(process.env.BOT_TOKEN);

const menuMiddleware = new MenuMiddleware("/", menuTemplate);
bot.command("start", (ctx) => menuMiddleware.replyToContext(ctx));
bot.use(menuMiddleware);

await bot.start();
```

### More interesting one

Look at the [TypeScript code here](https://github.com/EdJoPaTo/grammy-inline-menu/blob/HEAD/examples/main.ts).

## Version…
