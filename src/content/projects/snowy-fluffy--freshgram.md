---
repo: "Snowy-Fluffy/freshGram"
name: "freshGram"
description: "Telegram Desktop fork: Better materialgram look + AyuGram features and more"
readmeQualityOk: true
url: "https://github.com/Snowy-Fluffy/freshGram"
language: "C++"
languages: ["C++"]
languagePcts: [78]
stars: 51
forks: 3
openIssues: 2
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-02T08:16:56Z"
lastCommitAt: "2026-10-12T11:15:27Z"
lastReleaseAt: "2026-10-10T20:51:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 38
maintainers: ["Snowy-Fluffy", "Olyaham", "they-them"]
openGraphImageUrl: "https://opengraph.githubassets.com/5b04a7e424ae7d627d231057f20f114bce66ac081eb008251a23462b31cdd6ab/Snowy-Fluffy/freshGram"
---

# freshGram

[ English | [Русский](https://github.com/Snowy-Fluffy/freshGram/blob/HEAD/README-RU.md) ]

freshGram is a [Telegram Desktop](https://github.com/telegramdesktop/tdesktop) fork that combines
the Material Design look and customization of [materialgram](https://github.com/kukuruzka165/materialgram)
with all the features of [AyuGram Desktop](https://github.com/AyuGram/AyuGramDesktop).
It is based on the [Telegram API][telegram_api] and the [MTProto][telegram_proto] secure protocol.

The source code is published under GPLv3 with OpenSSL exception, the license is available [here][license].

## Features

### From AyuGram Desktop

- Full ghost mode (flexible)
- Messages history: the edits of other people and your own and the deleted messages are kept in a local database, which is backed up automatically (the newest valid backup is restored if the database gets corrupted)
- Storage settings (Settings - freshGram - Storage): how many edits are kept per message, how many deleted messages are loaded when a chat opens, how many messages are saved when you leave a chat, the size limit of saved deleted media, how long deleted messages and edits are kept, and how many database backups…
