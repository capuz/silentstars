---
repo: "rh-id/a-news-provider"
name: "a-news-provider"
description: "A simple RSS feed android application."
readmeQualityOk: true
url: "https://github.com/rh-id/a-news-provider"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["android", "android-application", "android-app", "rss", "rss-reader", "rss-feed", "rss-aggregator", "a-navigator", "a-provider"]
stars: 33
forks: 4
openIssues: 0
closedIssues: 24
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2021-10-11T06:40:49Z"
lastCommitAt: "2026-07-24T06:08:23Z"
lastReleaseAt: "2021-11-06T04:12:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 38
maintainers: ["rh-id"]
openGraphImageUrl: "https://opengraph.githubassets.com/f1ff44c253dafef3daaf93d2b506cef63cb50330607ec167ac2f657560b70b22/rh-id/a-news-provider"
---

# a-news-provider

A simple and easy to use RSS aggregator that deliver news to your smartphone.

**For Users:**
<ul>
  <li>Easily add new feed using shortcut</li>
  <li>Support RSS XML</li>
  <li>Support Atom XML</li>
  <li>Support background sync</li>
  <li>Simple interface to add and read your news</li>
  <li>Support dark mode and light mode</li>
  <li>Accessibility friendly with one hand mode</li>
  <li>Accessibility friendly on screen reader (tested with TalkBack)</li>
</ul>

This project is intended for demo app for [a-navigator](https://github.com/rh-id/a-navigator) and [a-provider](https://github.com/rh-id/a-provider) library usage.
The app still works as production even though it is demo app.

## Architecture

This application is built using a component-based architecture leveraging specific libraries for navigation and dependency injection.

### Core Libraries

*   **[a-navigator](https://github.com/rh-id/a-navigator):** Handles the UI navigation and lifecycle.
    *   **StatefulView:** Instead of Fragments or Activities for every screen, the app uses `StatefulView`. This allows for a more flexible and lightweight view hierarchy.
    *   **INavigator:** The interface…
