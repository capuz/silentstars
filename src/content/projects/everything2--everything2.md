---
repo: "everything2/everything2"
name: "everything2"
description: "E2 site code, tools, and miscellaneous stuff"
url: "https://github.com/everything2/everything2"
homepage: "http://everything2.com"
language: "Perl"
languages: ["Perl", "JavaScript"]
languagePcts: [46, 40]
stars: 36
forks: 6
openIssues: 239
closedIssues: 2247
watchers: 5
contributors: 9
recentReleases: 0
createdAt: "2012-01-09T01:43:25Z"
lastCommitAt: "2026-06-28T02:00:52Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 98
undervaluedScore: 59
maintainers: ["jaybonci", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2daa23d3eb9aaec217c27cdf9f122339af3214e6f8610f39b736a6418ca4135/everything2/everything2"
---

# Everything2

Everything2 is a user-submitted content website emphasizing writing and connectivity between entries. Visit us at [everything2.com](https://everything2.com).

## Getting Started

**Quick start for developers:**

```bash
# Install Docker Desktop, then:
./docker/devbuild.sh

# Visit http://localhost:9080
```

See [docs/GETTING_STARTED.md](docs/GETTING_STARTED.md) for complete development setup.

## Architecture

- **Backend:** Perl + Moose on **PSGI/Plack** (Starman), behind **Apache2 (mpm_event)** as a pure
  reverse proxy + edge compression — **mod_perl and CGI.pm fully removed**. **MySQL 8.4 LTS**.
- **Frontend:** React 18.3 + Webpack 5 (jQuery fully retired; legacy Mason templates fully retired)
- **Infrastructure:** AWS Fargate ECS, CodeBuild CI/CD, S3 asset storage, RDS MySQL
- **Development:** Docker containers (`e2devapp`, `e2devdb`) with automated testing

## Repository Structure

| Directory | Purpose |
|-----------|---------|
| [ecore/](ecore/) | Core Everything libraries (Perl/Moose OOP) |
| [react/](react/) | React 18 frontend components |
| [www/](www/) | Static web assets (CSS, JS, images) |
| [t/](t/) | Test suite (automated in build) |
|…
