---
repo: "ioBroker/ioBroker.cameras"
name: "ioBroker.cameras"
description: "Integration of IP cameras into web server"
readmeQualityOk: true
url: "https://github.com/ioBroker/ioBroker.cameras"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [79]
topics: ["iobroker", "webcam", "ipcamera"]
stars: 16
forks: 10
openIssues: 11
closedIssues: 52
watchers: 5
contributors: 9
recentReleases: 0
createdAt: "2020-03-09T17:47:02Z"
lastCommitAt: "2026-11-23T12:25:41Z"
lastReleaseAt: "2023-07-07T10:59:11Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 94
undervaluedScore: 70
maintainers: ["github-actions[bot]", "dependabot[bot]", "GermanBluefox"]
openGraphImageUrl: "https://opengraph.githubassets.com/826eaedb1d6c182f50e21ba6def7cf962aafe8c899dbe312b671af9dc186d15e/ioBroker/ioBroker.cameras"
---

# ioBroker.cameras

**Tests:**: [](https://travis-ci.org/ioBroker/ioBroker.cameras)

**This adapter uses Sentry libraries to automatically report exceptions and code errors to the developers.** For more details and for information how to disable the error reporting see [Sentry-Plugin Documentation](https://github.com/ioBroker/plugin-sentry#plugin-sentry)! Sentry reporting is used starting with js-controller 3.0.

## IP-Cameras adapter for ioBroker
You can integrate your web/ip cameras into vis and other visualizations.
If you configure a camera with name `cam1` it will be available on 
web server under `http(s)://iobroker-IP:8082/cameras.0/cam1`.

**Use exactly that URL - without a file extension.** Every request to it grabs a new frame from the
camera, so a periodic reload gives you a live picture.
