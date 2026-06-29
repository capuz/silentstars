---
repo: "archlinux/archweb"
name: "archweb"
description: "Arch Linux website code"
url: "https://github.com/archlinux/archweb"
homepage: "https://archlinux.org"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [50, 34]
topics: ["archlinux", "website", "django", "python"]
stars: 379
forks: 152
openIssues: 80
closedIssues: 123
watchers: 21
contributors: 97
recentReleases: 0
createdAt: "2013-06-11T20:39:57Z"
lastCommitAt: "2026-06-29T07:21:37Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "funded"]
healthScore: 89
undervaluedScore: 38
maintainers: ["dependabot[bot]", "jelly", "m1rm"]
openGraphImageUrl: "https://opengraph.githubassets.com/908ffce5c77baa57a3b8891eb9c18ef62f0f65ebd3b44b21032850f1734993f7/archlinux/archweb"
fundingLinks: ["CUSTOM:https://archlinux.org/donate/"]
---

# Archweb README

To get a pretty version of this document, run

    $ markdown README > README.html

# License

See LICENSE file.

# Authors

See AUTHORS file.

# Dependencies

- Python 3.13.0
- UV
- rsync (optional for mirrorcheck with rsync mirrors)

# Python dependencies

You can look at the packages `archweb` uses by looking at the `pyproject.toml` file;
it is best to use `uv` to handle these. If you insist on (Arch Linux) packages, you
probably want the following:

- python-django
- python-psycopg2
- python-markdown
- python-memcached

# Testing Installation

1. Run `uv sync`.
2. Initialize git submodules:

        git submodule update --init --recursive

3. Activate the virtualenv.
4. Copy `local_settings.py.example` to `local_settings.py` and modify.
   - Make sure to uncomment the appropriate database section (either sqlite or
   PostgreSQL).
   - set `DEBUG = True` or keep it set to `False` and set `ALLOWED_HOSTS = ['localhost', '127.0.0.1', '[::1]']`
   - if you keep `DEBUG = False`, make static assets available with `uv run ./manage.py collectstatic --noinput`

5. Migrate changes.

        uv run ./manage.py migrate
6. Load the fixtures to pre populate some data. If…
