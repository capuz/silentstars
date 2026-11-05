---
repo: "beeper/groupme"
name: "groupme"
description: "A Matrix-GroupMe puppeting bridge"
readmeQualityOk: true
url: "https://github.com/beeper/groupme"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 23
forks: 9
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 33
recentReleases: 0
createdAt: "2022-10-21T13:58:59Z"
lastCommitAt: "2026-11-05T11:24:07Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 67
maintainers: ["Fizzadar", "realtofuine", "iFixRobots"]
openGraphImageUrl: "https://opengraph.githubassets.com/ea503202452c027d16a465e1c467b2c9b4644b185065d70ad66291d0d59ee86a/beeper/groupme"
---

# Matrix–GroupMe bridge

A GroupMe puppeting bridge using [mautrix-go bridgev2](https://github.com/mautrix/go).

This is a development bridge. The October 14, 2026 candidate builds and passes
native request, conversion, history, and activity-routing checks. A dedicated
self-hosted connection on a production Beeper account has verified group/DM text,
replies, reactions, and initial history with two GroupMe accounts. Media validation
is incomplete.

## Supported connector behavior

- Token and Beeper webview login, with account-scoped group and DM portals.
- Group and DM discovery, contact listing, new DMs with known contacts, text,
  replies, and native emoji reactions.
- Images, GIF images, videos, locations, and group file attachments. Generic files
  in DMs are rejected because GroupMe's file service is group-scoped.
- Media captions and filenames; formatted text is flattened to plain text.
- Optional framework direct media for images, videos, group files, and avatars.
- Incoming group metadata, membership, and account profiles.
- DM message requests through bridgev2's standard acceptance interface.
- Incoming active polls with single- and multiple-choice voting from Beeper,…
