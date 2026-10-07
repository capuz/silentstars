---
repo: "be-hase/kuery-client"
name: "kuery-client"
description: "A Kotlin/JVM database client for those who want to write SQL"
readmeQualityOk: true
url: "https://github.com/be-hase/kuery-client"
homepage: "https://kuery-client.hsbrysk.dev/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["kotlin", "sql", "database-client", "spring", "jdbc", "r2dbc"]
stars: 31
forks: 3
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2024-05-27T03:17:06Z"
lastCommitAt: "2026-10-07T10:30:19Z"
lastReleaseAt: "2024-12-23T08:12:37Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 91
undervaluedScore: 59
maintainers: ["be-hase", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/66f852c441d3cc01eda6f43f6cf95df9baaacd13f260ebb5f5f3d7709a841628/be-hase/kuery-client"
---

**Write SQL as it is.**

A Kotlin SQL client built on Spring Data — interpolated runtime values become bind parameters via a compiler plugin.

---

It looks like plain string interpolation...

```kotlin
val user: User? = kueryClient
    .sql { +"SELECT * FROM users WHERE user_id = $userId" }
    .singleOrNull()
```

...but it executes as a **parameterized query**. A Kotlin compiler plugin rewrites the
interpolated runtime value into named parameter binding at compile time — so you get the readability of
raw SQL without the risk of SQL injection:

```sql
SELECT * FROM users WHERE user_id = :p0  -- :p0 = userId, bound as a named parameter
```

## Why Kuery Client?

- ♥️ **Love SQL**
    - ORM libraries are convenient, but they each require learning their own DSL, which we believe is a steep
      cost. Kuery Client emphasizes writing SQL as it is.
- 🛡️ **Safe by design**
    - Interpolated runtime values are converted into bind parameters by the compiler plugin, so the normal
      SQL-building path never concatenates them into the SQL text.
- ✅ **Compile-time checks**
    - The compiler plugin [warns when a SQL string cannot be converted…
