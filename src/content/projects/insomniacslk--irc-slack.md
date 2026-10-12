---
repo: "insomniacslk/irc-slack"
name: "irc-slack"
description: "IRC-to-Slack gateway"
readmeQualityOk: true
url: "https://github.com/insomniacslk/irc-slack"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["irc", "slack", "irc-client", "slack-team", "gateway", "irc-slack", "weechat", "irssi"]
stars: 206
forks: 20
openIssues: 21
closedIssues: 40
watchers: 6
contributors: 10
recentReleases: 0
createdAt: "2018-04-02T18:55:41Z"
lastCommitAt: "2026-10-12T11:15:27Z"
lastReleaseAt: "2018-04-08T11:16:29Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 75
undervaluedScore: 22
maintainers: ["dependabot[bot]", "insomniacslk"]
openGraphImageUrl: "https://opengraph.githubassets.com/9199e2742729b93c85b61a49ab271750c94b017f88824b6433bc77a46662d3c6/insomniacslk/irc-slack"
---

# IRC-to-Slack gateway

`irc-slack` is an IRC-to-Slack gateway. It is an IRC server that lets you
connect to your Slack teams with your IRC client.

(That guy is me)

Slack has ended support for IRC and XMPP gateway on the 15th of May 2018. So
what's left to do for people like me, who want to still be able to log in via
IRC? Either you use [wee-slack](https://github.com/wee-slack/wee-slack) (~~but I
don't use WeeChat~~), or you implement your own stuff.

NOTE: after Slack turned down their IRC gateway I got a lot of contacts from users of irc-slack asking me to fix and improve it. I didn't expect people to actually use it, but thanks to your feedback I'm now actively developing it again :-)
Please keep reporting bugs and sending PRs!

## How to use it

```
cd cmd/irc-slack
make # use `make` instead of `go build` to include build information when running with `-v`
./irc-slack # by default on port 6666
```

Then configure your IRC client to connect to localhost:6666 and use one of the methods in the Tokens section to set the connection password.

You can also [run it with Docker](#run-it-with-docker).

## Feature matrix

|     | public channel | private channel | multiparty IM | IM…
