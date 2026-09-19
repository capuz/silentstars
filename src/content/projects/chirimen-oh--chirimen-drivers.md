---
repo: "chirimen-oh/chirimen-drivers"
name: "chirimen-drivers"
description: "Drivers for CHIRIMEN"
readmeQualityOk: true
url: "https://github.com/chirimen-oh/chirimen-drivers"
homepage: "https://chirimen.org/chirimen-drivers/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [96]
stars: 5
forks: 12
openIssues: 16
closedIssues: 38
watchers: 24
contributors: 21
recentReleases: 0
createdAt: "2019-07-31T03:03:17Z"
lastCommitAt: "2026-09-19T02:47:14Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 84
undervaluedScore: 72
maintainers: ["kou029w", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/061d27240a3817d801d18d5dd911d6c05c50842b0cfeffd064990e5d314606bf/chirimen-oh/chirimen-drivers"
---

# CHIRIMEN Drivers

## Usage

### Node.js

```
$ npm i chirimen
```

```js
import { requestI2CAccess, ADT7410 } from "chirimen";

const i2cAccess = await requestI2CAccess();
const adt7410 = new ADT7410(i2cAccess.ports.get(1), 0x48);
await adt7410.init();
await adt7410.read();
```

### Deno

```js
import { requestI2CAccess, ADT7410 } from "npm:chirimen";
```

## Documents

- [CHIRIMEN Tutorial](https://r.chirimen.org/tutorial)
- [CHIRIMEN Drivers Documentation](https://chirimen.org/chirimen-drivers/)
- [Web I2C API](https://browserobo.github.io/WebI2C/)

## [Contributing Guidelines](https://chirimen.org/chirimen-drivers/CONTRIBUTING)

- [環境構築・Git の基本](https://www.chirimen.org/chirimen-drivers/docs/contributing/setup.html)
- [ドキュメント修正](https://www.chirimen.org/chirimen-drivers/docs/contributing/first-contribution.html)
- [既存ドライバの修正](https://www.chirimen.org/chirimen-drivers/docs/contributing/fix-driver.html)
- [新しいドライバの追加](https://www.chirimen.org/chirimen-drivers/docs/contributing/add-driver.html)
- [リリース方法](https://www.chirimen.org/chirimen-drivers/docs/contributing/release.html)

## Download

- [@chirimen/ads1015](https://www.jsdelivr.com/package/npm/@chirimen/ads1015)
-…
