---
repo: "MrThearMan/graphene-django-query-optimizer"
name: "graphene-django-query-optimizer"
description: "Automatically optimize SQL queries in Graphene-Django schemas."
readmeQualityOk: true
url: "https://github.com/MrThearMan/graphene-django-query-optimizer"
homepage: "https://pypi.org/project/graphene-django-query-optimizer/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["django", "graphene", "graphene-django", "optimization", "orm", "python", "sql"]
stars: 20
forks: 10
openIssues: 0
closedIssues: 40
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2023-08-13T20:18:26Z"
lastCommitAt: "2026-08-28T15:30:02Z"
lastReleaseAt: "2023-12-22T15:06:32Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 65
maintainers: ["dependabot[bot]", "pre-commit-ci[bot]", "MrThearMan"]
openGraphImageUrl: "https://opengraph.githubassets.com/1179af4f8165cd1ba0849d247bb7defa87f84f4f0e17fefabba44ce6e1934ef4/MrThearMan/graphene-django-query-optimizer"
discussionCount: 5
---

# Graphene Django Query Optimizer

```shell
pip install graphene-django-query-optimizer
```

---

**Documentation**: [https://mrthearman.github.io/graphene-django-query-optimizer/](https://mrthearman.github.io/graphene-django-query-optimizer/)

**Source Code**: [https://github.com/MrThearMan/graphene-django-query-optimizer/](https://github.com/MrThearMan/graphene-django-query-optimizer/)

**Contributing**: [https://github.com/MrThearMan/graphene-django-query-optimizer/blob/main/CONTRIBUTING.md](https://github.com/MrThearMan/graphene-django-query-optimizer/blob/main/CONTRIBUTING.md)

---

Solve the GraphQL [N+1 problem] in [graphene-django] applications
just by changing a few imports, automatically adding the appropriate
[`only`](https://docs.djangoproject.com/en/dev/ref/models/querysets/#only),
[`select_related`](https://docs.djangoproject.com/en/dev/ref/models/querysets/#select-related),
and [`prefetch_related`](https://docs.djangoproject.com/en/dev/ref/models/querysets/#prefetch-related)
method calls to your QuerySets to fetch _only_ what you need.

```python
import graphene
from example_project.app.models import Example

from query_optimizer import DjangoObjectType,…
