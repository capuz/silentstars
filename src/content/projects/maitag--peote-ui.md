---
repo: "maitag/peote-ui"
name: "peote-ui"
description: "simple user interface based on peote-text and peote-view"
readmeQualityOk: true
url: "https://github.com/maitag/peote-ui"
language: "Haxe"
languages: ["Haxe"]
languagePcts: [100]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2020-04-20T22:50:01Z"
lastCommitAt: "2026-09-19T02:46:05Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 39
maintainers: ["maitag"]
openGraphImageUrl: "https://opengraph.githubassets.com/d6b2b78896f8cca651ba4d793e9c6f1dd3f930387f37b1103eaa0483edc46306/maitag/peote-ui"
---

# Peote UI - Userinterface for [peote-view](https://github.com/maitag/peote-view)

->work in progress<-

## Installation and Dependencies:

For fast opengl-rendering:
```
haxelib git peote-view https://github.com/maitag/peote-view
haxelib git peote-text https://github.com/maitag/peote-text
```

To put ui-elements into a nested layout:
```
haxelib git peote-layout https://github.com/maitag/peote-layout
```
While `PeoteUI` and it's widget-workflow is depend on [peote-layout](https://github.com/maitag/peote-layout),
you can also using `PeoteUIDisplay` and layout it manually like into sample here: [peote-layout/samples/peote-ui](https://github.com/maitag/peote-layout/tree/main/samples/peote-ui).

To map keyboard-shortcuts or using gamepad for input-control you need [input2action](https://github.com/maitag/input2action):
```
haxelib git input2action https://github.com/maitag/input2action
```

Finally install the lib itself by:
```
haxelib git peote-ui https://github.com/maitag/peote-ui
```

### Samples and usecases

Samples can be found into [peote-ui-samples](https://github.com/maitag/peote-ui-samples) repository.
Some into…
