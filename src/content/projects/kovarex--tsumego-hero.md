---
repo: "kovarex/tsumego-hero"
name: "tsumego-hero"
description: "Cleaned up version of https://github.com/d4rkm4tter87/tsumego-hero-app"
readmeQualityOk: true
url: "https://github.com/kovarex/tsumego-hero"
language: "PHP"
languages: ["PHP"]
languagePcts: [86]
stars: 18
forks: 6
openIssues: 2
closedIssues: 41
watchers: 1
contributors: 11
recentReleases: 0
createdAt: "2025-10-15T21:16:47Z"
lastCommitAt: "2026-10-29T10:22:28Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 67
maintainers: ["kovarex", "filipbuchta"]
openGraphImageUrl: "https://opengraph.githubassets.com/68f13318b37c0bc3273f8c9ffcf9f6c134a28a198df4acda9494aacf1d9deb5f/kovarex/tsumego-hero"
---

# Tsumego Hero

Source code of [tsumego.com](https://tsumego.com), a site for practicing tsumego (Go problems).

- Live site: https://tsumego.com
- Testing site: https://test.tsumego.com

## Development principles
- The code should be well structured, readable and easy to modify.
- The site's functionality should be covered by automated tests, so it doesn't "randomly break".
- Current test coverage: https://kovarex.github.io/tsumego-hero/coverage/

## Local Setup (part 1)

- Instal ddev [ddev](https://ddev.com/get-started/).

### PHP 8.4 install
8.4 is too new to be installed in an easy way, we have a script you can call to install it on the machine

	setup/php-install.sh

### ddev install

- Modify the php.ini in ./ddev/php/php.ini, add your local ipaddress there, which is needed for debugging
- Then from ROOT of the project run: (project name should be tsumego)

```
wsl
```

```
ddev start
```

- Install composer, run database migrations, install node project

```
./deploy.sh
```

- Optional: import database dump ~30 min
```
ddev import-db --file=/mnt/c/db-tsumego-xyz.sql
```

- To jump to your app in browser:

```
ddev launch
```
- Phpmyadmin access:

```
ddev phpmyadmin
```
-…
