---
repo: "RECursion-NITD/RECursionNITD-website"
name: "RECursionNITD-website"
description: "RECursion Website (Django)"
readmeQualityOk: true
url: "https://github.com/RECursion-NITD/RECursionNITD-website"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [40, 32]
stars: 12
forks: 42
openIssues: 15
closedIssues: 70
watchers: 13
contributors: 29
recentReleases: 0
createdAt: "2018-11-03T19:37:37Z"
lastCommitAt: "2026-08-29T17:28:22Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 80
undervaluedScore: 60
maintainers: ["SuryaHalder", "apaul2077", "Shubham15986"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad662769098800faac0814e4a2b18318c6e06a862a8c671710fdfdd2ae49c57a/RECursion-NITD/RECursionNITD-website"
---

# RECursion NITD Website Backend

## Project Title

**RECursion NITD Website Backend**

## Functionalities

- User registration, login, and profile management
- Forum with questions, answers, and discussions
- Event creation, listing, updating, and details
- Interview experience sharing and browsing
- Blog content management
- Team member pages and team-related data
- Calendar-related event APIs
- Google social authentication
- Email notification support using SMTP
- REST API endpoints for frontend integration

## Tech Stack

- Python 3.11
- Django 3.2
- Django REST Framework
- Django Filters
- Django MarkdownX
- Django Prometheus
- social-auth-app-django
- dj-database-url
- python-decouple / python-dotenv

## Project Structure

- `requirements.txt` — project dependencies
- `website/` — Django application root
  - `manage.py` — Django management script
  - `website/` — project settings and URL configuration
    - `settings.py` — application settings
    - `urls.py` — root URL routing
    - `wsgi.py` — WSGI entrypoint
  - `blog/` — blog application
  - `events/` — event management application
  - `events_calendar/` — calendar API application
  - `forum/` — forum application
  -…
