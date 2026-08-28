---
repo: "alextselegidis/plainpad"
name: "plainpad"
description: "📓 Plainpad - Self Hosted Note Taking App"
readmeQualityOk: true
url: "https://github.com/alextselegidis/plainpad"
homepage: "https://plainpad.org"
language: "PHP"
languages: ["PHP", "JavaScript"]
languagePcts: [51, 43]
topics: ["self-hosted", "php", "javascript", "react", "note-taking", "laravel"]
stars: 439
forks: 38
openIssues: 9
closedIssues: 36
watchers: 5
contributors: 4
recentReleases: 0
createdAt: "2019-11-04T17:12:25Z"
lastCommitAt: "2026-08-28T12:22:10Z"
lastReleaseAt: "2026-04-23T14:59:26Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 93
undervaluedScore: 37
maintainers: ["alextselegidis", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/219554907/c20547db-9779-41db-9724-d32672df5547"
---

<h1 align="center">
    <br>
    </a>
    <br>
    Plainpad
    <br>
</h1>

<h4 align="center">
    Plainpad is a self-hosted note taking application.
</h4>

<h4 align="center">
</h4>

  </a>
  </a>
  </a>
</p>

</p>

## About

Driven by simplicity and stability in mind, Plainpad offers great potential at no cost. Become the owner of 
your data as Plainpad will nicely run on your own server. 

## Setup

To clone and run this application, you'll need Docker installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/alextselegidis/plainpad.git

# Go into the repository
$ cd plainpad

# Start Docker 
$ docker compose up -d
```

Note: the current setup works with Windows and WSL & Docker.

## Demo Data

A standalone seeder is available to populate the database with realistic
sample notes (medical-student study notes). It is **not** wired into the
default `DatabaseSeeder` and must be run manually:

```bash
# From the server directory (or inside the app container)
$ php artisan db:seed --class=DemoSeeder
```

The seeder creates a dedicated demo user the first time it runs:

- Email: `med.student@example.org`
- Password: `12345678`…
