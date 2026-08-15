---
repo: "w8tcha/CKEditor-AutoSave-Plugin"
name: "CKEditor-AutoSave-Plugin"
description: "Auto Save Plugin for the CKEditor v4 which automatically saves the content (via HTML5 LocalStorage)"
readmeQualityOk: true
url: "https://github.com/w8tcha/CKEditor-AutoSave-Plugin"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
stars: 46
forks: 46
openIssues: 1
closedIssues: 79
watchers: 2
contributors: 34
recentReleases: 0
createdAt: "2013-05-26T06:20:40Z"
lastCommitAt: "2026-08-15T04:06:14Z"
lastReleaseAt: "2019-10-24T16:39:46Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 89
undervaluedScore: 42
maintainers: ["w8tcha"]
openGraphImageUrl: "https://opengraph.githubassets.com/04e398e41459931c4c30c34217a6b23e297e13d8a85d91ae4d16df5fc2799e2c/w8tcha/CKEditor-AutoSave-Plugin"
---

CKEditor-AutoSave-Plugin
========================

Auto Save Plugin for the CKEditor v4 which automatically saves the content (via HTML5 LocalStorage) temporarly (for example when a login session times out). 
And after the content is saved it can be restored when the editor is reloaded.

#### How the Plugin works

The Plugin saves the content every 25 seconds (can be defined in the Config - autosave_delay), but only when the content has changed.

And when the Editor Page is reloaded and auto saved content is found and its different from the content loaded with the editor the user will be asked if the auto saved content should be loaded instead.

#### License

Licensed under the terms of the MIT License.

#### Installation

 1. Extract the contents of the file into the "plugins" folder of CKEditor.
 2. In the CKEditor configuration file (config.js) add the following code:

````js
config.extraPlugins = 'autosave';
````

##### To Configure the Plugin the following options are available...

````js
config.autosave = { 
      // Auto save Key - The Default autosavekey can be overridden from the config ...
      SaveKey : 'autosave_' + window.location + "_" + $('#' +…
