---
repo: "rayakame/sqlc-gen-better-python"
name: "sqlc-gen-better-python"
description: "A sqlc plugin that generates modern, type-safe Python from SQL"
readmeQualityOk: true
url: "https://github.com/rayakame/sqlc-gen-better-python"
homepage: "https://sqlc-gen-better-python.rayakame.dev/"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["mysql", "postgresql", "python", "python3", "sql", "sqlc", "sqlite3", "sqlc-plugin"]
stars: 38
forks: 5
openIssues: 1
closedIssues: 49
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2025-03-25T21:08:11Z"
lastCommitAt: "2026-09-09T08:18:50Z"
lastReleaseAt: "2025-05-30T22:11:32Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 60
maintainers: ["renovate[bot]", "rayakame", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/38852e5a163a616df5d6e9f4f4f7a8d36ba9e1fbb29bca70ecc7cb6bb6f86335/rayakame/sqlc-gen-better-python"
fundingLinks: ["GITHUB:https://github.com/rayakame"]
---

# sqlc-gen-better-python

`sqlc-gen-better-python` is a [sqlc](https://sqlc.dev) plugin that turns your
SQL schema and queries into modern, fully typed Python database code: models,
typed query functions, and enums. You keep writing SQL; the Python stays in
sync with it.

You write:

```sql
-- name: GetUser :one
SELECT * FROM users WHERE id = $1;
```

and get back:

```python
async def get_user(conn: ConnectionLike, *, id_: int) -> models.User | None:
    row = await conn.fetchrow(GET_USER, id_)
    if row is None:
        return None
    return models.User(id_=row[0], name=row[1])
```

No ORM, no hand-written row unpacking. Generated code targets **Python 3.12 or
newer** and passes pyright (strict) and ruff.

## Documentation

**https://sqlc-gen-better-python.rayakame.dev/**

- [Getting Started](https://sqlc-gen-better-python.rayakame.dev/docs/getting-started/) - install the plugin and generate your first models.
- [Guide](https://sqlc-gen-better-python.rayakame.dev/docs/guide/) - every feature, each with real generated output.
- [Reference](https://sqlc-gen-better-python.rayakame.dev/docs/reference/) - all options, type mappings, and per-driver feature support.

Questions or…
