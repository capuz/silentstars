---
repo: "hulibuld/dsh-get-it-for-free"
name: "dsh-get-it-for-free"
description: "Integrate free and check-in account channels such as Huawei Cloud CodeArts, Tencent CodeBuddy / WorkBuddy, Qoder, TRAE, Raccoon, LobsterAI, MiniMax, ZCode, and iFlytek Loomy into DeepSeek Harness. Runs purely locally, with no telemetry."
originalDescription: "把华为云 CodeArts、腾讯 CodeBuddy / WorkBuddy、Qoder、TRAE、Raccoon、LobsterAI、MiniMax、ZCode、讯飞 Loomy 等免费/签到型账号渠道接入 DeepSeek Harness。纯本地运行，无遥测。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/hulibuld/dsh-get-it-for-free"
homepage: "https://www.npmjs.com/package/dsh-get-it-for-free"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-10-24T07:38:28Z"
lastCommitAt: "2026-11-04T13:05:30Z"
lastReleaseAt: "2026-10-26T15:54:55Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 37
maintainers: ["hulibuld"]
openGraphImageUrl: "https://opengraph.githubassets.com/73b4702ee73fe444ada832622c71774bfcc3de67744bae8a0727c119ba901ffe/hulibuld/dsh-get-it-for-free"
---

# dsh-get-it-for-free

Connects **free / check-in-style** large model account channels to [DeepSeek Harness](https://github.com/deepseek-ai) (DSH). Log in to accounts in settings, check in daily, and sync the pool of available models. Models then appear in the model picker as regular providers.

Runs purely locally: no telemetry, no self-update, and no requests sent to the upstream repository. Account credentials are written only to the local directory `~/.dsh/get-it-for-free/`.

## What you'll see on first use

The first time you open the settings page, a full-screen notice appears first. Its title is "Those who fear death, do not enter" (贪生怕死勿入斯门). In the center is a blood-red button labeled "Delete this plugin and exit" (删除该插件并退出), and the body is three paragraphs of blunt text. This button **really does uninstall this plugin**. It removes the dependencies and bundle entries from your profile, deletes the plugin directory, and then exits DSH. Accounts and historical data are kept in `~/.dsh/get-it-for-free/` and are not deleted. The almost invisible small text in the bottom right, "Continue using, ignoring the risk." (无视风险继续使用。), is what actually continues.

This notice is not…
