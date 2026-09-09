---
repo: "nursoda/twofactor_email"
name: "twofactor_email"
description: "Two-Factor Email Provider for Nextcloud (current version, see state of the app)."
readmeQualityOk: true
url: "https://github.com/nursoda/twofactor_email"
language: "JavaScript"
languages: ["JavaScript", "PHP"]
languagePcts: [47, 42]
stars: 35
forks: 15
openIssues: 0
closedIssues: 54
watchers: 6
contributors: 19
recentReleases: 0
createdAt: "2018-08-17T08:30:35Z"
lastCommitAt: "2026-09-09T08:19:45Z"
lastReleaseAt: "2022-06-25T16:09:17Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 59
maintainers: ["nursoda", "dependabot[bot]", "seyfahni"]
openGraphImageUrl: "https://opengraph.githubassets.com/e36e607b4052fd2079a84d1262e1197aa9a53cdc16cbf7fb34d2b383f9a1c400/nursoda/twofactor_email"
---

# Please switch to new "v3" repo

In 2024, this app wasn't updated for a while and left admins and their users in an uncomfortable situation. I am sorry for that and try not to let that happen again. This app was never and is not abandoned. But THIS version 2.x ("v2") repo now is deprecated, please upgrade to [v3](https://github.com/datenschutz-individuell/twofactor_email).

I will make sure v2 is secure¹ and works for officially supported versions up to 31 as long as they are officially supported. For smooth transition, I released version 2.8.x that still work with the old code even on Nextcloud 33. But it uses quite a lot of deprecated APIs (and old dependencies) si it is strongly recommended to switch to v3. All existing v2 functionality is there, and quite some translations are already integrated. Some users and myself are using it for more than a year now, so we released it non-beta in May, 2026.
___
*¹Security: I am aware that this app has npm security warnings when building it. This in not due to my code but due to Nextcloud dependencies still relying on vue2, which is EOL since end of 2023 (and that EOL was annonced more than a year before that). When resolving…
