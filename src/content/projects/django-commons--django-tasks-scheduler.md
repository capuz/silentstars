---
repo: "django-commons/django-tasks-scheduler"
name: "django-tasks-scheduler"
description: "Schedule async tasks using redis protocol. Redis/ValKey/Dragonfly or any broker using the redis protocol can be used."
readmeQualityOk: true
url: "https://github.com/django-commons/django-tasks-scheduler"
homepage: "https://django-tasks-scheduler.readthedocs.io/"
language: "Python"
languages: ["Python"]
languagePcts: [92]
topics: ["background-jobs", "django", "django-application", "job-queue", "python", "redis", "scheduled-jobs", "scheduled-tasks", "task-queue", "valkey"]
stars: 222
forks: 26
openIssues: 0
closedIssues: 66
watchers: 4
contributors: 107
recentReleases: 0
createdAt: "2023-06-23T13:45:44Z"
lastCommitAt: "2026-07-28T14:58:55Z"
lastReleaseAt: "2024-02-01T22:41:07Z"
status: "thriving"
tags: ["funded"]
healthScore: 95
undervaluedScore: 43
maintainers: ["cunla", "pre-commit-ci[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5730d91c7ee15b08355feab703b6766311bfcb7303ca50e74420736154c0b5d0/django-commons/django-tasks-scheduler"
fundingLinks: ["GITHUB:https://github.com/cunla"]
discussionCount: 9
---

Django Tasks Scheduler
===================

Documentation can be found in https://django-tasks-scheduler.readthedocs.io/

## Introduction Video

Watch this introduction video to learn about django-tasks-scheduler and its features.

# Usage

1. Update `settings.py` to include scheduler configuration:

```python
import os
from typing import Dict
from scheduler.types import SchedulerConfiguration, Broker, QueueConfiguration

INSTALLED_APPS = [
    # ...
    "scheduler",
    # ...
]
SCHEDULER_CONFIG = SchedulerConfiguration(
    EXECUTIONS_IN_PAGE=20,
    SCHEDULER_INTERVAL=10,
    BROKER=Broker.REDIS,
    CALLBACK_TIMEOUT=60,  # Callback timeout in seconds (success/failure/stopped)
    # Default values, can be overridden per task/job
    DEFAULT_SUCCESS_TTL=10 * 60,  # Time To Live (TTL) in seconds to keep successful job results
    DEFAULT_FAILURE_TTL=365 * 24 * 60 * 60,  # Time To Live (TTL) in seconds to keep job failure information
    DEFAULT_JOB_TTL=10 * 60,  # Time To Live (TTL) in seconds to keep job information
    DEFAULT_JOB_TIMEOUT=5 * 60,  # timeout (seconds) for a job
    # General configuration values
    DEFAULT_WORKER_TTL=10 * 60,  # Time To Live (TTL) in seconds to…
