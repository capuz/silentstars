---
repo: "kdpisda/django-rls"
name: "django-rls"
description: "Row Level Security for Django"
readmeQualityOk: true
url: "https://github.com/kdpisda/django-rls"
homepage: "https://django-rls.com"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["django", "postgres", "postgresql", "rls", "security"]
stars: 91
forks: 8
openIssues: 3
closedIssues: 6
watchers: 4
contributors: 5
recentReleases: 1
createdAt: "2025-06-29T03:46:58Z"
lastCommitAt: "2026-08-01T06:14:10Z"
lastReleaseAt: "2026-07-13T22:14:22Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 82
undervaluedScore: 37
maintainers: ["kdpisda", "dependabot[bot]", "dmitrymaranik"]
openGraphImageUrl: "https://opengraph.githubassets.com/e4d2f7cb6ffed5af4062263061e351a8f18041bf668c401da73ba93e25ebe653/kdpisda/django-rls"
fundingLinks: ["GITHUB:https://github.com/kdpisda"]
discussionCount: 5
---

# Django RLS

A Django package that provides PostgreSQL Row Level Security (RLS) capabilities at the database level.

See [CONTRIBUTING.md](https://github.com/kdpisda/django-rls/blob/HEAD/.github/CONTRIBUTING.md).

## Security

See [SECURITY.md](https://github.com/kdpisda/django-rls/blob/HEAD/.github/SECURITY.md).

## Features

- 🔒 Database-level Row Level Security using PostgreSQL RLS
- 🏢 Tenant-based and user-based policies
- 🐍 **Pythonic Policies**: Define policies using standard Django `Q` objects
- 🌳 **Hierarchical RLS**: Support for recursive CTEs and nested organizations
- ⚡ **Context Processors**: Inject dynamic context variables (e.g. user IP, session data)
- 🔧 Django 5.0, 5.1, 5.2 (LTS), and 6.0 support
- 🧪 Comprehensive test coverage
- 📖 Extensible policy system
- ⚡ Performance optimized

## Quick Start

```python
from django.db import models
from django.db.models import Q
from django_rls.models import RLSModel
from django_rls.policies import ModelPolicy, RLS

class Project(RLSModel):
    name = models.CharField(max_length=100)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    is_public = models.BooleanField(default=False)

    class Meta:…
