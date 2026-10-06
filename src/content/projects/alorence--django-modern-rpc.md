---
repo: "alorence/django-modern-rpc"
name: "django-modern-rpc"
description: "Simple XML-RPC and JSON-RPC server for modern Django"
readmeQualityOk: true
url: "https://github.com/alorence/django-modern-rpc"
homepage: "http://django-modern-rpc.rtfd.io"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["django", "rpc", "rpc-framework", "python3", "plugin"]
stars: 111
forks: 19
openIssues: 0
closedIssues: 50
watchers: 2
contributors: 10
recentReleases: 0
createdAt: "2016-10-01T15:54:43Z"
lastCommitAt: "2026-10-06T10:42:54Z"
lastReleaseAt: "2017-03-25T09:34:33Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 93
undervaluedScore: 38
maintainers: ["alorence", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0930f916b2b526de13609124c411734f7fffe72961f346ec507c99ac12534de7/alorence/django-modern-rpc"
fundingLinks: ["GITHUB:https://github.com/alorence", "LIBERAPAY:https://liberapay.com/alorence"]
discussionCount: 8
---

# django-modern-rpc

Embed an XML-RPC / JSON-RPC server in your Django project!

## Main features

- XML-RPC and JSON-RPC 2.0 support (JSON-RPC 1.0 is NOT supported)
- Custom authentication process
- Custom error handling
- Sync and async procedures
- Multiple servers
- Customizable XML / JSON backends with builtin support for orjson, msgspec, ujson, rapidjson, lxml, etree, etc.

## Requirements

The following Django / Python versions are supported, according to [Django Installation FAQ](https://docs.djangoproject.com/en/5.2/faq/install/#what-python-version-can-i-use-with-django)

|   Python ➞ | 3.10 | 3.11 | 3.12 | 3.13 | 3.14 |
|-----------:|:----:|:----:|:----:|:----:|:----:|
| Django 4.2 |  🟢  |  🟢  |  🟢  |  🔴  |  🔴  |
| Django 5.0 |  🟢  |  🟢  |  🟢  |  🔴  |  🔴  |
| Django 5.1 |  🟢  |  🟢  |  🟢  |  🟢  |  🔴  |
| Django 5.2 |  🟢  |  🟢  |  🟢  |  🟢  |  🟢  |
| Django 6.0 |  🔴  |  🔴  |  🟢  |  🟢  |  🟢  |
| Django 6.1 |  🔴  |  🔴  |  🟢  |  🟢  |  🟢  |

To enforce security, [defusedxml](https://pypi.org/project/defusedxml/) will be installed as a dependency.

## Quickstart

Install ``django-modern-rpc`` in your environment

```bash
pip install…
