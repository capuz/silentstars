---
repo: "django/django-asv"
name: "django-asv"
description: "Benchmarks for Django using asv"
readmeQualityOk: true
url: "https://github.com/django/django-asv"
language: "Python"
languages: ["Python"]
languagePcts: [83]
stars: 51
forks: 28
openIssues: 8
closedIssues: 7
watchers: 6
contributors: 23
recentReleases: 0
createdAt: "2021-01-03T15:23:31Z"
lastCommitAt: "2026-08-30T00:45:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 87
undervaluedScore: 52
maintainers: ["jacobtylerwalls"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c881a68a7bb3c87453e58bb4d9e84303c74be6e93e992a84bccc0bce5a47c19/django/django-asv"
discussionCount: 0
---

# **Django ASV**

This repository contains the benchmarks for measuring Django's performance over time.

The benchmarking process is carried out by the benchmarking tool [airspeed velocity](https://asv.readthedocs.io/en/stable/) and the results can be viewed [here](https://django.github.io/django-asv/)

## **Running the benchmarks**
---

### **If you have installed Anaconda or miniconda**

`Conda` is being used to run the benchmarks against different versions of python

If you already have conda or miniconda installed,you can run the benchmarks by using the commands

```
pip install asv
asv run
```

to run the benchmarks against the latest commit.

### **If you have not installed Anaconda or miniconda**

If you do not have conda or miniconda installed, change the contents of the file `asv.conf.json` as follows to use `virtualenv` to run the benchmarks

```json
{
    "version": 1,
    "project": "Django",
    "project_url": "https://www.djangoproject.com/",
    "repo": "https://github.com/django/django.git",
    "branches": ["main"],
    "build_command": [
        "python -m pip install build",
        "python -m build --wheel -o {build_cache_dir} {build_dir}"
    ],…
