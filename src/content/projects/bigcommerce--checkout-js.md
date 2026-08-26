---
repo: "bigcommerce/checkout-js"
name: "checkout-js"
description: "Optimized One-Page Checkout"
readmeQualityOk: true
url: "https://github.com/bigcommerce/checkout-js"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [79]
topics: ["bigcommerce", "checkout", "javascript", "typescript"]
stars: 133
forks: 405
openIssues: 12
closedIssues: 103
watchers: 21
contributors: 495
recentReleases: 0
createdAt: "2019-01-10T23:21:36Z"
lastCommitAt: "2026-08-26T04:15:53Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 51
maintainers: ["andriiVitvitskyi1990", "bc-maxy", "richapatel1510"]
openGraphImageUrl: "https://opengraph.githubassets.com/b42a0e47e79d71c18332c682f49c6892730270fd30110c0ee9cbc19a73d20fff/bigcommerce/checkout-js"
---

# Checkout JS

Checkout JS is a browser-based application providing a seamless UI for BigCommerce shoppers to complete their checkout. It is also known as [Optimized One-Page Checkout](https://support.bigcommerce.com/s/article/Optimized-Single-Page-Checkout), which is currently the recommended checkout option for all BigCommerce stores.

## Requirements

In order to build from the source code, you must have the following set up in your development environment.

* Node >= v22.
* NPM >= v10.
* Unix-based operating system. (WSL on Windows)

One of the simplest ways to install Node is using [NVM](https://github.com/nvm-sh/nvm#installation-and-update). You can follow their instructions to set up your environment if it is not already set up.

## Development

Once you have cloned the repository and set up your environment, you can start developing with it.

First, you have to pull in the dependencies required for the application.

```sh
npm ci
```

After that, you can make changes to the source code and run the following command to build it.

```sh
npm run build
```

If you are developing the application locally and want to build the source code in watch mode, you can run the following…
