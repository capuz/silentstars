---
repo: "axe-demo/maya-kai"
name: "maya-kai"
description: "Gesture mirroring for ReactNative"
url: "https://github.com/axe-demo/maya-kai"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 169
forks: 9
openIssues: 2
closedIssues: 2
watchers: 7
contributors: 4
recentReleases: 0
createdAt: "2016-08-30T23:30:34Z"
lastCommitAt: "2026-06-24T23:39:15Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 90
undervaluedScore: 21
maintainers: ["dependabot[bot]", "axemclion"]
openGraphImageUrl: "https://opengraph.githubassets.com/a715e3c1610660a07e25ce432166ea160a6f051709173f49905f374deccd1aa6/axe-demo/maya-kai"
---

# Maya-Kai ( மாய கை )

A way to mirror gestures and user interactions in ReactNative applications.
Useful for testing apps on devices with different screen sizes at the same time - just interact with one device and all other devices follow the interactions.
Can also be used for recording and then replaying user interactions.

ReactNative uses React's EventPluginHub and this module adds an additional plugin to listen to events and send them to a server. The server broadcasts these events to all other connected clients, enabling mirroring of gestures.

## Usage
1. Install the package using `npm install maya-kai` inside your ReactNative applications.If you are running React-Native@0.46, you may need to patch ReactNative. Run `node ./node_modules/maya-kai/patch.js` to expose the functions needed for listening to events.

2. _Server _- Start the server at port 8082 using `node_modules/.bin/maya-kai-server`.  Note that this server should be accessible to the device and you may need to do `adb reverse tcp:8082 tcp:8082` for Android.

3. _Client_ - Import and start this module in the ReactNative application's start file - like `index.ios.js` or `index.android.js` using
```javascript…
