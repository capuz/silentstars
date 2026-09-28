---
repo: "CatChen/browser-id"
name: "browser-id"
description: "Unique ID for current browser (client)."
readmeQualityOk: true
url: "https://github.com/CatChen/browser-id"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [72, 28]
stars: 5
forks: 0
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2019-11-11T00:08:40Z"
lastCommitAt: "2026-09-28T10:06:23Z"
lastReleaseAt: "2022-10-17T02:59:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 99
undervaluedScore: 79
maintainers: ["dependabot[bot]", "check-git-status-bot[bot]", "CatChen"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa6d7b8b94a80523729eee9ed5194b82dd5cb71467aca9753780ed2b28d5b831/CatChen/browser-id"
fundingLinks: ["GITHUB:https://github.com/CatChen", "PATREON:https://patreon.com/catchen", "BUY_ME_A_COFFEE:https://buymeacoffee.com/catchen", "KO_FI:https://ko-fi.com/catchen"]
---

# browser-id [](https://github.com/CatChen/browser-id/actions/workflows/node.yml) [](https://github.com/CatChen/browser-id/actions/workflows/deno.yml) [](https://codecov.io/gh/CatChen/browser-id)

`getBrowserId()` always gives you the same ID for the same browser. You can use it as a key to store user preferences on server side.

```JavaScript
import { getBrowserId } from 'browser-id';

const id = getBrowserId();
```

For backward compatibility, `browserId()` remains available as an alias of `getBrowserId()`.

## Lifecycle controls

The package now provides explicit lifecycle controls for common flows like logout, consent withdrawal, and account switching.

- `getBrowserId(): string` - read the current browser ID or create a new one.
- `hasBrowserId(): boolean` - check whether an ID exists without generating one.
- `deleteBrowserId(): void` - remove any persisted browser ID.
- `rotateBrowserId(): string` - force-generate and persist a new browser ID.

The return value is always a `string` when using TypeScript.

Use package name with scope when used in Deno with JSR.

```TypeScript
import {
  deleteBrowserId,
  getBrowserId,
  hasBrowserId,
  rotateBrowserId,
} from…
