---
repo: "bojue/canvas-excel"
name: "canvas-excel"
description: "Technical research project for developing Excel based on Canvas (React)"
originalDescription: "基于Canvas开发Excel的技术预研项目(React)"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/bojue/canvas-excel"
homepage: "https://bojue.github.io/canvas-excel"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
stars: 79
forks: 12
openIssues: 4
closedIssues: 7
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2020-07-31T12:30:53Z"
lastCommitAt: "2026-07-23T06:14:04Z"
lastReleaseAt: "2021-02-19T01:33:44Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 73
undervaluedScore: 27
maintainers: ["bojue"]
openGraphImageUrl: "https://opengraph.githubassets.com/7f6bcf3e061219b992b70b4dafb29206f9c07b8afd53b8e5e622c0b8da4d77d5/bojue/canvas-excel"
---

# canvas-excel

Technical research on Excel developed based on Canvas

[Online Preview](https://bojue.github.io/canvas-excel)

## Run

```javaScript
git clone https://github.com/bojue/canvas-excel.git

npm install 

npm run dev // Run locally 
 
npm run build // Build production package

```

### Open in Browser

```javaScript
http://localhost:4000/
```
### Excel Cell Object Definition

```javaScript
ExcelDataItem = [
    [
        'colums',    // Number of columns
        'rows',      // Number of rows,
    ],     
    'txt', // Content type txt|img|...
    'value', // Content
    {
        'text':{
            'color':'#000',
            'fontStyle': 'normal' || 'italic',
            'fontFamily':'微软雅黑',
            'fontSize':10,
            'fontWeight': 'normal' || 'bold',
            'lineHeight':10,
            'textAlign': 'center' || 'right' || 'center',
        },
        'line':{
            'textLine':'underline' || 'normal'
        },
        'rect': {
            'fillStyle':"#fff"
        }
    }
]
```

> Optimization plans

1. Throttle optimization for toolbar text input/local mapping rendering
2. Binary method to determine cell area selection coordinates
3. Double…
