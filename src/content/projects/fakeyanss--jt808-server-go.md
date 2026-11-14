---
repo: "fakeyanss/jt808-server-go"
name: "jt808-server-go"
description: "Terminal access service for JT/T 808 / JT/T 1078 / Subiao active safety. One protocol core, supporting Standalone single-process and Cluster multi-role deployment."
originalDescription: "JT/T 808 / JT/T 1078 / 苏标主动安全的终端接入服务。一套协议内核，支持 Standalone 单进程与 Cluster 多角色部署。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/fakeyanss/jt808-server-go"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["jt808", "jtt808", "jt1078", "jtt1078"]
stars: 158
forks: 59
openIssues: 0
closedIssues: 9
watchers: 3
contributors: 7
recentReleases: 1
createdAt: "2023-01-17T11:52:53Z"
lastCommitAt: "2026-11-14T10:49:26Z"
lastReleaseAt: "2026-11-14T09:39:00Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 100
undervaluedScore: 47
maintainers: ["fakeyanss"]
openGraphImageUrl: "https://opengraph.githubassets.com/a503869ceb66f3ffacedb248a9e611519d242b636974377581a15967eabbcfc8/fakeyanss/jt808-server-go"
fundingLinks: ["CUSTOM:https://github.com/fakeyanss/jt808-server-go/blob/main/docs/sponsor.md"]
---

# jt808-server-go

> Terminal access service for JT/T 808 / JT/T 1078 / Subiao active safety. One protocol core, supporting Standalone single-process and Cluster multi-role deployment.

## Project Positioning

jt808-server-go is a vehicle terminal access service written in Go, aimed at users of self-built vehicle supervision platforms, device access gateways, and protocol integration tools.

It consolidates terminal registration and authentication, location and alarms, active safety attachments, audio/video signaling, and media data into a single protocol core. Business data can use memory, SQLite, or MySQL depending on deployment scale. When access volume is small, one process can serve terminals; as access grows, it can be split by role into 808 gateway, control, 1078 media, and attachment nodes, with the protocol core unchanged.

The project does not provide a frontend console, only a JSON API; the business UI, account system, and tenant model are built by the user.

## Features

- **Protocol core decoupled from deployment shape**: the same encoding/decoding, packet splitting, reply pairing, and business processing run either as a Standalone single process or split by role.
-…
