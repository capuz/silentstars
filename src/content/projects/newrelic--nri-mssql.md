---
repo: "newrelic/nri-mssql"
name: "nri-mssql"
description: "New Relic Infrastructure Mssql Integration"
readmeQualityOk: true
url: "https://github.com/newrelic/nri-mssql"
language: "Go"
languages: ["Go"]
languagePcts: [93]
stars: 10
forks: 34
openIssues: 7
closedIssues: 32
watchers: 19
contributors: 69
recentReleases: 0
createdAt: "2018-08-13T13:03:48Z"
lastCommitAt: "2026-08-31T09:55:34Z"
lastReleaseAt: "2019-02-05T16:27:34Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 90
undervaluedScore: 64
maintainers: ["newrelic-coreint-bot", "renovate[bot]", "RamanaReddy8801"]
openGraphImageUrl: "https://opengraph.githubassets.com/4108fc796f24ffbe4bd10e9574c156a9eff20604311cb9a4fd7eb771581bd3ae/newrelic/nri-mssql"
---

# New Relic integration for Microsoft SQL Server

The New Relic integration for MS SQL Server captures critical performance metrics and inventory reported by a SQL Server Instance. Data on the SQL Server Instance and Databases is collected.

Inventory and metric data is collected via SQL queries to the Instance.

## Configuration

A user with the necessary permissions to collect all the metrics and inventory can be configured as follows

```sql
USE master;
CREATE LOGIN newrelic WITH PASSWORD = 'tmppassword';
CREATE USER newrelic FOR LOGIN newrelic;
GRANT CONNECT SQL TO newrelic;
GRANT VIEW SERVER STATE TO newrelic;

-- Goes through each user database and adds public permissions
DECLARE @name NVARCHAR(max)
DECLARE db_cursor CURSOR FOR
SELECT NAME
FROM master.dbo.sysdatabases
WHERE NAME NOT IN ('master','msdb','tempdb','model')
OPEN db_cursor
FETCH NEXT FROM db_cursor INTO @name WHILE @@FETCH_STATUS = 0
BEGIN
	EXECUTE('USE "' + @name + '"; CREATE USER newrelic FOR LOGIN newrelic;' );
	FETCH next FROM db_cursor INTO @name
END
CLOSE db_cursor
DEALLOCATE db_cursor
```

## Installation and usage

For installation and usage instructions, see our [documentation web…
