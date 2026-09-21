---
repo: "metikular/coupon-store"
name: "coupon-store"
description: "A home for all your coupons and loyalty cards. https://coupon.metikular.ch"
readmeQualityOk: true
url: "https://github.com/metikular/coupon-store"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [74]
stars: 94
forks: 5
openIssues: 5
closedIssues: 8
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-08-08T19:37:31Z"
lastCommitAt: "2026-09-21T09:14:36Z"
lastReleaseAt: "2022-10-02T20:00:30Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 35
maintainers: ["phylor", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f7628e0f76bbe0b53e2fa2d0e518d13bb81bf85ba9d25decff521212c285b5e/metikular/coupon-store"
---

# Coupon store

A home for all your coupons and loyalty cards. Free to use at https://coupon.metikular.ch. Self-hostable and open-source (see below).

## ⭐ Features

- Store coupons and discounts
- Store loyalty cards
- Store gift cards
- Several types of barcodes and QR codes supported for coupons and loyalty cards
- Be notified via [apprise](https://github.com/caronc/apprise) when a coupon expires soon
- Dark mode

## Setup

Using a PostgreSQL database:

```shell
docker-compose -f docker-compose.example.yml up
```

Using a SQLite database:

```shell
docker-compose -f docker-compose.sqlite.yml up
```

The default port of the running webserver is `80`.

### Instance specific configuration

Add a page for data privacy by creating a file at `app/views/pages/data_privacy.html.haml`.

### Backups

All data is stored in the database. It is thus sufficient to backup the database.

If PostgreSQL is used: use `pg_dump` to backup the database specified in `DATABASE_URL`.

If SQLite is used: backup the `.sqlite3` file specified in `DATABASE_URL`. If a relative path is used to specify the database file, it is relative to the directory `/app`.

## Development

```shell
bin/setup
bin/dev
```…
