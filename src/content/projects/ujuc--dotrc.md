---
repo: "ujuc/dotrc"
name: "dotrc"
description: "dotfiles"
readmeQualityOk: true
url: "https://github.com/ujuc/dotrc"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 15
forks: 6
openIssues: 9
closedIssues: 41
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2014-10-18T15:25:47Z"
lastCommitAt: "2026-07-20T06:17:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 94
undervaluedScore: 70
maintainers: ["ujuc"]
openGraphImageUrl: "https://opengraph.githubassets.com/d4c8b184cdf5984da87d3e3c813973961e52ad24ff6831af0b4927f7e2b14c35/ujuc/dotrc"
---

# MyDotrc

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
gh repo clone ujuc/dotrc ${HOME}/.config/dotrc -- --recurse-submodules
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

### `zshrc` 파일 링크

```sh
ln -sf ${HOME}/.config/dotrc/zshrc ${HOME}/.zshrc
```

## CLI Packages

### GNU library

- xcode util에서 제공하는 라이브러리 말고 GNU 라이브러리를 사용하기 위해서 추가.

```sh
brew install coreutils
```

### [bat](https://github.com/sharkdp/bat)

```sh
brew install bat
mkdir -p ${XDG_CONFIG_HOME}/bat
ln -sf ${DOTRCDIR}/batrc ${XDG_CONFIG_HOME}/bat/config
```

### [eza](https://github.com/eza-community/eza)

```sh
brew install eza
```

###…
