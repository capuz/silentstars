---
repo: "nik1122570/Heavy-Equipment-Hire-MS"
name: "Heavy-Equipment-Hire-MS"
description: "Heavy Equipment Hire is a custom ERPNext/Frappe app for managing heavy machinery rental operations, including equipment availability, hire contracts, operator assignment, mobilization, billing, maintenance tracking, and utilization reporting."
readmeQualityOk: true
url: "https://github.com/nik1122570/Heavy-Equipment-Hire-MS"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [71, 29]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-15T19:28:51Z"
lastCommitAt: "2026-08-20T18:34:05Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 72
undervaluedScore: 22
maintainers: ["nik1122570"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f7dacc2cd90d8223c68e2748e7c27de1378db91f5e9d6be6a60ab4714f1543d/nik1122570/Heavy-Equipment-Hire-MS"
---

### Heavy Equipment Hire

ERPNext/Frappe app for managing heavy equipment hiring, rental contracts, machine availability, operators, billing, maintenance, and utilization.

### Installation

You can install this app using the [bench](https://github.com/frappe/bench) CLI:

```bash
cd $PATH_TO_YOUR_BENCH
bench get-app $URL_OF_THIS_REPO --branch develop
bench install-app heavy_equipment_hire
```

### Contributing

This app uses `pre-commit` for code formatting and linting. Please [install pre-commit](https://pre-commit.com/#installation) and enable it for this repository:

```bash
cd apps/heavy_equipment_hire
pre-commit install
```

Pre-commit is configured to use the following tools for checking and formatting your code:

- ruff
- eslint
- prettier
- pyupgrade

### CI

This app can use GitHub Actions for CI. The following workflows are configured:

- CI: Installs this app and runs unit tests on every push to `develop` branch.
- Linters: Runs [Frappe Semgrep Rules](https://github.com/frappe/semgrep-rules) and [pip-audit](https://pypi.org/project/pip-audit/) on every pull request.

### License

mit
