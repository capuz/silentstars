---
repo: "emibcn/service-worker-updater"
name: "service-worker-updater"
description: "Manage Create React App's Service Worker update"
url: "https://github.com/emibcn/service-worker-updater"
homepage: "https://www.npmjs.com/package/@3m1/service-worker-updater"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["javascript", "javascript-library", "npm-package", "react", "react-component", "service-worker", "service-worker-lifecycle", "hacktoberfest", "typescript", "pwa"]
stars: 18
forks: 4
openIssues: 3
closedIssues: 5
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2021-04-08T15:42:03Z"
lastCommitAt: "2026-06-25T06:41:23Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 64
maintainers: ["emibcn", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b8aeeb4f7653838370728332c6c953b872baf76481f6803c006cecf514cfc15/emibcn/service-worker-updater"
---

# @3m1/service-worker-updater

> Manage Create React App's Service Worker update

If you have opted-in for the `register` callback of `serviceWorkerRegistration` in the `index.js` of the [PWA version of Create React APP](https://create-react-app.dev/docs/making-a-progressive-web-app/), you probably want to allow your users to update the application once a new service worker has been detected.

## How it works

Usually, browsers check for a new service worker version of a PWA every few days, or whenever the user reloads the page. But reloading the page does not necessarily updates the service worker. As the code managing the service worker is usually outside the React components tree, the message of a _new service worker detected_ needs to be passed through another mechanism than props or contexts. Here, we use an event triggered over `document`, which will previously have been added a listener. The component that adds the listener **is** inside the React's components tree, and receives and saves the `resgistration` object for later use in the `onLoadNewServiceWorkerAccept` callback.

## Install

### NPM

```bash
npm install --save @3m1/service-worker-updater
```

### Yarn

```bash…
