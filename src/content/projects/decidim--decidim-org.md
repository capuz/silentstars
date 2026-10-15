---
repo: "decidim/decidim.org"
name: "decidim.org"
description: "Decidim.org public landing website. Made with Middleman. "
readmeQualityOk: true
url: "https://github.com/decidim/decidim.org"
homepage: "https://decidim.org"
language: "HTML"
languages: ["HTML", "Ruby"]
languagePcts: [62, 20]
topics: ["middleman", "decidim"]
stars: 10
forks: 19
openIssues: 22
closedIssues: 79
watchers: 14
contributors: 28
recentReleases: 0
createdAt: "2017-03-31T09:21:05Z"
lastCommitAt: "2026-10-15T08:32:05Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 92
undervaluedScore: 76
maintainers: ["greenwoodt", "elsa-decidim", "andreslucena"]
openGraphImageUrl: "https://opengraph.githubassets.com/03299632febe8b0e09371ae8510cdcc4887bcd98242fec7e6e94de2abad77c04/decidim/decidim.org"
---

# Decidim

This is a work in progress of the future web for Decidim project, the participatory democracy framework.

## Installation (with bundler)

Install the dependencies and start the middleman server.

```bash
bundle install
npm install
bundle exec middleman s
```

You can access to the development web with http://localhost:4567/

## Installation (with docker)

You can set it up with [Devcontainers](https://containers.dev/). We provide a wrapper for Devcontainer CLI to make the Developer Experience better.

```bash
bin/devcontainer rebuild
```

Then whenever you want to start the server, you can do it with

```bash
bin/devcontainer bundle exec middleman s
```

You can access to the development web with http://localhost:4567/

## Sveltia CMS

You can access the Sveltia CMS admin at http://localhost:4567/admin/.

If you wish to create or edit a form in Sveltia and test locally, make sure to configure your feature branch in the `source/admin/config.yml` file for example:

```
backend:
  name: github
  repo: decidim/decidim.org
  branch: YOUR_BRANCH_NAME
```

You can test the Sveltia CMS with a local proxy server using:

```bash
npx netlify-cms-proxy-server
```

You need to have…
