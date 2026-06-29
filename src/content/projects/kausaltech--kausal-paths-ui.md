---
repo: "kausaltech/kausal-paths-ui"
name: "kausal-paths-ui"
description: "The public UI for the Kausal Paths platform"
url: "https://github.com/kausaltech/kausal-paths-ui"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 5
forks: 5
openIssues: 0
closedIssues: 24
watchers: 3
contributors: 11
recentReleases: 0
createdAt: "2021-04-15T10:14:43Z"
lastCommitAt: "2026-06-29T07:24:06Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 92
maintainers: ["terotik", "juyrjola", "woodwoerk"]
openGraphImageUrl: "https://opengraph.githubassets.com/eabbddbaa144f3858d2796d56df59fdb0bd92ebf75b92e81babf568571e45cff/kausaltech/kausal-paths-ui"
---

## Getting Started

### Prerequisites

Make sure you have installed the following:

- a package manager (e.g., homebrew for macOS, apt for Ubuntu, etc.)
- git
- nvm (Node Version Manager)
- direnv (auto-loads environment variables)
  - **Beginner Hints**: before `direnv` works you need to hook it into your shell: depending on which shell you're using (find out with `echo $SHELL`)
  - add `eval "$(direnv hook bash)"` to your `~/.bashrc` OR `eval "$(direnv hook zsh)"` to your `~/.zshrc` (create those files if they don't exist yet).
  - After that, restart the terminal or run `source ~/.bashrc` OR `source ~/.zshrc`.

### Initial setup

#### 1.)

When cloning the repo, you should pass `--recurse-submodules` to the `git clone` invocation to ensure you also
get the `kausal_common` submodule checked out.

```bash
git clone --recurse-submodules
```

If you already have a pre-existing clone, you can update the submodule with:

```bash
git submodule update --init
```

Navigate to the paths-ui folder. Allow loading environment variables:

```bash
direnv allow
```

#### 2.)

Activate the right node version (you can do all steps from 2 to 5 to make sure that the update does not fail).
The…
