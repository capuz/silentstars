---
repo: "ehossack/django-backblaze-b2"
name: "django-backblaze-b2"
description: "A storage backend for Django that uses Backblaze's B2 APIs"
readmeQualityOk: true
url: "https://github.com/ehossack/django-backblaze-b2"
language: "Python"
languages: ["Python"]
languagePcts: [95]
stars: 29
forks: 5
openIssues: 1
closedIssues: 15
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2020-08-25T16:03:19Z"
lastCommitAt: "2026-11-07T09:30:48Z"
lastReleaseAt: "2022-08-09T16:23:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 37
maintainers: ["ehossack"]
openGraphImageUrl: "https://opengraph.githubassets.com/f2b3b414ecb31ad7f933be8a713fba885671e6aa18d864f90c060218d76a6e20/ehossack/django-backblaze-b2"
---

# django-backblaze-b2

A storage backend for Django that uses [Backblaze's B2 APIs](https://www.backblaze.com/b2/cloud-storage.html).

Implementation wraps [Official Python SDK](https://github.com/Backblaze/b2-sdk-python)

## Changelog / Releases

See [https://github.com/ehossack/django-backblaze-b2/releases](https://github.com/ehossack/django-backblaze-b2/releases)

## How to use

1. Install from this repo, or install from PyPi: `pip install django-backblaze-b2`
As tested, requires python 3.7 or greater but solely due to type annotations. PRs welcome :)
1. Configure your django `settings`. A minimalistic config would be:
```python
CACHES = {
    "default": .... ,
    # add a cache via db table or memcached that can be accessed from multiple threads
    "django-backblaze-b2": {
        'BACKEND': 'django.core.cache.backends.db.DatabaseCache',
        'LOCATION': 'django_backblaze_b2_cache_table',
    }
}

BACKBLAZE_CONFIG = {
    # however you want to securely retrieve these values
    "application_key_id": os.getenv("BACKBLAZE_KEY_ID"),
    "application_key": os.getenv("BACKBLAZE_KEY"),
}
```

Theoretically you may now refer to the base storage class as a storage class (see the…
