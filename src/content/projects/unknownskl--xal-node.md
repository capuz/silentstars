---
repo: "unknownskl/xal-node"
name: "xal-node"
description: "Xbox Authentication Library for Typescript"
readmeQualityOk: true
url: "https://github.com/unknownskl/xal-node"
homepage: "https://unknownskl.github.io/xal-node/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["xal", "xbox"]
stars: 6
forks: 3
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-01-28T11:19:14Z"
lastCommitAt: "2026-10-05T10:46:18Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 89
maintainers: ["github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a3ef7b44cfc6764851ce04ae450b3ac735ce93f4487b870d2d5fde39907930b/unknownskl/xal-node"
fundingLinks: ["GITHUB:https://github.com/unknownskl"]
---

# xal-node

**xal-node:** Typescript implementation for Xbox Authentication Library (XAL)

📚 Documentation: [https://unknownskl.github.io/xal-node/](https://unknownskl.github.io/xal-node/)

## Other AppId and titleId's

It is possible to authenticate to different services using this library as well. Not all calls are supported but the authentication part is quite general. 
You can override the titleId like below:

    const xal = xallib.Xal()
    xal._app = {
        AppId: '<appId>',
        TitleId: '<titleId>',
        RedirectUri: '<redirectUri>',
    }

## Credits

Big thanks to [@tuxuser](https://github.com/tuxuser) and [Team OpenXbox](https://github.com/OpenXbox) for creating the xal-rs library and giving the inspiration to port this over to Typescript
