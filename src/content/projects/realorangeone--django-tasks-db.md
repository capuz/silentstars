---
repo: "RealOrangeOne/django-tasks-db"
name: "django-tasks-db"
description: "An ORM-based backend for Django Tasks"
readmeQualityOk: true
url: "https://github.com/RealOrangeOne/django-tasks-db"
homepage: "https://pypi.org/project/django-tasks-db/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["background-workers", "django", "django-tasks"]
stars: 119
forks: 16
openIssues: 10
closedIssues: 11
watchers: 9
contributors: 11
recentReleases: 0
createdAt: "2026-02-03T20:59:16Z"
lastCommitAt: "2026-08-28T14:22:46Z"
lastReleaseAt: "2026-02-06T16:50:06Z"
status: "thriving"
tags: ["needs_contributors", "funded"]
healthScore: 81
undervaluedScore: 23
maintainers: ["RealOrangeOne", "abnerpc", "jrd"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c2e17545d07f377d422775a42d0588b0345d1137733604504103c6007c5cdcf/RealOrangeOne/django-tasks-db"
fundingLinks: ["GITHUB:https://github.com/RealOrangeOne", "KO_FI:https://ko-fi.com/theorangeone", "LIBERAPAY:https://liberapay.com/theorangeone", "CUSTOM:https://theorangeone.net/support/"]
discussionCount: 13
---

# Django Tasks DB

A [Django Tasks](https://docs.djangoproject.com/en/stable/topics/tasks/) backend which uses Django's ORM to store tasks in the database.

## Installation

```
python -m pip install django-tasks-db
```

First, add `django_tasks_db` to your `INSTALLED_APPS`:

```python
INSTALLED_APPS = [
    # ...
    "django_tasks_db",
]
```

Finally, add it to your `TASKS` configuration:

```python
TASKS = {
    "default": {
        "BACKEND": "django_tasks_db.DatabaseBackend",
        "QUEUES": ["default"]
    }
}
```

## Usage

### Worker

You can run the `db_worker` command to run tasks as they're created. Check the `--help` for more options.

```shell
./manage.py db_worker
```

In `DEBUG`, the worker will automatically reload when code is changed (or by using `--reload`). This is not recommended in production environments as tasks may not be stopped cleanly.

### Pruning old tasks

After a while, tasks may start to build up in your database. This can be managed using the `prune_db_task_results` management command, which deletes completed tasks according to the given retention policy. Check the `--help` for the available options.

### Customizing the task id

By default, the…
