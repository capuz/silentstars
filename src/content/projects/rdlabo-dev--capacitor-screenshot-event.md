---
repo: "rdlabo-dev/capacitor-screenshot-event"
name: "capacitor-screenshot-event"
description: "Notification that user shot screenshot"
readmeQualityOk: true
url: "https://github.com/rdlabo-dev/capacitor-screenshot-event"
language: "Java"
languages: ["Java", "Swift"]
languagePcts: [41, 34]
stars: 17
forks: 7
openIssues: 2
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2020-01-20T08:05:08Z"
lastCommitAt: "2026-08-19T04:09:30Z"
lastReleaseAt: "2026-01-20T03:30:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 79
undervaluedScore: 49
maintainers: ["rdlabo"]
openGraphImageUrl: "https://opengraph.githubassets.com/b536e680073388f0fc28ee1213f7752637e0dceef540ed07d5d3cf3f5966a8b1/rdlabo-dev/capacitor-screenshot-event"
fundingLinks: ["GITHUB:https://github.com/rdlabo"]
---

# @rdlabo/capacitor-screenshot-event

Notify your Capacitor app when the user takes a screenshot.

This plugin listens for screenshot events on iOS and Android and delivers them to your web layer through a Capacitor event listener. It is useful for analytics, security prompts, or content-protection workflows.

**Full documentation:** [https://docs.rdlabo.dev/projects/capacitor-screenshot-event](https://docs.rdlabo.dev/projects/capacitor-screenshot-event)

## Install

```bash
npm install @rdlabo/capacitor-screenshot-event
npx cap sync
```

## Usage

See [ScreenshotEvent](https://github.com/rdlabo-dev/capacitor-screenshot-event/blob/HEAD/docs/screenshot-event.md) to watch, handle, and stop screenshot events.

Start watching for screenshot events and register a listener:

```ts
import { ScreenshotEvent } from '@rdlabo/capacitor-screenshot-event';

const start = async () => {
  await ScreenshotEvent.addListener('userDidTakeScreenshot', () => {
    console.log('Screenshot was taken');
  });

  await ScreenshotEvent.startWatchEvent();
};
```

Stop watching when the listener is no longer needed:

```ts
await ScreenshotEvent.removeWatchEvent();
```

## When to use

Use this plugin when…
