---
repo: "dfo-osdt/osp"
name: "osp"
description: "Open Science Portal"
readmeQualityOk: true
url: "https://github.com/dfo-osdt/osp"
language: "PHP"
languages: ["PHP"]
languagePcts: [84]
stars: 7
forks: 2
openIssues: 6
closedIssues: 203
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2022-08-08T11:31:02Z"
lastCommitAt: "2026-11-02T15:16:58Z"
lastReleaseAt: "2026-06-15T15:31:30Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 80
maintainers: ["vincentauger", "MathewEm"]
openGraphImageUrl: "https://opengraph.githubassets.com/9487b4a40710af6159d8e49dfd55adfafefa5e9d7e1b40f0e1f304813e825c89/dfo-osdt/osp"
discussionCount: 1
---

# DFO Open Science Portal

A web-based application to promote open science and track science publications within Fisheries and Oceans Canada.

## Contribution Guidelines

For now, we'll use spatie.be's excellent [guidelines](https://spatie.be/guidelines).
Additional guidelines will be added here as we progress.

## Get Started

Before you begin, ensure you have the following prerequisites installed:

- [PHP 8.3](https://www.php.net/) (see [php.net](https://www.php.net/))
- [WSL](https://docs.microsoft.com/en-us/windows/wsl/install) if you are on Windows
- [Redis](https://redis.io/)
- [MySQL 8.4.9](https://www.mysql.com/) (to mimic production, though SQLite can be used for development). MySQL 9.7 is not supported until Laravel Pulse supports its generated-column restrictions.

1. Install dependencies:

   ```bash
   composer install  # This will automatically publish Filament assets
   pnpm install
   ```

2. Set up environment variables:

   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

3. Run database migrations:

   ```bash
   php artisan migrate
   ```

4. Start the development servers:

   ```bash
   composer run dev
   ```

## Built With

This repo has…
