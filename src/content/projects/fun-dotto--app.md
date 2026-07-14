---
repo: "fun-dotto/app"
name: "app"
description: "Public Hakodate Future University Portal App Dotto Mobile App"
originalDescription: "公立はこだて未来大学ポータルアプリ Dotto モバイルアプリ"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/fun-dotto/app"
homepage: "https://fun-dotto.github.io"
language: "Dart"
languages: ["Dart"]
languagePcts: [98]
topics: ["app"]
stars: 9
forks: 0
openIssues: 1
closedIssues: 223
watchers: 0
contributors: 14
recentReleases: 0
createdAt: "2023-06-16T07:08:52Z"
lastCommitAt: "2026-07-14T05:50:48Z"
lastReleaseAt: "2026-04-10T01:31:57Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 78
maintainers: ["kantacky", "renovate[bot]", "devin-ai-integration[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/14c3fecc1321a089e306c73e0beeb481c9a2174034ba8d48f161b2a4c20a5cf3/fun-dotto/app"
---

# Dotto

## Welcome to the Dotto Development Team!

[Dotto Wiki](https://www.notion.so/fun-dotto/30428560ac7980778136e29902746cae?v=30428560ac79801a92ef000c7ca1f6a3&source=copy_link)

## Setup

### Things to do in advance

- Update macOS to the latest version
- [Install Homebrew](https://www.notion.so/fun-dotto/30428560ac79801095f2e00033d9a132)
- [Install the latest version of Xcode](https://www.notion.so/fun-dotto/30428560ac79807797c3d6f62d1d393d)
- [Install mise](https://www.notion.so/fun-dotto/30428560ac79804caaf8ed3a3ad30cb5)

### Clone the repository

```zsh
git clone git@github.com:fun-dotto/app.git dotto-app
cd dotto-app
```

### Install tools

```zsh
mise install
```

### Set up pre-commit

```
mise generate git-pre-commit --write --task=pre-commit
```

### Authenticate Google Cloud & Firebase

```zsh
gcloud auth login
firebase login
```

### Various setups

```zsh
mise setup
```

### Build and run

```zsh
mise run app
```

&copy; 2026 Dotto
