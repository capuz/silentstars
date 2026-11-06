---
repo: "bounce-chat/bounce"
name: "bounce"
description: "A metadata-protecting distributed group chat application"
readmeQualityOk: true
url: "https://github.com/bounce-chat/bounce"
language: "Go"
languages: ["Go", "Kotlin"]
languagePcts: [69, 30]
stars: 9
forks: 2
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-07-05T02:44:45Z"
lastCommitAt: "2026-11-06T02:44:42Z"
lastReleaseAt: "2026-08-06T17:35:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 76
maintainers: ["hkparker"]
openGraphImageUrl: "https://opengraph.githubassets.com/28071febbebc6f4f83036e12beba0d811ce36d7ce8ac931ae4e88cae496268cc/bounce-chat/bounce"
---

Bounce is a distributed group chat application that protects metadata, with a familiar look and feel.

## Design Overview

Each instance of Bounce includes a Tor hidden service, and all connections between devices occur over Tor.  Users can own multiple devices, including encrypted devices that do not have access to the message contents.  Users add contacts by scanning a code on the other person's device, or by meeting them in a group, there is no global namespace of all users.  Messages are scoped to their user or group, and gossiped between devices that are in scope and online.  Devices coming online have an efficient way to catch up.  Group states (name, admin status, etc) can survive a bad actor attempting to mess with history, so long as the majority of users are honest.  For more details, see the [goals](https://github.com/bounce-chat/bounce/blob/HEAD/docs/goals.md) and [design document](https://github.com/bounce-chat/bounce/blob/HEAD/docs/design.md).

## Status

I am actively working through a comprehensive vulnerability assessment.  During this time the protocol, including the format of user profiles, may undergo breaking changes.  Once this process is done the protocol…
