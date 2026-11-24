---
repo: "superfaktura/apiclient"
name: "apiclient"
description: "SuperFaktúra oficiálny PHP-API klient."
readmeQualityOk: true
url: "https://github.com/superfaktura/apiclient"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
stars: 20
forks: 17
openIssues: 0
closedIssues: 18
watchers: 7
contributors: 10
recentReleases: 0
createdAt: "2015-03-20T08:57:47Z"
lastCommitAt: "2026-11-24T13:01:01Z"
lastReleaseAt: "2018-10-29T08:31:53Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 73
undervaluedScore: 46
maintainers: ["OndrejVrto"]
openGraphImageUrl: "https://opengraph.githubassets.com/23ea2d83de9067bc10a70f2a17de732752a05f5869e9d0de81e1b9228305bd2e/superfaktura/apiclient"
---

# SuperFaktúra PHP API Client 2

## Overview

The SuperFaktúra API enables the integration of external applications, allowing the remote creation of documents and retrieval of data about them. It also enables the sending of invoices via email or regular mail.

## Requirements

To use this package, you will need at least PHP 8.2.

## Quickstart

In order to make it easier to integrate your application with SuperFaktúra, we've prepared a simple API client for you, which allows you to issue your invoices remotely with minimal effort.

However, if you wish to create your own API client, we also provide [general documentation](https://github.com/superfaktura/docs).

If you want to try out API integration, we have a testing environment (sandbox) for [Slovak](https://sandbox.superfaktura.sk) and [Czech](https://sandbox.superfaktura.cz) market available for you.

## Installation

Simply run this [composer](https://getcomposer.org/) command:

```sh
composer require superfaktura/apiclient
```

## Examples

### Starting with API

To use this API client, you need to first:
