---
repo: "ryuzcorp/noite"
name: "noite"
description: "Tiny self-hostable PaaS for celld: Enjoy most of Cloudflare Worker APIs on your potato VPS."
readmeQualityOk: true
url: "https://github.com/ryuzcorp/noite"
homepage: "https://noite.now/"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [51, 41]
topics: ["celld", "cloudflare-workers", "effect", "hosting", "paas", "platform", "self-hosted", "serverless", "vps", "worker"]
stars: 31
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 6
createdAt: "2026-09-15T06:03:51Z"
lastCommitAt: "2026-10-22T08:51:54Z"
lastReleaseAt: "2026-10-21T20:11:43Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 88
undervaluedScore: 44
maintainers: ["ryuzdev", "cameronapak"]
openGraphImageUrl: "https://opengraph.githubassets.com/434d34b6961ed81dd1311b628251e6bd651172c681462814fe74abeabe5839bb/ryuzcorp/noite"
fundingLinks: ["GITHUB:https://github.com/ryuzdev"]
---

# Noite

**The app platform you own.**

A tiny, self-hostable PaaS for [celld](https://celld.dev) apps: `git push` deploys, with Durable Objects, SQL databases and object storage included.<br /> One command installs it, one image runs it, and your data lives in a bucket you own.

**[Docs](https://noite.now/introduction/)** · **[Quickstart](https://noite.now/quickstart/)** · **[How it works](https://noite.now/how-it-works/)** · **[Changelog](https://github.com/ryuzcorp/noite/blob/HEAD/CHANGELOG.md)** · **[Discord](https://discord.gg/WnVTMCTz74)**

---

> [!IMPORTANT]
>
> Noite is in **alpha**. It runs real apps, but read the [known limits](https://noite.now/self-hosting/known-limits/) before you invite people you would not give shell access to a shared server. Upgrades are announced in the [changelog](https://github.com/ryuzcorp/noite/blob/HEAD/CHANGELOG.md), each with an "Operator action required" section.

```bash
curl -fsSL https://noite.now/run.sh | bash -s install
```

## Why Noite

- **Own the whole stack.** Your server, your bucket, your bill. Noite is open source (Apache-2.0); you pay for a VPS and storage, nothing else.
- **Bring your Workers app.** Many Cloudflare Workers…
