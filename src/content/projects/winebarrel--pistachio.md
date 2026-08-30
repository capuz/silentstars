---
repo: "winebarrel/pistachio"
name: "pistachio"
description: "pistachio is a declarative schema management tool for PostgreSQL with a Terraform-like plan/apply workflow."
readmeQualityOk: true
url: "https://github.com/winebarrel/pistachio"
homepage: "https://winebarrel.github.io/pistachio/"
language: "Go"
languages: ["Go"]
languagePcts: [93]
topics: ["db-migration", "postgresql", "golang", "schema-migrations", "postgres", "declarative-migrations", "database-migration", "database-migrations", "schema-migration", "schema-management"]
stars: 22
forks: 1
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-02-21T01:22:56Z"
lastCommitAt: "2026-08-30T00:42:34Z"
lastReleaseAt: "2026-04-20T13:14:02Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 48
maintainers: ["winebarrel", "claude", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1163021307/0a3b9ec0-9509-40fc-8be0-28b3487ba578"
---

Declarative schema management tool for PostgreSQL with a Terraform-like plan/apply workflow, built on [pg_query_go](https://github.com/pganalyze/pg_query_go). Define the desired schema in SQL; pistachio generates the DDL diff.

**[Documentation](https://winebarrel.github.io/pistachio/)** | [Getting Started](https://winebarrel.github.io/pistachio/getting-started/) | [Commands](https://winebarrel.github.io/pistachio/reference/commands/) | [Design and scope](https://winebarrel.github.io/pistachio/about/design/)

## Workflow

## Installation

### Homebrew

```bash
brew install winebarrel/pistachio/pistachio
```

### Download binary

Download the latest binary from [Releases](https://github.com/winebarrel/pistachio/releases).

| OS      | Arch         |
|---------|--------------|
| macOS   | amd64, arm64 |
| Linux   | amd64, arm64 |
| Windows | amd64        |

## Example

Create a schema file:

```sql
CREATE TYPE public.status AS ENUM ('active', 'inactive');

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    status status NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (id)
);

CREATE TABLE public.posts (
    id integer NOT NULL,
    user_id integer NOT…
