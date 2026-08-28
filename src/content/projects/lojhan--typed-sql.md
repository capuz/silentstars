---
repo: "Lojhan/typed-sql"
name: "typed-sql"
description: "TypeScript 7-native SQL inference with real editor semantics"
readmeQualityOk: true
url: "https://github.com/Lojhan/typed-sql"
homepage: "https://lojhan.github.io/typed-sql/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 19
forks: 1
openIssues: 12
closedIssues: 15
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-24T15:22:45Z"
lastCommitAt: "2026-08-28T14:23:19Z"
lastReleaseAt: "2026-08-25T00:23:11Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 90
undervaluedScore: 49
maintainers: ["Lojhan", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7dc76ef6cfaa36b65355e70961cd65d88275a199960d4ad82ff50836c228a76f/Lojhan/typed-sql"
---

# typed-sql

### Write SQL. Read TypeScript.

typed-sql is a TypeScript SQL compiler. It analyzes ordinary static SQL templates against a
snapshot of your real database, then carries the exact result and parameter types through your
application. SQL stays SQL: there is no query-builder DSL, generated query wrapper, or generated
application API.

```ts
import { sql, typePolicy } from "@typed-sql/postgres";
import { createPgDatabase } from "@typed-sql/postgres/pg";

const accountId = 42n;

const query = sql`
  SELECT account.id, account.email, account.status, project.budget
  FROM users AS account
  LEFT JOIN projects AS project ON project.owner_id = account.id
  WHERE account.id = ${accountId}
`;

const database = await createPgDatabase({
  connectionString: process.env.DATABASE_URL!,
  typePolicy,
});

const rows = await database.execute(query);
```

Hover `rows`:

```ts
readonly {
  id: bigint;
  email: string;
  status: "active" | "suspended";
  budget: string | null;
}[]
```

The type comes from the query, catalog, join nullability, database enum, and configured runtime
codecs. The interpolation is also checked as `bigint` because it is compared with `account.id`.

## Why…
