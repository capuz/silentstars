---
repo: "xiaomoL444/ugc-tool"
name: "ugc-tool"
description: "UGC tool webpage"
originalDescription: "ugc工具网页"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/xiaomoL444/ugc-tool"
homepage: "https://tool.xiaomol444.xyz/"
language: "JavaScript"
languages: ["JavaScript", "Vue"]
languagePcts: [54, 27]
stars: 10
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-09T07:47:26Z"
lastCommitAt: "2026-11-03T19:05:23Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 43
maintainers: ["xiaomoL444"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a54ba82a9c77422878159b8a0a73b27f97d8df73abb1783a8bdbfbed85bc3a5/xiaomoL444/ugc-tool"
---

# ugc-tools

## Download
```
git clone https://github.com/xiaomoL444/ugc-tool
```

## Project setup
```
pnpm install
```

### Compiles and hot-reloads for development
```
pnpm run serve
```

In the development environment, all OSS requests go through the same-origin `/ugc-tool-data/...` proxy:

- It first tries to read `https://oss.xiaomol444.xyz/ugc-tool-data-beta/...`.
- Only when the beta file returns **404** does it read `https://oss.xiaomol444.xyz/ugc-tool-data/...`. Network errors, 403, 5xx, and similar responses do not trigger the fallback.
- JSON, translation tables, images, audio, and video all follow the same rule, and media Range requests are supported. The response header `X-Ugc-Data-Source` shows the actual source, either `beta` or `production`.
- The beta `data.json` should contain the complete index for the tool (both production and test content). The two JSON files are not merged automatically per entry. Only newly added or modified resources need to be uploaded to the beta directory; shared resources can remain in the production directory.
- For example: the index goes in `ugc-tool-data-beta/EffectPlayer/data.json`, and a new image goes in…
