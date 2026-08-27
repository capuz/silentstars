---
repo: "kausaltech/kausal-paths"
name: "kausal-paths"
description: "Kausal Paths to predict how the emissions of cities develop"
readmeQualityOk: true
url: "https://github.com/kausaltech/kausal-paths"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 10
forks: 10
openIssues: 7
closedIssues: 3
watchers: 3
contributors: 16
recentReleases: 0
createdAt: "2021-04-13T13:35:29Z"
lastCommitAt: "2026-08-27T12:56:52Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 85
undervaluedScore: 74
maintainers: ["jtuomist", "nadinefreistetter", "juyrjola"]
openGraphImageUrl: "https://opengraph.githubassets.com/58ac403e9b5abbd3c2aa248c4f5dcd44fac871b628010fed4d459f85a0bdac4e/kausaltech/kausal-paths"
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
After cloning the repository, move to your project root directory (paths folder) and allow loading environment variables:
`direnv allow`

In the project root directory, create and activate a Python virtual environment:

```shell
uv venv
source .venv/bin/activate
```

Install the required…
