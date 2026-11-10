---
repo: "apluslms/a-plus"
name: "a-plus"
description: "A+ frontend portal - A+ LMS documentation:"
readmeQualityOk: true
url: "https://github.com/apluslms/a-plus"
homepage: "https://apluslms.github.io/"
language: "Python"
languages: ["Python"]
languagePcts: [69]
topics: ["lms", "django"]
stars: 74
forks: 81
openIssues: 211
closedIssues: 565
watchers: 9
contributors: 53
recentReleases: 0
createdAt: "2012-09-24T07:42:30Z"
lastCommitAt: "2026-11-10T11:30:42Z"
lastReleaseAt: "2021-08-23T08:25:11Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 89
undervaluedScore: 55
maintainers: ["ihalaij1", "murhum1", "sayravai"]
openGraphImageUrl: "https://opengraph.githubassets.com/623c5e8cb92bd64d1c74b063c4c6a7bb8579cbd7ed3cbdf5eb65dc17aeedda2d/apluslms/a-plus"
---

A+
==

"We present a design and open source implementation for a service oriented e-learning system, which utilizes external services for supporting a wide range of learning content and also offers a REST API for external clients to fetch information stored in the system."

Karavirta, V. & Ihantola, P. & Koskinen, T. (2013)
Service-Oriented Approach to Improve Interoperability of E-Learning Systems
http://dx.doi.org/10.1109/ICALT.2013.105

The system has since been developed by various [contributors](https://apluslms.github.io/about/authors/)
at Aalto University, Finland.

Requirements
------------

A+ is a Django 5.2 and Python 3.10+ application which has been run in production using Postgresql database, Apache 2 (or Nginx) and uwsgi.
See [doc/DEPLOYMENT.md](https://github.com/apluslms/a-plus/blob/HEAD/doc/DEPLOYMENT.md) for further deployment instructions.
Consider using `virtualenv` and `pip3 install -r requirements.txt`.
Create `local_settings.py` and override necessary Django settings from `aplus/settings.py`.
At least `DEBUG`, `SECRET_KEY` and `DATABASES` must be set in case of deployment.
The server process needs write access to the `media` directory.

Development…
