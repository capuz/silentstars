---
repo: "chirimen-oh/node-web-gpio"
name: "node-web-gpio"
description: "GPIO access with Node.js"
readmeQualityOk: true
url: "https://github.com/chirimen-oh/node-web-gpio"
homepage: "https://www.npmjs.com/package/node-web-gpio"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 6
forks: 2
openIssues: 2
closedIssues: 9
watchers: 24
contributors: 6
recentReleases: 0
createdAt: "2019-10-12T17:06:21Z"
lastCommitAt: "2026-09-19T01:16:57Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch"]
healthScore: 92
undervaluedScore: 63
maintainers: ["renovate[bot]", "kou029w", "gurezo"]
openGraphImageUrl: "https://opengraph.githubassets.com/3971ac82f9e55cdc33303a6f7dc0d1c4bcf3a28877479e3b559e2b3f11ca25fa/chirimen-oh/node-web-gpio"
---

# node-web-gpio

GPIO access with Node.js

> [!NOTE]
> Linux only. This library uses the sysfs GPIO interface (`/sys/class/gpio`) and the native `epoll` addon for hardware interrupts, neither of which exist on Windows/macOS.

## Usage

```
$ npm i node-web-gpio
```

```js
import { requestGPIOAccess } from "node-web-gpio";
import { setTimeout as sleep } from "node:timers/promises";

const gpioAccess = await requestGPIOAccess();
const port = gpioAccess.ports.get(26);

await port.export("out");

while (true) {
  await port.write(1);
  await sleep(1000);
  await port.write(0);
  await sleep(1000);
}
```

### Input with hardware interrupts (epoll)

Input ports are watched via the Linux epoll API instead of polling, so `onchange` fires immediately on a hardware interrupt without dropping fast pulses.

```js
const port = gpioAccess.ports.get(17);

await port.export("in", { edge: "rising", debounce: 10 });

port.onchange = (event) => {
  console.log(event.value);
};
```

`export()` accepts an optional second argument (only applied when `direction` is `"in"`):

| Option      | Type                              | Default        | Description…
