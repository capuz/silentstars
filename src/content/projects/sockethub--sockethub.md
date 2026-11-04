---
repo: "sockethub/sockethub"
name: "sockethub"
description: "Protocol gateway for the web: IRC, XMPP, feeds and more, using ActivityStreams 2.0."
readmeQualityOk: true
url: "https://github.com/sockethub/sockethub"
homepage: "https://sockethub.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
topics: ["activity-stream", "unhosted", "xmpp", "irc", "redis", "websockets", "socket-io", "sockethub", "javascript", "nodejs"]
stars: 394
forks: 46
openIssues: 26
closedIssues: 356
watchers: 20
contributors: 21
recentReleases: 0
createdAt: "2012-12-16T00:14:22Z"
lastCommitAt: "2026-11-04T13:04:52Z"
lastReleaseAt: "2021-05-22T23:17:35Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 97
undervaluedScore: 38
maintainers: ["silverbucket", "cursor[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/971af9b750a8dd95f54f11f905e44ff47567cc4e3e5af29ee4169065f2d52160/sockethub/sockethub"
---

# Sockethub

A protocol gateway for the web.

Sockethub lets browser apps talk to IRC, XMPP, feeds, and other protocols using
one ActivityStreams JSON format. Your app sends a single message shape, and
Sockethub handles connections, credentials, and protocol translation.

## What You Can Do

* Send and receive chat messages (IRC, XMPP)
* Fetch and parse feeds (RSS, Atom)
* Generate link previews and metadata
* Add new protocols as custom platforms

## ActivityStreams In/Out

Sockethub uses ActivityStreams JSON for all platforms. Your app sends the same
shape for IRC, XMPP, feeds, and more, and receives the same shape back. Only
the `@context` changes.

### Side-by-side Examples

  <source
    media="(prefers-color-scheme: dark)"
    srcset="docs/img/activitystreams-send-receive.dark.svg"
  />
  <source
    media="(prefers-color-scheme: light)"
    srcset="docs/img/activitystreams-send-receive.svg"
  />
  <img
    alt="ActivityStreams send/receive examples"
    src="docs/img/activitystreams-send-receive.svg"
  />

The `@context` selects a platform; the rest stays consistent.

## About

Sockethub is a translation layer for web applications to communicate with
protocols and services…
