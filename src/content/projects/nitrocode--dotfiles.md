---
repo: "nitrocode/dotfiles"
name: "dotfiles"
description: "My personal dotfiles, brewfile, and testable vagrant vms"
readmeQualityOk: true
url: "https://github.com/nitrocode/dotfiles"
homepage: "https://0xfeed.gitlab.io"
language: "Shell"
languages: ["Shell"]
languagePcts: [76]
stars: 5
forks: 1
openIssues: 26
closedIssues: 40
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2017-12-06T16:20:41Z"
lastCommitAt: "2026-10-03T22:04:46Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "under_pressure"]
healthScore: 85
undervaluedScore: 59
maintainers: ["nitrocode"]
openGraphImageUrl: "https://opengraph.githubassets.com/f23e98559dbdb61bed01ae42a36630499d237796035ed3343f736924414e4195/nitrocode/dotfiles"
---

# dotfiles

My personal dotfiles when moving between computers

## Layout

Managed with [GNU Stow](https://www.gnu.org/software/stow/). Each directory under `stow/` is a package whose contents mirror its target directory.

| Package | Target | Contents |
|---|---|---|
| `stow/shell` | `~` | `.zshrc`, `.zshenv`, `.gitconfig`, `.vimrc`, `.curlrc`, `.nanorc`, `.gitignore_global`, `.tflint.hcl` |
| `stow/claude` | `$CLAUDE_CONFIG_DIR` (physical path) | generic Claude Code hooks, rules, scripts, prompts, agents, git-hooks |
| `stow/config` | `~/.config` | `mise.toml`, `git/ignore`, `gh-dash/`, `codexbar/`, `rtk/` |

`examples/claude/settings.example.json` shows a sanitized Claude Code `settings.json`. It's a reference, not stowed.

Everything else at the repo root (`common_aliases`, `vscode_settings.json`, `.gitconfig-*.example`, etc.) is reference material and isn't stowed.

## Install

```sh
brew install stow
cd ~/git/personal/github/dotfiles
stow -d stow -t ~ --no-folding shell
stow -d stow -t ~/.config --no-folding config
# ~/.claude may itself be a symlink; target the real directory so relative links resolve
stow -d stow -t "$(realpath "${CLAUDE_CONFIG_DIR:-$HOME/.claude}")"…
