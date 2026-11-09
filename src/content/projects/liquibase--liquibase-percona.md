---
repo: "liquibase/liquibase-percona"
name: "liquibase-percona"
description: "Liquibase Percona Extension"
readmeQualityOk: true
url: "https://github.com/liquibase/liquibase-percona"
homepage: "https://liquibase.jira.com/wiki/display/CONTRIB/Percona+Online+Schema+Change"
language: "Java"
languages: ["Java", "Groovy"]
languagePcts: [70, 27]
topics: ["mysql", "liquibase", "percona", "core", "extension", "oss"]
stars: 51
forks: 27
openIssues: 6
closedIssues: 66
watchers: 12
contributors: 16
recentReleases: 0
createdAt: "2014-09-13T17:56:15Z"
lastCommitAt: "2026-11-09T11:59:56Z"
lastReleaseAt: "2018-09-30T10:00:29Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 58
maintainers: ["dependabot[bot]", "mariiapisarenko", "adangel"]
openGraphImageUrl: "https://opengraph.githubassets.com/e03c3067961e92f17af59a45f9a791c4b078e2c2505fd4b751334c080a027bbe/liquibase/liquibase-percona"
---

# Liquibase Percona Extension

Extension to support the tool `pt-online-schema-change` from [Percona Toolkit](https://www.percona.com/doc/percona-toolkit/LATEST/index.html).
This extension replaces a couple of the default changes to use `pt-online-schema-change` instead of SQL.
This allows to perform a non-locking database upgrade.

## Table Of Contents

*   [Supported Databases](#supported-databases)
*   [Supported Changeset Formats](#supported-changeset-formats)
*   [Liquibase version(s) tested against](#liquibase-versions-tested-against)
*   [Supported Changes and examples](#supported-changes-and-examples)
    *   [AddColumn](#addcolumn)
    *   [AddForeignKeyConstraint](#addforeignkeyconstraint)
    *   [AddUniqueConstraint](#adduniqueconstraint)
    *   [CreateIndex](#createindex)
    *   [DropColumn](#dropcolumn)
    *   [DropForeignKeyConstraint](#dropforeignkeyconstraint)
    *   [DropIndex](#dropindex)
    *   [DropUniqueConstraint](#dropuniqueconstraint)
    *   [ModifyDataType](#modifydatatype)
    *   [Sql](#sql)
*   [Configuration](#configuration)
    *   [UsePercona flag](#usepercona-flag)
    *   [PerconaOptions flag](#perconaoptions-flag)
    *   [Liquibase Percona…
