---
repo: "r2-studio/robotmon-scripts"
name: "robotmon-scripts"
description: "Run Javascript on Android. Screenshot, Touch, ..."
readmeQualityOk: true
url: "https://github.com/r2-studio/robotmon-scripts"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [97]
stars: 89
forks: 72
openIssues: 36
closedIssues: 19
watchers: 11
contributors: 20
recentReleases: 0
createdAt: "2017-09-11T07:38:57Z"
lastCommitAt: "2026-09-06T08:03:38Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 81
undervaluedScore: 39
maintainers: ["Cooper6334", "Sean-Hsueh", "jasoncwho"]
openGraphImageUrl: "https://opengraph.githubassets.com/a677c55534e717a0d46b7872192e6610e068fa171206822bd2cfaa648888f292/r2-studio/robotmon-scripts"
---

# Robotmon JavaScript APIs

Only support ES5

## Contents

* [JavaScript Events](#javascript-events)
* [JavaScript Interface](#javascript-interface)
* [JavaScript Raw APIs](#javascript-raw-apis)
* [RBM library APIs](#rbm-library-apis)
* [gRPC APIs](#grpc-apis)
* [Debug](#debug)

## JavaScript Events

Add the following `<script>` in the `<head>` section of `index.html`

`start()` and `stop()` should defined in `index.js`

```html
<script>
  function onEvent(eventType) {
    if (eventType === 'OnPlayClick') {
      JavaScriptInterface.runScript(`start();`);
    } else if (eventType === 'OnPauseClick') {
      JavaScriptInterface.runScript('stop();');
    }
  }

  function onLog(message) {
    console.log(message);
  }
</script>
```

| event name     |
|----------------|
| OnMenuClick    |
| OnPlayClick    |
| OnPauseClick   |
| OnLogClick     |
| OnSettingClick |
| OnCloseClick   |

## JavaScript Interface

```javascript
runScript(script)
```

* `script` String

```javascript
runScriptCallback(script, callback)
```

* `script` String
* `callback` String

```javascript
clickIconButton()
```

Click the `app icon button` on floating widget.

```javascript
clickPlayButton()
```

Click…
