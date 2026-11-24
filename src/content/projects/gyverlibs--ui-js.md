---
repo: "GyverLibs/UI.js"
name: "UI.js"
description: "Simple UI builder"
originalDescription: "Simple UI builder"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/GyverLibs/UI.js"
homepage: "https://gyverlibs.github.io/UI.js/UI.min.js"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [86]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-06-26T11:00:12Z"
lastCommitAt: "2026-11-24T14:05:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 55
undervaluedScore: 44
maintainers: ["GyverLibs"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c0cbdbd3e5adb452dda8fa78f6ec8382b813527635dd0935abfc8f066e8a5e1/GyverLibs/UI.js"
---

# UI.js

Конструктор для создания простого меню настроек в браузере

[Демо](https://gyverlibs.github.io/UI.js/test/)

**Browser:** https://gyverlibs.github.io/UI.js/UI.min.js  
**Node:** `npm i @alexgyver/ui`

## Quick start

```js
const ui = new UI({ title: 'Control', theme: 'dark' });

ui.addSlider('speed', 'Speed', 50, 0, 100, 1, v => console.log(v));
ui.addSwitch('enabled', 'Enabled', true);
ui.addProgress('load', 'Load', 25);

ui.speed = 75;
ui.set('load', 60);
console.log(ui.get('speed'));
```

In the browser build, the global `UI` is used. When using the package, import the class from `@alexgyver/ui` according to the project's build format.
