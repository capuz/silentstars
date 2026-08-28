---
repo: "sipwise/ngcp-rest-api"
name: "ngcp-rest-api"
description: "A new version of NGCP REST API"
readmeQualityOk: true
url: "https://github.com/sipwise/ngcp-rest-api"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 10
contributors: 16
recentReleases: 0
createdAt: "2020-08-21T14:39:27Z"
lastCommitAt: "2026-08-28T07:43:35Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch"]
healthScore: 74
undervaluedScore: 55
maintainers: ["sipwiser", "marcocapetta", "sipwise-jenkins"]
openGraphImageUrl: "https://opengraph.githubassets.com/5501039e33fbc307c3bdf35ad6529f039a80b7107b89b977e469b4ebbce6c355/sipwise/ngcp-rest-api"
---

# NGCP API

NGCP API is a RESTful based provider for working with the NGCP databases and micro services.

## Installation

### As a package

Use the package manager to install the ngcp-api package

```bash
apt install ngcp-rest-api
```

### Manual

Clone the repository

```bash
git clone ngcp-rest-api && cd ngcp-rest-api
```

Node Version
> Note that `node 18` is required.

Install `systemd` development files required for `sd-notify` to work properly

```bash
apt install libsystemd-dev
```

Fetch the required nodejs modules

```bash
yarnpkg install
```

## Configuration

To change the configuration the local file `etc/api.conf` can be edited.

### SSL keys

For local development generate self-signed SSL keys in `./etc/ssl`

```bash
node tools/generate-self-signed-keys.js --destdir ./etc/ssl
```

### Env

The following Env variables can be set to configure the API.

- `API_DB_USER`
- `API_DB_PASS`
- `API_DB_HOST`
- `API_DB_PORT`

### Database connection for local development

Allow `root` access to `API_DB_HOST`

Run the following command on the `API_DB_HOST`:
```bash
mysql -e "grant all privileges on *.* to root@'%';; flush privileges;"
```

## Usage

Server runs at…
