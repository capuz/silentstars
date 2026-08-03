---
repo: "vertelab/odoo-ai"
name: "odoo-ai"
description: "AI Orchestration for Odoo"
readmeQualityOk: true
url: "https://github.com/vertelab/odoo-ai"
language: "Python"
languages: ["Python"]
languagePcts: [94]
stars: 26
forks: 18
openIssues: 1
closedIssues: 0
watchers: 3
contributors: 15
recentReleases: 0
createdAt: "2023-12-29T13:10:05Z"
lastCommitAt: "2026-08-03T06:43:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 80
undervaluedScore: 56
maintainers: ["vertelbot"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5e6c2f64e1039c058853ca8eab9c4b92392bdcbc7763ec9d0d9184464bada31/vertelab/odoo-ai"
---

# odoo-ai

When installing the Python dependencies/requirements, one can run into issues with the pre-installed Python packages on Ubuntu 24.04, such as the one below.
```
ERROR: Cannot uninstall typing_extensions 4.10.0, RECORD file not found. Hint: The package was installed by debian.
```
To fix this issue, the easiest way is to run the command below in the project/repository directory.
```
sudo pip3 install -r requirements.txt --ignore-installed --break-system-packages
```

## Definition of Done — AI-bryggmoduler (`_ai`)

Varje domän-`_ai`-modul (t.ex. `marketing_ai`, `strategy_ai`, `social_ai`)
måste uppfylla följande innan den räknas som klar:

1. **Manifest**: `depends` inkluderar `ai_agent_core` (INTE legacy `ai_agent`)
2. **AI-förmågor som data-XML**: coworkers (`ai.coworker`) + skills (`ai.skill`)
   i `data/`, aldrig Python-create (undantag: thin post_init_hook-moduler)
3. **Körning**: `coworker.run()` / `coworker.powerbox()` — aldrig `ai.quest`
4. **Inga `ai.quest`/`ai.agent`-referenser** i modellkod (grep ska vara tom)
5. **Odoo 18-kompatibla views**: `list` (inte `tree`), `invisible` (inte
   `attrs`/`states`), inga borttagna ir.cron-fält (`numbercall`, `description`)…
