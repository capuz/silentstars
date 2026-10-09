---
repo: "xPaw/GitHub-WebHook"
name: "GitHub-WebHook"
description: "🐱 Validates and processes GitHub's webhooks"
readmeQualityOk: true
url: "https://github.com/xPaw/GitHub-WebHook"
language: "PHP"
languages: ["PHP", "TypeScript"]
languagePcts: [54, 46]
topics: ["irc", "github-webhooks", "php", "parsing", "github"]
stars: 33
forks: 9
openIssues: 0
closedIssues: 5
watchers: 4
contributors: 3
recentReleases: 0
createdAt: "2014-03-04T15:22:14Z"
lastCommitAt: "2026-10-09T10:50:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 94
undervaluedScore: 53
maintainers: ["xPaw"]
openGraphImageUrl: "https://opengraph.githubassets.com/c6a2db138edf213269c12f5a2571a6cedc1df2de0683d6047da04c1b50bd5403/xPaw/GitHub-WebHook"
fundingLinks: ["GITHUB:https://github.com/xPaw"]
---

# GitHub WebHook
Accepts webhook events of [GitHub](https://github.com/), validates them, and converts them into
readable messages which can be sent out to an IRC channel or a Discord webhook.

A push, a merged pull request and a release look like this on IRC, with colors:

```
[Hello-World] monalisa pushed 1 new commit: Add tests for the webhook handler https://github.com/monalisa/Hello-World/commit/8ddec647
[Hello-World] monalisa merged pull request #6 from monalisa to master: test pull request. https://github.com/monalisa/Hello-World/pull/6
[Spoon-Knife] monalisa published a pre-release 0.0.4: https://github.com/octo-org/Spoon-Knife/releases/tag/0.0.4
```

On Discord the same events are cards built with [components](https://docs.discord.com/developers/components/reference),
sent under the name and avatar of the GitHub user who set the event off, headed by a link
such as "monalisa pushed 1 new commit", with the commits, the comment or the release notes below it.

Discord can accept GitHub webhooks on its own when `/github` is added to the url of a webhook,
but it only formats a handful of events and silently drops the rest, such as security alerts, wiki edits
and everything…
