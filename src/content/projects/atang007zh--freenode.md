---
repo: "ATang007ZH/freenode"
name: "freenode"
description: "Free nodes, cherish them"
originalDescription: "免费节点 好好珍惜"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ATang007ZH/freenode"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2024-07-02T14:25:20Z"
lastCommitAt: "2026-11-07T09:30:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 72
maintainers: ["github-actions[bot]", "ATang007ZH"]
openGraphImageUrl: "https://opengraph.githubassets.com/d94e7104d40f12e12041212317680e2a3e5ff3f065ec64808875afd3c4365d13/ATang007ZH/freenode"
---

Passwall usage recommendations:

    Node subscription, add
        Remark: myfreenode
        URL: https://github.com/ATang007ZH/freenode@main/freenode-base64
        Enable automatic subscription update: check
        Update mode: loop
        Update interval: 1 hour
        Subscription URL access method: direct connection [Do not select automatic, as it will use the proxy. Under direct connection, add bgithub.xyz, otherwise it will automatically go through the proxy and fail to update.]

    Rule list, direct list, add: dgithub.xyz

    [Configure multi-node automatic switching:] Setup method: https://github.com/ATang007ZH/Action-237-immortalwrt-mt798x-24.10/discussions/16


~~updatechecker-pw.sh is for passwall~~
----------------------------------------------
The new passwall code has been improved to check first and only perform an update when there is a change.
It also natively supports hourly updates.

So passwall no longer needs this .sh script. Just update the subscription directly.

2025-1-13

updatechecker-hp.sh is for homeproxy
----------------------------------------------
Usage of updatechecker-hp.sh: (similar to -pw)

SSH login

Upload updatechecker-hp.sh to the…
