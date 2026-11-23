---
repo: "Gelio/dotfiles"
name: "dotfiles"
description: "Personal dotfiles and installation files"
readmeQualityOk: true
url: "https://github.com/Gelio/dotfiles"
language: "Lua"
languages: ["Lua", "Shell"]
languagePcts: [39, 37]
stars: 10
forks: 2
openIssues: 10
closedIssues: 28
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2020-10-03T10:03:51Z"
lastCommitAt: "2026-11-23T10:21:59Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 94
undervaluedScore: 71
maintainers: ["Gelio", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d8055aefa0cc73ae5254e0af700b6db5c1a42cc96ca6bcbe2ea46c26382124c4/Gelio/dotfiles"
---

# Personal dotfiles and configuration files

A list of my personal dotfiles, configuration files, and scripts that install
various applications.

The Ubuntu install scripts and i3 desktop config that lived in `ubuntu/` have
been removed. Commit `6651c717` is the last one that changed them, so
`git ls-tree -r --name-only 6651c717 -- ubuntu/` lists them and
`git restore --source=6651c717 -- ubuntu/` brings them back.
`git log -- ubuntu/` shows their history.

## Universal tools (mise)

CLI tools and their config files are managed by [mise](https://mise.jdx.dev).

```bash
universal/bootstrap.sh            # installs mise, tools and their dotfiles
universal/bootstrap.sh --dry-run  # preview what mise would change
```

`--dry-run` only previews `mise bootstrap`. The script still installs mise if
it's missing, links `~/.config/mise`, writes `config.local.toml` and
`miserc.toml` if they're missing, and installs `jq`. It prints this list when it
starts.

Other arguments go to `mise bootstrap`. Passing `--only` or `--skip` replaces
the default `--only dotfiles,tools`, so `universal/bootstrap.sh --only dotfiles`
links dotfiles without installing tools.
