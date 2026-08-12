---
repo: "lucca180/itemdb"
name: "itemdb"
description: "itemdb is a database of information about Neopets items. It is built using Next.js, MySQL and Prisma."
readmeQualityOk: true
url: "https://github.com/lucca180/itemdb"
homepage: "https://itemdb.com.br"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["neopets", "nextjs", "reactjs"]
stars: 22
forks: 4
openIssues: 0
closedIssues: 11
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2023-02-27T23:11:14Z"
lastCommitAt: "2026-08-11T15:19:28Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 68
maintainers: ["lucca180"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/607410224/e73030f0-bca4-4e15-b4ba-2688fd0ceef9"
postedAt: "2026-08-09T04:51:00.476Z"
---

# itemdb - Neopets Open-Source item database

[itemdb](https://itemdb.com.br/) is a database of information about Neopets items. It is built using **Next.js**, **MySQL** and **[Prisma](https://www.prisma.io/docs)**

## Running Locally

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) (for the database)
- Node.js 22+
- Yarn

### First-time setup

**1. Clone the repo and install dependencies**

```bash
git clone https://github.com/lucca180/itemdb.git
cd itemdb
yarn
npx prisma generate
```

**2. Configure environment variables**

```bash
cp .env.default .env.local
```

The defaults in `.env.local` work out of the box with the Docker database. No changes are needed for a basic local setup. See [.env.default](https://github.com/lucca180/itemdb/blob/HEAD/.env.default) for optional features (image uploads, Redis, email, etc.).

**3. Start the database**

```bash
docker compose up -d
```

This starts a MariaDB 11 container (`itemdb-db`) on `localhost:3306`.

**4. Run database migrations**

```bash
npx prisma migrate dev
```

**5. Seed the database**

The seed script creates two local test users and optionally imports item data dumps.

```bash
npx prisma db seed
```

To…
