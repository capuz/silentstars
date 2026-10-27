---
repo: "Pogchamp-company/alembic-postgresql-enum"
name: "alembic-postgresql-enum"
description: "Alembic autogenerate support for creation, alteration and deletion of enums"
readmeQualityOk: true
url: "https://github.com/Pogchamp-company/alembic-postgresql-enum"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["alembic", "alter", "autogenerate", "create", "enum", "postgres", "postgresql", "alembic-extension"]
stars: 347
forks: 29
openIssues: 2
closedIssues: 55
watchers: 4
contributors: 14
recentReleases: 0
createdAt: "2023-05-26T08:07:19Z"
lastCommitAt: "2026-10-27T12:40:04Z"
lastReleaseAt: "2023-12-08T07:54:18Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 28
maintainers: ["AlexandrovRoman", "mgorven"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1682bb1ed2ea2e965f40b92353a2f70c7f6dbb0c2a4fe43f78e1f3b38ad14de/Pogchamp-company/alembic-postgresql-enum"
---

# alembic-postgresql-enum
[<img src="https://img.shields.io/pypi/pyversions/alembic-postgresql-enum">](https://pypi.org/project/alembic-postgresql-enum/)
[<img src="https://img.shields.io/pypi/v/alembic-postgresql-enum">](https://pypi.org/project/alembic-postgresql-enum/)
[<img src="https://img.shields.io/pypi/l/alembic-postgresql-enum">](https://pypi.org/project/alembic-postgresql-enum/)

Alembic autogenerate support for creation, alteration and deletion of enums

Alembic will now automatically:
- Create enums that currently are not in postgres schema
- Remove/add/alter enum values
- Reorder enum values
- Delete unused enums from schema

If you are curious to know about analogs and reasons for this library to exist see [alternatives and motivation](https://github.com/Pogchamp-company/alembic-postgresql-enum/blob/master/docs/alternatives.md)

## Usage

Install library:
```
pip install alembic-postgresql-enum
```

Add the line:

```python 
# env.py
import alembic_postgresql_enum
...
```

To the top of your migrations/env.py file.

This import will affect newly generated migrations. 
To try it out you can edit some enums in your schema 
and then run `alembic revision --autogenerate`…
