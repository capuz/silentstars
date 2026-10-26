---
repo: "svjis/svjis2"
name: "svjis2"
description: "SVJIS2 - CMS pro SVJ a BD"
readmeQualityOk: true
url: "https://github.com/svjis/svjis2"
homepage: "https://svjis.github.io"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [68, 25]
topics: ["svj", "free-svj", "open-svj", "svjis", "web-svj", "py-svj", "pysvj", "self-hosted"]
stars: 5
forks: 3
openIssues: 2
closedIssues: 8
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2024-02-27T09:49:44Z"
lastCommitAt: "2026-10-26T09:17:37Z"
lastReleaseAt: "2024-08-30T18:22:18Z"
status: "thriving"
tags: ["hidden_gem", "community_hub"]
healthScore: 91
undervaluedScore: 87
maintainers: ["berk76", "dependabot[bot]", "domsvoboda"]
openGraphImageUrl: "https://opengraph.githubassets.com/2cc4e20e38f44d18929a06fa2c1f9865c5993d9c83483315a8927fc82270fcaf/svjis/svjis2"
discussionCount: 48
---

# SVJIS2

Information system for homeowners' associations (SVJ). :house_with_garden:

## Project Description

SVJIS is a CMS for Homeowners' Associations. The system provides a content management system :memo:, discussions under articles, polls :bar_chart:, reporting and tracking of issues, advertisements, and a database of owners :family_man_woman_boy: including records of units and shares. More on the [project website](https://svjis.github.io/Vlastnosti/).

## 1 Installation

Make sure you have `uv` tool installed:
```
uv --version
```
If not, install it from: https://docs.astral.sh/uv/getting-started/installation/

Clone the project
```
git clone https://github.com/svjis/svjis2.git
cd svjis2
```

Install the dependencies
```
uv sync --no-dev
# in Linux
source .venv/bin/activate
# in Windows
source .venv/Scripts/activate
```

Create the configuration
```
cd svjis
python manage.py migrate
python manage.py svjis_setup --password <choose password for admin user>
```

> [!NOTE]
> To compile the translations, you will need to have the `gettext` utility installed - try `gettext --version`. If you don't have it, feel free to skip the next step, and the application will only be…
