---
repo: "serhiileniv/every"
name: "every"
description: "Humane task scheduling for macOS (and Linux, beta). You will know it ran."
readmeQualityOk: true
url: "https://github.com/serhiileniv/every"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [83]
topics: ["automation", "cli", "cron-alternative", "launchd", "macos", "ruby", "scheduler"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-07-24T11:40:14Z"
lastCommitAt: "2026-09-01T08:51:30Z"
lastReleaseAt: "2026-07-25T09:09:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 49
maintainers: ["serhiileniv", "OnlyPiglet"]
openGraphImageUrl: "https://opengraph.githubassets.com/295d84b3635929421ea5e729381618a7451c2c539fc6cf052326235a19830404/serhiileniv/every"
---

</p>

<h1 align="center">every</h1>

</p>

</p>

</p>

---

cron never tells you it silently skipped your backup. launchd wants 40 lines of
XML before ignoring you too. `every` is one human phrase — and a straight
answer to *"did it run?"*.

```bash
every day 9am -- brew update
every 30m -- '~/bin/sync-notes.sh'
every monday 10:00 -- './weekly-report.sh'
```

```
$ every list
NAME           SCHEDULE      LAST          STATUS   NEXT
brew           day 9am       24 Jul 09:00  ok       25 Jul 09:00
sync-notes     30m           24 Jul 14:30  ok       24 Jul 15:00
weekly-report  monday 10:00  21 Jul 10:00  FAIL(1)  28 Jul 10:00

$ every log weekly-report     # exact output of the run that broke
$ every doctor                # plain-language diagnosis
```

## vs cron · vs raw launchd

|  | cron | raw launchd | **every** |
|---|---|---|---|
| Add a job | `30 9 * * 1` in `crontab -e` | ~40 lines of XML + `launchctl` | `every monday 9:30 -- cmd` |
| Did it run? | silence | silence | `every list` → ok / FAIL |
| What did it print? | a local mailbox nobody reads | wire log paths yourself | `every log <name>` |
| Mac was asleep at 9am | run **lost forever** | runs on wake | runs on wake — and…
