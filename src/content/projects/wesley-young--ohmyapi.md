---
repo: "Wesley-Young/ohmyapi"
name: "ohmyapi"
description: "Simple yet capable AI gateway, yours to extend."
originalDescription: "Simple yet capable AI gateway, yours to extend."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Wesley-Young/ohmyapi"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 5
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-10-06T18:20:48Z"
lastCommitAt: "2026-10-25T02:47:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 45
maintainers: ["Wesley-Young", "lc-cn", "hlfzsi"]
openGraphImageUrl: "https://opengraph.githubassets.com/e111e535db506992c0fafc81aea35cdbc9d76de8128dbdacec4bf5e21b43275f/Wesley-Young/ohmyapi"
---

# ohmyapi

Simple yet capable AI gateway, yours to extend.

## Requirements

- Node.js 24.13+
- pnpm v12
- PostgreSQL 17 (Docker is required when using the bundled PostgreSQL)

## Configuration

```sh
git clone git@github.com:Wesley-Young/ohmyapi.git ohmyapi
cd ohmyapi
cp .env.example .env
chmod 600 .env
```

Edit `.env`:

| Setting | Description |
| --- | --- |
| `APP_ORIGIN` | The full address used to access the app in the browser, without a trailing slash, e.g. `http://127.0.0.1:8000`. Required for production deployments; comment it out for local development. |
| `SESSION_COOKIE_SECURE` | Set to `false` when accessing over HTTP. |
| `DATABASE_URL` | PostgreSQL connection URL. Special characters in the password must be URL-encoded. |
| `POSTGRES_PASSWORD` | Password for the bundled PostgreSQL; must match the one in `DATABASE_URL`. Once the data volume has been created, changing this value will not change the password of an existing database. |
| `BOOTSTRAP_ADMIN_USERNAME`<br>`BOOTSTRAP_ADMIN_PASSWORD` | Username and password of the initial administrator. The password must be at least 8 characters. Delete these two entries after initialization is complete. |
| `BILLING_CURRENCY`…
