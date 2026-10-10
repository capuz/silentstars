---
repo: "maxbolgarin/unread"
name: "unread"
description: "Read your Telegram unread. Without reading it."
readmeQualityOk: true
url: "https://github.com/maxbolgarin/unread"
homepage: "https://maxbolgarin.github.io/unread/"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["ai", "cli", "python"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 5
createdAt: "2026-04-19T15:44:11Z"
lastCommitAt: "2026-10-10T10:05:23Z"
lastReleaseAt: "2026-08-24T10:37:07Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 59
maintainers: ["maxbolgarin", "semantic-release-bot", "claude"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1215188988/5d41314c-f478-4768-90a8-706e7ac17f4c"
---

> A local CLI that turns Telegram chats, YouTube videos, web pages,
> and files into reports with citations — using whichever LLM
> you keep an API key for.

---

You have 47 unread Telegram groups. You will never read them.
You will now.

```bash
curl -fsSL https://raw.githubusercontent.com/maxbolgarin/unread/main/scripts/install.sh | bash
unread init
```
```bash
unread @somegroup --last-days 7
```

It pulls the chat, runs it through whichever LLM you keep an API key
for, and hands you a report with clickable citations back to
every claim. Same shape for YouTube videos, web pages, voice messages,
recorded meetings, podcasts, PDFs, and stdin. Or run it as a
self-hosted Telegram bot and forward anything weird at it — see
[Self-hosted Telegram bot](#self-hosted-telegram-bot) below.

See [a real report](https://github.com/maxbolgarin/unread/blob/HEAD/.github/examples/summary.md) from `@thehackernews` — 99 messages over two weeks, four chunks, $0.016, every bullet linked back to its source.

## What it does

Three verbs. The same `<ref>` shape works on all of them.

- `unread <ref>` — **analyze**. Map-reduce the source into a Markdown report. Every claim links back to its message /…
