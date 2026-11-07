---
repo: "n00bcodr/Jellyfin-JavaScript-Injector"
name: "Jellyfin-JavaScript-Injector"
description: "A Jellyfin plugin to inject Javascript"
readmeQualityOk: true
url: "https://github.com/n00bcodr/Jellyfin-JavaScript-Injector"
language: "C#"
languages: ["C#", "HTML"]
languagePcts: [53, 46]
topics: ["jellyfin", "jellyfin-plugin", "jellyfin-web", "jellyfin-community-plugin"]
stars: 179
forks: 6
openIssues: 0
closedIssues: 16
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-07-30T13:09:58Z"
lastCommitAt: "2026-11-07T22:50:33Z"
lastReleaseAt: "2026-01-18T18:27:53Z"
status: "thriving"
tags: ["funded"]
healthScore: 93
undervaluedScore: 33
maintainers: ["github-actions[bot]", "n00bcodr"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1029058051/07e162b2-f661-45fd-bc43-98b7605a8932"
fundingLinks: ["KO_FI:https://ko-fi.com/n00bcodr", "BUY_ME_A_COFFEE:https://buymeacoffee.com/n00bcodr"]
discussionCount: 0
---

# Jellyfin Plugin - JavaScript Injector

The JavaScript Injector plugin for Jellyfin allows you to inject multiple, independent JavaScript snippets into the Jellyfin web UI. It provides a powerful and easy-to-use configuration page to manage all your custom scripts from one place.

## ✨ Features

-   **Multiple Scripts**: Add as many custom JavaScript snippets as you want.

-   **Organized UI**: Each script is managed in its own collapsible section, keeping your configuration clean and easy to navigate.

-   **Enable/Disable on the Fly**: Toggle individual scripts on or off without having to delete the code.

-   **Immediate Injection**: The plugin injects a loader script into the Jellyfin web UI on every page load, with no changes to your Jellyfin install on disk. Your custom scripts are loaded dynamically, and changes take effect after a simple browser refresh.

-   **Module and External Scripts**: Load a script as an ES module (so it can use `import`) or from a URL instead of pasting the code. External `http(s)` URLs are off by default; an admin can allow them with **Allow external script URLs**.

-   **Plugin Support**: Other plugins can register their own JavaScript snippets…
