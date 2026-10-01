---
repo: "mostafa-mansour1/previewAnyFile"
name: "previewAnyFile"
description: "Cordova Plugin to preview any file in native mode by providing the local or external URL"
readmeQualityOk: true
url: "https://github.com/mostafa-mansour1/previewAnyFile"
language: "Swift"
languages: ["Swift", "Java"]
languagePcts: [56, 37]
topics: ["cordova-plugin", "cordova-android", "cordova-android-plugin", "cordova-ios-plugin", "cordova-cli", "ionic", "ionic-plugin", "pdf-viewer", "pdf-document", "pdf"]
stars: 33
forks: 29
openIssues: 5
closedIssues: 35
watchers: 3
contributors: 5
recentReleases: 1
createdAt: "2019-08-20T11:42:16Z"
lastCommitAt: "2026-10-01T10:24:22Z"
lastReleaseAt: "2026-10-01T10:17:41Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 95
undervaluedScore: 43
maintainers: ["mostafa-mansour1"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff56348badabc5bab938833300286bfbed17e86cf656189c0553a3ba5d750c58/mostafa-mansour1/previewAnyFile"
---

# Preview Any File

**Open PDFs, Office documents, images and other files inside your Cordova or Capacitor app on iOS and Android.**

One call, any source: a file on the device, a URL, a base64 string, or a file bundled with your app.

<table>
  <tr>
    <th>iOS (Quick Look)</th>
    <th>Android (installed viewer app)</th>
  </tr>
  <tr>
    <td><img src="https://raw.githubusercontent.com/mostafa-mansour1/previewAnyFile/master/docs/ios.png" width="280" alt="A PDF invoice previewed with Quick Look on iOS"></td>
    <td><img src="https://raw.githubusercontent.com/mostafa-mansour1/previewAnyFile/master/docs/android.png" width="280" alt="The same PDF invoice opened in the PDF viewer on Android"></td>
  </tr>
</table>

```js
window.PreviewAnyFile.previewPath(
    status => console.log(status),          // "SUCCESS", then "CLOSING" when the user closes it
    error => console.error(error),
    'https://example.com/files/invoice.pdf'
);
```

## Contents

- [Features](#features)
- [Why this plugin exists](#why-this-plugin-exists)
- [Requirements](#requirements)
- [Install](#install)
- [API](#api)
- [Examples](#examples)
- [How it works](#how-it-works)
- [Troubleshooting](#troubleshooting)…
