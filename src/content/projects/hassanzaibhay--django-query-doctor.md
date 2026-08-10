---
repo: "hassanzaibhay/django-query-doctor"
name: "django-query-doctor"
description: "Automated diagnosis and prescriptions for slow Django ORM queries. Detects N+1, duplicates, missing indexes and tells you exactly how to fix them."
readmeQualityOk: true
url: "https://github.com/hassanzaibhay/django-query-doctor"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 58
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-03-06T13:43:38Z"
lastCommitAt: "2026-08-10T05:06:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 29
maintainers: ["hassanzaibhay"]
openGraphImageUrl: "https://opengraph.githubassets.com/05c3aee5a68a4d5d49b91b6a660f4c86bda16b9513d6859bb07d2ada83fb8dcd/hassanzaibhay/django-query-doctor"
---

# django-query-doctor

Diagnose and fix slow Django ORM queries. Detects N+1s, duplicates, missing indexes, and more -- with exact file:line references and actionable fixes.

## The Problem

Every Django app accumulates hidden query inefficiencies -- N+1 loops behind serializers, duplicate fetches scattered across views, full table scans on unindexed columns. django-query-doctor intercepts queries at runtime using `connection.execute_wrapper()`, runs them through 8 analyzers, and produces prescriptions with the exact file, line, and code fix. It works in middleware, tests, CI pipelines, and management commands -- no `DEBUG=True` required.

## Install

```bash
pip install django-query-doctor
```

```python
# settings.py
INSTALLED_APPS = [..., "query_doctor"]
MIDDLEWARE = [..., "query_doctor.middleware.QueryDoctorMiddleware"]
```

## See It in Action

```python
from query_doctor.context_managers import diagnose_queries

with diagnose_queries() as report:
    books = list(Book.objects.all())
    for book in books:
        _ = book.author.name  # triggers N+1

assert report.issues > 0
print(f"Found {report.issues} issues in {report.total_queries} queries")
```

Console output…
