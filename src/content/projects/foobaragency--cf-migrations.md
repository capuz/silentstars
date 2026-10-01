---
repo: "foobaragency/cf-migrations"
name: "cf-migrations"
description: "A tool to manage Contentful migration"
readmeQualityOk: true
url: "https://github.com/foobaragency/cf-migrations"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
stars: 13
forks: 2
openIssues: 5
closedIssues: 2
watchers: 6
contributors: 16
recentReleases: 0
createdAt: "2021-04-08T11:54:56Z"
lastCommitAt: "2026-10-01T10:23:31Z"
lastReleaseAt: "2021-10-14T08:42:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 82
undervaluedScore: 57
maintainers: ["dependabot[bot]", "semantic-release-bot", "waqasnoor"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f12b0f2be612909a8434012cffa07f192797afb994b597449d8930559445b4e/foobaragency/cf-migrations"
---

# cf-migrations

`cf-migrations` is a tool for deploying and managing migrations and environment aliases in Contentful.

## ⚙️ Installation

Pre-requisites:

- Node LTS

```bash
npm install --save cf-migrations
```

## 🔌 Usage

### 🔐 Contentful credentials

Almost all the `cf-migrations` commands require contentful credentials besides specific arguments per command. You can pass those arguments as **command line arguments** or **environment variables**.

You can use the `-h` or `--help` in any command to show its usage help. For example, run `npx cf-migrations init -h` to see the required and optional arguments of the `init` command.

> 💡 `cf-migrations` uses [dotenv](https://github.com/motdotla/dotenv) to read a `.env` file so you write your credentials only once when using `cf-migrations` in your project locally.

### 🥾 Init environment

In order for you to use `cf-migrations` deploy or release commands, you should run the following:

```bash
npx cf-migrations init
```

It creates a new content model named `cf-migrations` that will store every deployed migration file name. `cf-migrations` uses these names to assess if there're pending migrations yet to be deployed.

### 🏗…
