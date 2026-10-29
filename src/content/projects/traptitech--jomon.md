---
repo: "traPtitech/Jomon"
name: "Jomon"
description: "Account Support System for traP"
readmeQualityOk: true
url: "https://github.com/traPtitech/Jomon"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["hacktoberfest"]
stars: 7
forks: 4
openIssues: 35
closedIssues: 156
watchers: 9
contributors: 49
recentReleases: 0
createdAt: "2019-10-25T09:37:13Z"
lastCommitAt: "2026-10-29T05:50:24Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 88
undervaluedScore: 60
maintainers: ["dependabot[bot]", "H1rono", "akimon658"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/217501314/b5bf68b1-9f04-4f4c-91b9-de6dee865d30"
---

## Environment

### Testing

1. Make the server running.

2. Run the following command in the project root.
```shell script
make test
```

### Running

1. Run the following command in the project root.

```sh
make up
```

Now, you can send http requests to `localhost:3000`.

2. Run the following command in the project root when making the server down.

```sh
make down
```

## Staging

1. Set `.env` file. You can refer to `.env.example` as an example.

- `IS_DEBUG_MODE`: Set `true` if you want to run the server in debug mode, otherwise do not set this variable.
- `PORT`: Port number for Jomon staging server
- `UPLOAD_DIR`: Directory for uploading files
- `MARIADB_USERNAME`: Username for MariaDB
- `MARIADB_PASSWORD`: Password for MariaDB
- `MARIADB_HOSTNAME`: Hostname for MariaDB
- `MARIADB_PORT`: Port number for MariaDB
- `MARIADB_DATABASE`: Database name for MariaDB
- `SESSION_KEY`: Session key for Jomon staging server
- `TRAQ_CLIENT_ID`: Client ID for traQ
- `WEBHOOK_SECRET`: Webhook secret for traQ
- `WEBHOOK_ID`: Webhook ID for traQ
- `OS_CONTAINER`: Container name for SwiftStorage
- `OS_USERNAME`: Username for SwiftStorage
- `OS_PASSWORD`: Password for SwiftStorage
-…
