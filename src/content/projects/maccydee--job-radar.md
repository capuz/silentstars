---
repo: "maccydee/job-radar"
name: "job-radar"
description: "Watch employers' job boards directly and only be told about roles that pass your own filters. Reads 13 ATS APIs across 296 boards, ranks the whole board against your CV for ~1% of the cost of screening it, and never hides a role just because the salary is unstated."
readmeQualityOk: true
url: "https://github.com/maccydee/job-radar"
homepage: "https://github.com/maccydee/job-radar#readme"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ats", "automation", "job-board", "job-search", "jobs", "python", "recruiting", "cli", "self-hosted", "sqlite"]
stars: 17
forks: 5
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-08-17T22:39:53Z"
lastCommitAt: "2026-08-25T04:08:47Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 38
maintainers: ["maccydee", "Varshx183", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1337732883/9ecef377-53c3-416a-8184-019c2360c8fb"
---

# job-radar

Watch employers' job boards directly, and only be told about roles that pass
your own filters.

Most job tools are built to make you apply to more things. This one is built to
show you fewer: it reads postings straight from company applicant tracking
systems, normalises twenty-seven different board APIs into one shape, and
drops anything that fails rules you write down once.

```bash
git clone https://github.com/maccydee/job-radar
cd job-radar && python3 install.py
```

That is the whole install. It checks your Python is new enough, creates a
virtual environment beside the checkout, installs the two dependencies, and
hands straight over to setup, which asks for your CV, asks what you are
looking for, and runs the first scan. `install.py` imports nothing outside the
standard library, because it runs before anything is installed.

Prefer to do it yourself, or already have an environment:

```bash
pip install -e .
job-radar setup
```

## Requirements

**Python 3.10 or newer.** `install.py` checks this before it does anything else.

Scanning, filtering and the dashboard need nothing beyond that. The two
dependencies are `requests` and `PyYAML`, and the bundled boards need…
