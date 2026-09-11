---
repo: "openWB/openwb-ui-settings"
name: "openwb-ui-settings"
description: "GUI for openWB 2.0+"
readmeQualityOk: true
url: "https://github.com/openWB/openwb-ui-settings"
language: "Vue"
languages: ["Vue", "JavaScript"]
languagePcts: [57, 36]
stars: 8
forks: 43
openIssues: 0
closedIssues: 3
watchers: 3
contributors: 31
recentReleases: 0
createdAt: "2021-09-03T07:18:36Z"
lastCommitAt: "2026-09-11T08:15:20Z"
lastReleaseAt: "2022-11-08T11:30:50Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 87
maintainers: ["benderl", "LKuemmel", "seaspotter"]
openGraphImageUrl: "https://opengraph.githubassets.com/36f173f42ec10c1a308cadadfa5d7c439c8339760a4f64c70be104e7dc231143/openWB/openwb-ui-settings"
---

# openwb-ui-settings

GUI for openWB v2.0+

## License

This project is licensed under GPLv3. Any commercial use must be authorized by openWB GmbH & Co. KG.

## Recommended Dev Environment

- VS Code
- VS Code Remote SSH Extension for development on the target system
- current stable npm version
- current stable nodejs version, min. v20.x!
- Vue.js devtools browser extension for debugging

## Project setup

**IMPORTANT:**
Due to a bug in vue-loader please clone this repo into `/opt/openWB-dev/openwb-ui-settings`. The full path is referenced on import and as a result the filename hashes will be different for every other path used. Hope this will be fixed soon.

```bash
npm install
```

It may be necessary to increase the number of allowed file watchers.
Add this line to your `/etc/sysctl.d/99-local.conf`:

```text
fs.inotify.max_user_watches=524288
```

Then reboot your system or update sysctl:

```bash
sudo sysctl --system -p
```

### Compiles and hot-reloads for development

```bash
npm run dev
```

If working with remote ssh extension, the port of the server will be redirected automatically.
Look at the output on how to access the server with a browser.

### Compiles and…
