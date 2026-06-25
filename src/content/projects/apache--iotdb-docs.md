---
repo: "apache/iotdb-docs"
name: "iotdb-docs"
description: "Apache IoTDB Documentation and Site"
url: "https://github.com/apache/iotdb-docs"
homepage: "https://iotdb.apache.org/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [67]
topics: ["database", "documentation", "timeseries"]
stars: 27
forks: 125
openIssues: 0
closedIssues: 0
watchers: 17
contributors: 102
recentReleases: 0
createdAt: "2023-07-07T12:05:52Z"
lastCommitAt: "2026-06-25T01:33:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 88
undervaluedScore: 63
maintainers: ["leto-bbq", "CritasWang", "HTHou"]
openGraphImageUrl: "https://opengraph.githubassets.com/c5a4ad1a1e995f0dbbdecf04a0a56f5c936c96bd16d8e61b92a405284e629e4c/apache/iotdb-docs"
---

# Website description

## IoTDB website

See https://iotdb.apache.org/

## Build Setup

run `npm run build` for doing the following steps automatically:

## How to Debug

then if you want to debug, just run 

```
# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

Remember, only the changes of site/src can be logged by Git. 
All changes in the target folder will be ignored by Git.

## Deploy Manually

## Preview your website

If you add `-Dscm-branch=asf-staging` in your command, then the website will be published to https://iotdb.staged.apache.org

## FAQ

If you get an error on your MacOS:

> gyp: No Xcode or CLT version detected! 

Then, install CommandLine of Xcode: `sudo xcode-select --install`.
If you have installed and the error still occurs, then `sudo xcode-select --reset`

# Document format

- All mds will be compiled into html, REDEME.md will be compiled into index.html, and xx.md will be compiled into xx.html
- The tags in .md must have a beginning and an end. For example, \<tr> must have a \</ tr> corresponding to it, and it is strictly corresponding; if you need to insert tags in the document, such as…
