---
repo: "rjriajul/wzgram"
name: "wzgram"
description: "WZGram : A high-performance Pyrogram fork, modernized for speed, efficiency, and the latest Telegram API."
readmeQualityOk: true
url: "https://github.com/rjriajul/wzgram"
homepage: "https://wzgram.com"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 35
forks: 19
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 123
recentReleases: 10
createdAt: "2026-06-28T19:12:11Z"
lastCommitAt: "2026-08-31T09:58:03Z"
lastReleaseAt: "2026-07-04T08:20:56Z"
status: "thriving"
tags: ["release_machine", "fork_magnet"]
healthScore: 100
undervaluedScore: 55
maintainers: ["SilentDemonSD", "rjriajul", "MRDarkOwl2K25"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1283297894/b987eecc-c93f-4725-82a1-b060add2cb00"
---

# wzgram

**Elegant, modern and asynchronous Telegram MTProto API framework in Python for users and bots**

</div>

wzgram is a **drop-in replacement** for Pyrogram, with access to the latest Telegram features including **Gifts, Stories, Topics, Business Accounts**, and more. Import `wzgram`; `from pyrogram import ...` still resolves to the same module rather than a second copy of it, so an existing Pyrogram codebase runs unchanged.

```python
from wzgram import Client, filters

app = Client("my_account")

@app.on_message(filters.private)
async def hello(client, message):
    await message.reply("Hello from wzgram!")

app.run()
```

**wzgram** is a modern, elegant and asynchronous [MTProto API](https://docs.pyrogram.org/topics/mtproto-vs-botapi) framework. It enables you to easily interact with the main Telegram API through a user account (custom client) or a bot identity (bot API alternative) using Python.

### Key Features

- **Drop-in Replacement** — New code says `from wzgram import ...`; existing `from pyrogram import ...` codebases migrate with zero changes, since both names are one module.
- **Up-to-Date** — Supports Gifts, Stories, Topics, Business Accounts, Giveaways, and…
