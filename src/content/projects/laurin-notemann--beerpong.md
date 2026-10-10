---
repo: "Laurin-Notemann/beerpong"
name: "beerpong"
description: "Cross-platform mobile app for tracking beerpong leaderboards between friend groups 🍺😎"
readmeQualityOk: true
url: "https://github.com/Laurin-Notemann/beerpong"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [74, 20]
stars: 7
forks: 0
openIssues: 7
closedIssues: 46
watchers: 0
contributors: 7
recentReleases: 3
createdAt: "2024-11-15T14:49:37Z"
lastCommitAt: "2026-10-10T10:04:02Z"
lastReleaseAt: "2026-10-07T14:41:58Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 83
maintainers: ["Laurin-Notemann", "Johannes-Krabbe", "LinusBolls"]
openGraphImageUrl: "https://opengraph.githubassets.com/724d9f2cde0014abe77aa4f8a52c2d72a5f733c7e175ad4ce14758e900e9ec88/Laurin-Notemann/beerpong"
---

# SETUP
```sh
git clone https://github.com/Laurin-Notemann/beerpong 
```

Copy .env and check all the values
```sh
cp .env.example .env
```

Initial docker database
```sh
make docker-db-up
```

Stop docker database
```sh
make docker-db-stop
```

Start docker database
```sh
make docker-db-start
```

Remove docker database
```sh
make docker-db-down
```

# How to Git

```sh
git clone https://github.com/Laurin-Notemann/beerpong 
```

## Create new Feature
1. Create new branch
```sh
git checkout -b "branch-name"
```

2. Work on Feature

3. Commit to branch
```sh
git add .
git commit -m "commit-msg"
```

4. Push to branch
```sh
git push origin branch-name
```

5. Create PR 

6. Wait for Approval

# Setup of pre-commit

1. 
```sh
ln ./scripts/pre-committ .git/hooks/pre-committ
```
