---
repo: "jacob-consulting/django-crud-views"
name: "django-crud-views"
description: "Django CRUD Views"
readmeQualityOk: true
url: "https://github.com/jacob-consulting/django-crud-views"
homepage: "https://django-crud-views.readthedocs.io/"
language: "Python"
languages: ["Python"]
languagePcts: [87]
topics: ["django", "python"]
stars: 5
forks: 1
openIssues: 6
closedIssues: 21
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2025-01-28T08:35:33Z"
lastCommitAt: "2026-07-22T10:11:38Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 81
maintainers: ["alexander-jacob", "becksth"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc97bb4780ce12402612a65c26703d28c4d12ffa90ce9a18cf47576eba1a0312/jacob-consulting/django-crud-views"
discussionCount: 0
---

# Django CRUD Views

**Stop hand-writing the same list, detail, create, update and delete views for every model.**
Define your model, register a `ViewSet`, and Django CRUD Views generates the pages, wires up
every URL, and cross-links the views — using *your* templates and *your* permissions, right
inside your own app.

## This is all you write

```python
# app/views.py
import django_tables2 as tables

from crud_views.lib.viewset import ViewSet
from crud_views.lib.table import Table
from crud_views.lib.views import (
    ListViewTableMixin,
    ListViewPermissionRequired,
    CreateViewPermissionRequired,
    UpdateViewPermissionRequired,
    DeleteViewPermissionRequired,
)
from crud_views_object_detail.lib import ObjectDetailViewPermissionRequired
from .models import Author

cv_author = ViewSet(model=Author, name="author")

class AuthorTable(Table):
    first_name = tables.Column()
    last_name = tables.Column()

class AuthorList(ListViewTableMixin, ListViewPermissionRequired):
    cv_viewset = cv_author
    table_class = AuthorTable

class AuthorDetail(ObjectDetailViewPermissionRequired):
    cv_viewset = cv_author

class AuthorCreate(CreateViewPermissionRequired):…
