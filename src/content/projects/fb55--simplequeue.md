---
repo: "fb55/SimpleQueue"
name: "SimpleQueue"
description: "A simple FIFO queue"
url: "https://github.com/fb55/SimpleQueue"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
topics: ["fifo-queue", "fifo", "hacktoberfest"]
stars: 9
forks: 5
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2011-12-01T14:13:57Z"
lastCommitAt: "2026-07-03T06:23:00Z"
lastReleaseAt: "2026-03-17T12:58:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 99
undervaluedScore: 76
maintainers: ["dependabot[bot]", "fb55"]
openGraphImageUrl: "https://opengraph.githubassets.com/714b4aed8ea6809728453de50f5e88a3055cb3b8a7320eef808a22aa3de9b907/fb55/SimpleQueue"
fundingLinks: ["GITHUB:https://github.com/fb55"]
---

# SimpleQueue

A simple FIFO queue

    npm install SimpleQueue

## What is this?

There are plenty queues for node, but even those branded as FIFO (first in first out) usually destroy the order.
Eg. when mapping over an RSS feeds & doing something with all of the pages,
you need to know what element had what position - so I created this little helper.

## API

### Class: SimpleQueue\<T, R>

A simple FIFO queue, delivering items in order.

#### Type parameters

| Name | Default | Description                              |
| ---- | ------- | ---------------------------------------- |
| `T`  | -       | Type that is pushed onto the stack.      |
| `R`  | void    | Type that the passed `callback` maps to. |

### Constructors

#### constructor

\+ **new SimpleQueue**(`worker`: (element: T, callback: (error: Error \| null, result: R) => void) => void, `callback`: (error: Error \| null, result: R, element: T) => void, `done?`: undefined \| () => void, `concurrent?`: number): `SimpleQueue`

_Defined in [index.ts:16](https://github.com/fb55/SimpleQueue/blob/master/src/index.ts#L16)_

Creates a new FIFO queue.

##### Parameters:

| Name         | Type…
