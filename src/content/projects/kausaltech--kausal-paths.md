---
repo: "kausaltech/kausal-paths"
name: "kausal-paths"
description: "Kausal Paths to predict how the emissions of cities develop"
readmeQualityOk: true
url: "https://github.com/kausaltech/kausal-paths"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 10
forks: 10
openIssues: 0
closedIssues: 10
watchers: 3
contributors: 16
recentReleases: 0
createdAt: "2021-04-13T13:35:29Z"
lastCommitAt: "2026-11-24T14:08:10Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 100
undervaluedScore: 84
maintainers: ["jtuomist", "juyrjola", "mechenich"]
openGraphImageUrl: "https://opengraph.githubassets.com/12a04e4e901bac084a5e850ce009d89b95dca96de746f73cbc20ab6bc42e54eb/kausaltech/kausal-paths"
---

# Kausal Paths

Kausal Paths is a tool for predicting the future emissions of cities based on historical emission data and various climate actions. Users can compare how emissions develop in different scenarios. Data is provided using a GraphQL API.

## Installation
### Prerequisites
Make sure you have installed the following:
- a package manager (e.g., homebrew for macOS, apt for Ubuntu, etc.)
- git
- python
- uv (python package manager)
- direnv (auto-loads environment variables)
        - **Beginner Hints**: before direnv works you need to hook it into your shell: depending on which shell you're using (find out with `echo $SHELL`)
        add `eval "$(direnv hook bash)"` to your `~/.bashrc` OR `eval "$(direnv hook zsh)"` to your `~/.zshrc` (create those files if they don't exist yet).
        After that, restart the terminal or run `source ~/.bashrc` OR `source ~/.zshrc`.

### Development
After cloning the repository, initialize the required shared-code submodule:

```shell
git submodule update --init kausal_common
```

The mise configuration shared with Kausal Watch is provided by that submodule through the
symlinks in `mise/`.
