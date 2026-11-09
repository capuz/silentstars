---
repo: "ioBroker/ioBroker.ping"
name: "ioBroker.ping"
description: "Pings configured IPs for ioBroker"
readmeQualityOk: true
url: "https://github.com/ioBroker/ioBroker.ping"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
topics: ["iobroker", "smarthome", "ping"]
stars: 19
forks: 23
openIssues: 5
closedIssues: 101
watchers: 5
contributors: 27
recentReleases: 0
createdAt: "2014-11-02T20:23:16Z"
lastCommitAt: "2026-11-09T12:00:50Z"
lastReleaseAt: "2022-02-24T20:48:40Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 74
maintainers: ["GermanBluefox", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1701403a6c74c166ba88b29ca4b99d788211d0c2f9c44684530a52aa0e0014d1/ioBroker/ioBroker.ping"
---

# PING Adapter

## Pings configured IP addresses.

Pings specified IP addresses in a defined interval and monitors the results.

You can also monitor TCP ports by specifying the port number after the IP address with a colon (e.g., `192.168.1.1:80` or `google.com:443`). This will check if the port is reachable instead of using ICMP ping.

**This adapter uses Sentry libraries to automatically report exceptions and code errors to the developers.** For more details and for information on how to disable the error reporting, see [Sentry-Plugin Documentation](https://github.com/ioBroker/plugin-sentry#plugin-sentry)! Sentry reporting is used starting with js-controller 3.0.

## Ping from `javascript` adapter

You can ping any IP address from the JavaScript adapter with the command:

```js
sendTo('ping.0', 'ping', '192.168.1.1', res => {
    console.log('Result: ' + JSON.stringify(res)); // Result: {"result": {"host": "192.168.1.1", "alive": true, "ms": 250}}
});
```

You can also check TCP ports:

```js
sendTo('ping.0', 'ping', '192.168.1.1:80', res => {
    console.log('Result: ' + JSON.stringify(res)); // Result: {"result": {"host": "192.168.1.1:80", "alive": true, "ms": 15}}
});
```…
