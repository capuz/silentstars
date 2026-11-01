---
repo: "tchapi/tuneefy2"
name: "tuneefy2"
description: "🎶 tuneefy is a unified way to share music with your friends, over various online music services"
readmeQualityOk: true
url: "https://github.com/tchapi/tuneefy2"
homepage: "https://tuneefy.com"
language: "PHP"
languages: ["PHP"]
languagePcts: [70]
topics: ["composer", "music", "streaming", "php8", "symfony"]
stars: 22
forks: 6
openIssues: 0
closedIssues: 3
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2015-04-03T09:30:09Z"
lastCommitAt: "2026-11-01T22:58:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 54
maintainers: ["tchapi"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6bb3b2a7204c31770db474d734ee63cd6e279d1225c789afdd286c157622248/tchapi/tuneefy2"
---

# tuneefy _2_

A new version of [tuneefy](http://tuneefy.com) built for **PHP 8** and **Node 18+**, from the ground up, using Symfony and a few helper libraries.

### Installing

This project uses [composer 2](https://getcomposer.org/). Just run :

    composer install

### Creating tables

Tuneefy needs a variety of tables to work properly; you can populate your database with the following :

    bin/console doctrine:migrations:migrate

### Building assets & API doc

To build the assets and the API documentation, I use **yarn** and some modules.

    yarn install

    yarn run build
    yarn run api-documentation

### Tests

The tests are under the `./tests` folder and I use **Codeception** to run them.

Just run :

    vendor/bin/codecept run --steps

Beforehand, do not forget to launch a development web server so that the functional tests have an endpoint to test:

    symfony server:start --port 9999

There should be 40 tests containing 697 assertions.

> Sometimes a platform fails to respond correctly due to network latencies or such. Re-run the tests in this case, it should pass fine the second time.

### API

The API endpoints require an OAuth access token. The token is…
