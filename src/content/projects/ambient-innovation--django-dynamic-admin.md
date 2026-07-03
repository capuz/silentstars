---
repo: "ambient-innovation/django-dynamic-admin"
name: "django-dynamic-admin"
description: "Enable interactive selects in django-admin"
url: "https://github.com/ambient-innovation/django-dynamic-admin"
homepage: "https://pypi.org/project/django-dynamic-admin-forms/"
language: "Python"
languages: ["Python"]
languagePcts: [66]
topics: ["django", "django-admin", "forms"]
stars: 33
forks: 4
openIssues: 3
closedIssues: 3
watchers: 5
contributors: 4
recentReleases: 1
createdAt: "2021-11-08T10:23:13Z"
lastCommitAt: "2026-07-03T12:39:32Z"
lastReleaseAt: "2026-07-03T12:41:34Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 65
undervaluedScore: 31
maintainers: ["GitRon", "JBthePenguin"]
openGraphImageUrl: "https://opengraph.githubassets.com/acaa4a03c526f2954d8075bf036d86545d7f9f6233c0a9c1795cda7963ae4a6b/ambient-innovation/django-dynamic-admin"
---

Add simple interactions to the otherwise static django admin.

[PyPI](https://pypi.org/project/django-dynamic-admin-forms/) • [GitHub](https://github.com/ambient-innovation/django-dynamic-admin) • [Full documentation](https://django-dynamic-admin-forms.readthedocs.io/en/latest/index.html)

Creator & Maintainer: [Ambient Digital](https://ambient.digital/)

# django-dynamic-admin-forms

Add simple interactions to the otherwise static django admin.

## Installation

- Install the package via pip:

    ```pip install django-dynamic-admin-forms```

    or via pipenv:

    ```pipenv install django-dynamic-admin-forms```
- Add the module to `INSTALLED_APPS`:
    ```python
    INSTALLED_APPS = (
        "django_dynamic_admin_forms",
        "django.contrib.admin",
    )
    ```
    Ensure that the `dynamic_admin_forms` comes before the
    default `django.contrib.admin` in the list of installed apps,
    because otherwise the templates, which are overwritten by `dynamic_admin_forms`
    won't be found.
- Ensure that the `dynamic_admin_forms` templates are found via using `APP_DIRS` setting:
  ```python
  TEMPLATES = [
      {
          "BACKEND":…
