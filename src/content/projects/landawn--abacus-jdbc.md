---
repo: "landawn/abacus-jdbc"
name: "abacus-jdbc"
description: "Coding with SQL/DB is just like coding with Collections"
readmeQualityOk: true
url: "https://github.com/landawn/abacus-jdbc"
language: "Java"
languages: ["Java"]
languagePcts: [99]
topics: ["java", "jdbc", "sql", "sqlbuilder", "dao", "jpa", "orm"]
stars: 21
forks: 3
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2019-10-01T05:05:08Z"
lastCommitAt: "2026-07-04T22:19:03Z"
lastReleaseAt: "2021-02-01T04:01:02Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 89
undervaluedScore: 64
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/42f9e0cf5830d4580e655114c40392baf2c434e72261289a28a9273778370f4e/landawn/abacus-jdbc"
---

# abacus-jdbc


Experience the simplicity of working with SQL/DB as naturally as working with Collections.

## Features:

This library focuses on three core areas:

*  Write or generate `SQL scripts` (optional):: [SqlBuilder](https://htmlpreview.github.io/?https://github.com/landawn/abacus-jdbc/blob/master/docs/SqlBuilder_view.html), 
[DynamicSqlBuilder](https://htmlpreview.github.io/?https://github.com/landawn/abacus-jdbc/blob/master/docs/DynamicSqlBuilder_view.html).

```java
// Manually write the sql in plain string.
String query = "SELECT id, first_name, last_name, email FROM user WHERE first_Name = ?";

// Or by SqlBuilder
String query = PSC.select("id", "firstName, "lastName", "email").from(User.class).where(Filters.eq("firstName")).sql();
// Or if select all columns from user:
String query = PSC.selectFrom(User.class).where(Filters.eq("firstName")).sql();

// Sql scripts can also be placed in sql mapper xml file and then associated with a DAO object.
UserDao userDao =  JdbcUtil.createDao(UserDao.class, dataSource, PSC, sqlMapper);
```
`userSqlMapper.xml`
```xml
<?xml version="1.0" encoding="UTF-8"?>
<sqlMapper>
	<sql…
