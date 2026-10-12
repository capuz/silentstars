---
repo: "secustor/renovate-config-debugger"
name: "renovate-config-debugger"
description: "Validate and visiualize how your Renovate configurations merge"
readmeQualityOk: true
url: "https://github.com/secustor/renovate-config-debugger"
homepage: "https://renovate.secustor.dev/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["renovate"]
stars: 14
forks: 0
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-06-01T07:05:46Z"
lastCommitAt: "2026-10-12T11:16:56Z"
lastReleaseAt: "2026-10-04T18:23:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 54
maintainers: ["renovate[bot]", "secustor"]
openGraphImageUrl: "https://opengraph.githubassets.com/26d6a09a32f1e438bb4ef9128ee9c7a6a9d5c6fbbf231192e9d70c5cb222ef0f/secustor/renovate-config-debugger"
---

# Renovate Config Debugger

See what [Renovate](https://github.com/renovatebot/renovate) actually does with
your config before you commit it. It runs Renovate's own code in your browser,
and your config never leaves the page. Think "compiler explorer for Renovate
configs".

**[Try it live](https://renovate.secustor.dev/)** — there is nothing to
install — or [self-host it](#self-hosting-docker) with a single container.

Paste this and press _Run pipeline_, or [open it pre-filled](https://renovate.secustor.dev/#config=PZDNToQwFIVfpTlxWRnHEE36Bi50YXRlZ1HKHUCnP2kvqCG8uykDLpvzfeekd8YEdS-RyIfJMEGhrqu6eoCEDf48dFCYtRdC4ybbnpzRUEKjZ45ZHQ5tsLna7SZwZYM77O_bq1F95uA15LWGfph8m0vNh95GVCIbnCPfUqtx2khnMlN6ynmkQnMaaUuisV-mo9fxQluRF0KIeZXY9s_Gm47SPuKjK617-h5bw_T2G3cZbvAhbUiXwhhfjFs3V1dssVjKzEn7RXtInIcLFQ7q_3zrT8vpoHBMj0M-NpCYBvqGmpHZdIWOiTIxJDJThLqTYNNAIUyUVnZZ_gA):

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": ["config:recommended"],
  "masterIssue": true,
  "packageRules": [
    { "matchManagers": ["npm"], "matchUpdateTypes": ["minor"], "groupName": "npm minor" }
  ]
}
```

You'll see the deprecated `masterIssue` rewritten to `dependencyDashboard`,…
