---
repo: "excelano/zirbe"
name: "zirbe"
description: "Email that feels like texting — a free, open-source iOS and iPadOS email client that renders every thread as a conversation of bubbles. No backend, no account."
readmeQualityOk: true
url: "https://github.com/excelano/zirbe"
homepage: "https://excelano.com/zirbe"
language: "Swift"
languages: ["Swift"]
languagePcts: [99]
topics: ["email", "email-client", "ios", "ipados", "open-source", "privacy", "productivity", "swift", "swiftui"]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-06-09T05:31:02Z"
lastCommitAt: "2026-11-06T02:44:05Z"
lastReleaseAt: "2026-11-06T02:32:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 47
maintainers: ["anderix"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1263607959/9743b56c-12e1-4aae-8a15-7b8be211d540"
---

# Zirbe

An open-source email client for iPhone and iPad that looks and feels like a
texting app, while keeping real email underneath. Standards-only, no backend,
free. On iPad the conversation list sits beside the open conversation.

## The name

*Zirbe* is German for the Swiss stone pine, the pine of the Alps. The name
continues a lineage of text-mode mail clients that runs **Elm → Pine → Alpine**,
and lands on another pine. The hidden meaning is the point: it reads like a
coined word and rewards anyone who looks it up.

## What it is

A conversation in Zirbe is an email **thread**, not a person. A thread is
identified by the RFC 5322 `Message-ID`, `In-Reply-To`, and `References`
headers and shown like a named group chat: the **subject is the title**, the
people on `From`/`To`/`Cc` are the members, and each message is one bubble in
time order. The same person writing five different-subject threads produces
five conversations, which is correct email behavior. Starting a new
conversation requires naming it, and that name is the subject.

## Principles

Apple Messages is the aesthetic muse, never a clone. I implement only what the
email RFCs define (5321 SMTP, 5322 message format,…
