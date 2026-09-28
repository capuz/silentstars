---
repo: "classroomtechtools/classroomtechtools.github.io"
name: "classroomtechtools.github.io"
description: "Trick out Awesometables and turn and Google Site into a web app."
readmeQualityOk: true
url: "https://github.com/classroomtechtools/classroomtechtools.github.io"
language: "CSS"
languages: ["CSS"]
languagePcts: [82]
stars: 8
forks: 4
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 3
recentReleases: 0
createdAt: "2015-12-29T05:29:06Z"
lastCommitAt: "2026-09-28T10:05:50Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 45
undervaluedScore: 40
maintainers: ["brainysmurf"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0fdee611b77dc91f98876e0d57050b892dba9eb78536d18c7a58928810e37fb/classroomtechtools/classroomtechtools.github.io"
---

# Released Software

## Practical Libraries

Libraries aimed at "citizen developers" working in the AppsScripts platform.

### [Object Store](https://classroomtechtools.github.io/ObjectStore/)

Use the cache and properties store like a pro, without having to code it out. 

```js
// "global" stores, choose from 'script', 'document' or 'user'
const autoStore = ObjectStore.create();  // 'script by default'
const manualStore = ObjectStore.create('script', {manual: true});

function autopersist () {   
    // persisted now:
    autoStore.set('key', {value: 'value'});  
    ... // on next execution
    const value = autoStore.get('key');
}

function manuallypersist () {
    const dataArray = [ {idx: 1, d: 'd'}, ... ];
    for (const item of dataArray) {
        // keys must be strings (throws error if not):
        const key = item.idx.toString();  
        // does not persist in PropertiesStorage yet:
        manualStore.set(key, item);  
    }
    // manually tell it to persist, more performant
    manualStore.persist(); 
}
```

### [Dottie](https://classroomtechtools.github.io/dottie/)

Make jsons or javascript objects by using strings; useful in a variety of applications. 

```js…
