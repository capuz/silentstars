---
repo: "salaros/is-biz-mail-js"
name: "is-biz-mail-js"
description: "isBizMail tells you whether a given email address belongs to a free email account provider (gmail.com, yahoo.es, yandex.ru etc) or not."
readmeQualityOk: true
url: "https://github.com/salaros/is-biz-mail-js"
homepage: "https://codecave.pro#projects"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["email", "free", "domain", "business", "business-email", "blacklist", "mailbox", "mail", "javascript", "js"]
stars: 7
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2018-06-25T09:43:23Z"
lastCommitAt: "2026-08-21T04:11:34Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 79
undervaluedScore: 32
maintainers: ["salaros"]
openGraphImageUrl: "https://opengraph.githubassets.com/f14d998213d05ca5f1de24db2235de0ee7e95450081b38c44105a085d8be940b/salaros/is-biz-mail-js"
fundingLinks: ["PATREON:https://patreon.com/salaros", "LIBERAPAY:https://liberapay.com/salaros", "CUSTOM:https://www.paypal.me/salarosUSA"]
---

Business Email Checker
======================

**isBizMail** tells you whether a given email address is free (gmail.com, yahoo.es, yandex.ru etc) or not. Detects around 4-5k domains and sub-domains.

Under the hood **isBizMail** mostly relies on 3-rd party domain lists created by people and organizations mentioned in [Credits](#Credits) section.

## Looking for PHP, .NET etc?

* [PHP implementation](https://github.com/salaros/is-biz-mail-php) (PHP 5.4.0+)
* [.NET implementation](https://github.com/salaros/is-biz-mail-dotnet) (.NET Standard 2.0+)

## 🟊🟊🟊 Support this project 🟊🟊🟊

You can support us in a small way, please consider starring and sharing this repo! It helps us getting known and grow the community.

## Installation

You can install **isBizMail** for JavaScript via your prefered dependency manager, e.g. PNMP, Yarn etc

```bash
npm i @salaros/is-biz-mail # pnpm add @salaros/is-biz-mail
```

or via Yarn

```bash
yarn add @salaros/is-biz-mail
```

## Vanilla

One of examples of vanilla JavaScript usage might be a simple HTML page:

```html
<script src="https://cdn.jsdelivr.net/npm/@salaros/is-biz-mail@latest/dist/isBizMail.iife.js"></script>
<script>
    var email =…
