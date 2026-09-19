---
repo: "ujuc/dotrc"
name: "dotrc"
description: "dotfiles"
readmeQualityOk: true
url: "https://github.com/ujuc/dotrc"
language: "Rust"
languages: ["Rust", "Shell"]
languagePcts: [45, 43]
stars: 15
forks: 6
openIssues: 9
closedIssues: 41
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2014-10-18T15:25:47Z"
lastCommitAt: "2026-09-19T01:34:40Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 70
maintainers: ["ujuc"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c19663319c7f024b2c27a9748db1a4877a6d30ff4a304e44fdc2d6b28a42a42/ujuc/dotrc"
---

# MyDotrc

## 자동 설치

저장소를 clone한 뒤 설치할 그룹의 옵션을 지정해 실행한다. 인자 없이 실행하면 도움말을 표시하며, 옵션은 조합할 수 있다. `--all`은 모든 그룹을 설치한다.

```bash
./scripts/install.sh --help
./scripts/install.sh -h
./scripts/install.sh --cli
./scripts/install.sh --apps
./scripts/install.sh --fonts
./scripts/install.sh --agents
./scripts/install.sh --cli --agents
./scripts/install.sh --all
```

그룹별 설치의 독립적인 항목이 실패해도 가능한 나머지 작업은 계속 진행하며, 마지막에 실패 정보와 재실행 명령을 출력한다. 링크 원본이 없거나 기존 설정과 충돌하면 변경 전에 안전하게 중단하며, 기존 파일이나 링크를 덮어쓰지 않는다.

## 설치전 작업

### [Homebrew](https://brew.sh/)

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## Auth 환경 구성

### 1Password

- [SSH agent 설정](https://developer.1password.com/docs/ssh/agent/)

```sh
brew install --cask 1password 1password-cli
```

### [GitHub CLI](https://cli.github.com/manual/)

```sh
brew install gh
gh auth login
```

## Repo 환경 작업

```sh
gh repo clone ujuc/dotrc ${HOME}/.config/dotrc
```

## zsh 설정

### [starship](https://starship.rs/)

- CLI 테마

```sh
brew install starship
ln -sf ${DOTRCDIR}/starship.toml ${XDG_CONFIG_HOME}/starship.toml
```

### [ZimFW](https://zimfw.sh/)

```sh
brew install zimfw
```

### `zshrc` 파일 링크…
