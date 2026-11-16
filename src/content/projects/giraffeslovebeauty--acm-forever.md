---
repo: "GiraffesLoveBeauty/ACM-Forever"
name: "ACM-Forever"
description: "CJLU ACM Learning and Exchange Platform engineering code repository"
originalDescription: "CJLU ACM 学习与交流平台工程代码仓库"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/GiraffesLoveBeauty/ACM-Forever"
language: "Python"
languages: ["Python", "Java"]
languagePcts: [43, 25]
stars: 5
forks: 0
openIssues: 8
closedIssues: 17
watchers: 0
contributors: 9
recentReleases: 10
createdAt: "2026-10-02T07:37:27Z"
lastCommitAt: "2026-11-16T04:24:39Z"
lastReleaseAt: "2026-11-09T08:53:30Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 93
undervaluedScore: 58
maintainers: ["T-CrB", "MiaoJJ13445", "codex"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd4801f3ae8f7c654f2f5d78ac27e3fc493fe08d8bcdffa982775e5bb9773fc7/GiraffesLoveBeauty/ACM-Forever"
---

# ACM-Forever

Engineering code repository for the campus ACM learning and exchange platform.

For the scope, startup steps, and limitations of algorithm tagging, translation, and local problem-set acceptance, see the [Problem Secondary Processing Delivery Notes](https://github.com/GiraffesLoveBeauty/ACM-Forever/blob/HEAD/docs/algorithm-tagging-delivery.md).

Project discussions, meeting minutes, and requirements documents are kept in the [CJLUACM-DLC documentation repository](https://github.com/GiraffesLoveBeauty/CJLUACM-DLC).

## Directories and Deployment

- `docs/`: engineering collaboration standards and API usage instructions.
- `tools/crawlers/`: problem metadata collection, AtCoder problem statement and sample collection, and SQLite ingestion tools. Output is saved to the git-ignored `data/` directory.
- `feat/`: platform feature files. After merging into `main`, changes in this directory are mirrored to `/home/WYJ/acm-forever-feat` on the server by GitHub Actions.
- `feat/api/` contains the standalone WebUI and API service, which keeps the original port `8088`. After `/home/WYJ/acm-forever-data/.env` is configured, the deployment workflow installs or updates the…
