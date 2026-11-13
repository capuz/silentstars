---
repo: "PBH-BTN/Sparkle3"
name: "Sparkle3"
description: "The sparkle3"
originalDescription: "The sparkle3"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/PBH-BTN/Sparkle3"
language: "Java"
languages: ["Java", "Vue"]
languagePcts: [65, 22]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-12-02T11:58:07Z"
lastCommitAt: "2026-11-13T18:33:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 75
maintainers: ["Ghost-chu"]
openGraphImageUrl: "https://opengraph.githubassets.com/37896cc1631674070c974a7a36639eef165000fb11ff49d6e14e0d649f37e459/PBH-BTN/Sparkle3"
---

# Sparkle 3

## Database and Automatic Migrations

The database is managed with Flyway. On application startup, it automatically checks for and runs migrations in `classpath:db/migration` that have not yet been applied. A brand-new database is built from `V1__initial_schema.sql`. A production database that already contains data has its current structure version identified in `FlywayMigrationConfig` and is baselined, so old table-creation or large-table migrations are not re-executed.

The production environment requires PostgreSQL, TimescaleDB, the `pg_trgm` extension, and a database account with permission to create schema objects, indexes, and TimescaleDB policies. The `timescaledb` extension must be pre-installed by the database administrator. The application migrations only run `CREATE EXTENSION IF NOT EXISTS`.

Upgrade steps:

1. Back up the database and confirm that the `timescaledb` extension is available.
2. Deploy the new version once. Under the protection of a PostgreSQL advisory lock, Flyway automatically creates or updates `flyway_schema_history`. No manual SQL is needed.
3. Check the startup logs. When an existing database is adopted, the log records `Adopting…
