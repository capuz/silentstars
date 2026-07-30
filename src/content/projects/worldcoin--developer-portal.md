---
repo: "worldcoin/developer-portal"
name: "developer-portal"
description: "The Worldcoin Developer Portal provides tools to interact with the Worldcoin SDK. Easiest way to get started with World ID."
readmeQualityOk: true
url: "https://github.com/worldcoin/developer-portal"
homepage: "https://developer.worldcoin.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["managed-by-terraform", "team-developers"]
stars: 137
forks: 61
openIssues: 6
closedIssues: 14
watchers: 21
contributors: 245
recentReleases: 0
createdAt: "2022-06-11T13:35:11Z"
lastCommitAt: "2026-07-30T06:07:22Z"
lastReleaseAt: "2022-12-05T22:21:10Z"
status: "thriving"
tags: []
healthScore: 93
undervaluedScore: 46
maintainers: ["kchaw2005", "soamdesai-tfh", "Takaros999"]
openGraphImageUrl: "https://opengraph.githubassets.com/711955a733435968f50b5819e5f4d0aa8362728e704a674b3e0b670d9badccf0/worldcoin/developer-portal"
---

</a>

# Developer Portal

The World Developer Portal provides tools to interact with the [World ID Protocol](https://world.org/world-id). Along with [IDKit](https://github.com/worldcoin/idkit-js), it's the fastest way to get started with proof of personhood 🚀

## 📄 Documentation

All the technical docs for the World SDK, World ID Protocol, examples, guides can be found at https://docs.world.org/

## 🧑‍💻 Developing Locally

The Developer Portal uses some external services to operate. You do **not** need all the real credentials to run locally.

1. Copy the `.env.example` into a local env file

```
cd web/
cp .env.example .env
```

**Note:** You may also have to overwrite the `.env.local` file if one exists. The `.env.example` file contains all the environment variables needed to run locally with placeholder values for secrets.

2. Edit any environment variables for which you have real credentials.
3. AWS access is required to run the Developer Portal locally. The following AWS services are used:
   - **KMS** - for signing/encryption (Sign in with World ID, RP Registry)
   - **SSM Parameter Store** - for feature flags (e.g., World ID 4.0 enabled teams)
   - **S3** - for asset…
