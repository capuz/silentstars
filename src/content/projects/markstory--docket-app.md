---
repo: "markstory/docket-app"
name: "docket-app"
description: "A personal todo list application"
readmeQualityOk: true
url: "https://github.com/markstory/docket-app"
language: "PHP"
languages: ["PHP", "Dart", "HTML"]
languagePcts: [48, 26, 20]
topics: ["todo-list-app", "todo-list-project", "cakephp", "php"]
stars: 29
forks: 5
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2021-01-23T04:28:07Z"
lastCommitAt: "2026-08-24T04:18:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 84
undervaluedScore: 51
maintainers: ["markstory"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ee7889b95cab0ed5f72633f78524a0a663ffa8fa6f3d7c03a031c8caca5f809/markstory/docket-app"
---

<h1>
    &nbsp;
    Docket App
</h1>

A personal task list & feed reader application. This project is built with [cakephp](https://cakephp.org), [htmx](https://htmx.org), and webcomponents in an effort to learn about building interactive applications with simpler frontend tools. The task list functionality is inspired by [Todoist](http://todoist.com) and [Things](http://culturedcode.com/things).

This project is great if you want to host and operate your personal todo lists on your own servers, where you know exactly what is being done with your data.

## Installation & Getting Started

1. Clone this repository.
2. Download [Composer](https://getcomposer.org/doc/00-intro.md) or update `composer self-update`.
3. Ensure you have a nodejs environment with yarn.
4. Install dependencies:
   ```
   php composer.phar install
   yarn install
   ```
5. Build static assets to generate a `manifest.json` file used to generate URLs
   to generated UI assets.
   ```
   yarn build
   ```
6. Start up the development server:
   ```
   node bin/server.js
   ```
7. Visit `localhost:8765` to get started.

Docket is tested against MySQL, Postgres and SQLite, and will work equally well
on all of them.…
