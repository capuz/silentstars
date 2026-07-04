---
repo: "TomerFi/auto-me-bot"
name: "auto-me-bot"
description: "A Probot app that takes care of your GitHub repos for you"
readmeQualityOk: true
url: "https://github.com/TomerFi/auto-me-bot"
homepage: "https://github.com/apps/auto-me-bot"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["github", "probot", "probot-app", "conventional-commits", "semantic-versioning", "aws-lambda", "hacktoberfest"]
stars: 13
forks: 7
openIssues: 2
closedIssues: 16
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2022-04-10T13:31:42Z"
lastCommitAt: "2026-07-04T22:24:45Z"
lastReleaseAt: "2022-09-08T19:37:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 78
maintainers: ["dependabot[bot]", "TomerFi", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e744a2fb13d4e0dad2ad208684425dab485f71f73a0a47e92a5d40b34bc53004/TomerFi/auto-me-bot"
discussionCount: 0
---

# 🤖 Auto-Me-Bot

🚧 Managing a repository can be cumbersome and tiresome.<br/>
🤖 [auto-me-bot][app] is here to take some of the load off your shoulders!

📖 Check the docs: [https://auto-me-bot.figenblat.com][docs]<br/>
🖱️ Install the app: [https://github.com/apps/auto-me-bot][app]

> [!Tip]
> If you enforce conventional commit messages, use [version-bumper-action][vba] to automate your release process.

---

```yaml
# .github/auto-me-bot.yml - check the docs for a complete example
---
pr:
  lifecycleLabels: # label PRs based on their lifecycle
  conventionalCommits: # enforce conventional commit messages in PRs
  conventionalTitle: # enforce conventional title for PRs
  signedCommits: # enforce all commits in PRs are signed with the 'Signed-off-by' trailer
  tasksList: # verify completion of tasks list in PRs
  autoApprove: # automatically approve specific PRs
```
![success]

[app]: https://github.com/apps/auto-me-bot
[docs]: https://auto-me-bot.figenblat.com
[vba]: https://github.com/TomerFi/version-bumper-action
[success]: https://raw.githubusercontent.com/TomerFi/auto-me-bot/main/docs/img/all-handlers-success.png
