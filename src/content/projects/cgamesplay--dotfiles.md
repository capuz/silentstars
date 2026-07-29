---
repo: "CGamesPlay/dotfiles"
name: "dotfiles"
description: "My dotfiles"
readmeQualityOk: true
url: "https://github.com/CGamesPlay/dotfiles"
language: "TypeScript"
languages: ["TypeScript", "Shell"]
languagePcts: [61, 20]
stars: 15
forks: 3
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2011-12-14T23:48:26Z"
lastCommitAt: "2026-07-29T06:13:38Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 78
undervaluedScore: 60
maintainers: ["CGamesPlay"]
openGraphImageUrl: "https://opengraph.githubassets.com/2a6b9f95b68ca224ab645928f30dab49c5bed126f665e0983fd1a15d4cf386c4/CGamesPlay/dotfiles"
---

# Welcome to my dotfiles

Feel free to use anything here. This repository is designed to be managed with [dfm](https://github.com/CGamesPlay/dfm).

```bash
# Install on a new machine
./bootstrap.sh
# Add a new config file to the repo
dfm add ~/.config/fish/functions/cool.fish
git add files/.config/fish/functions/cool.fish
git commit -m "Added cool function"
argc push
# Update config on other machines
argc pull
dfm link
```

# Details

The main entry point it `bootstrap.sh`, is a short script which runs all of the scripts in `tasks`. The tasks are run in order, and have comments documenting their function. All tasks are designed to be idempotent, so running them multiple times is safe.

The [fish](https://fishshell.com) configuration is probably the most important. It works like this:

- `files/.config/fish/defaults.fish` is run by `tasks/20-fish.sh` to set default universal variables like the color scheme. This file is idempotent.
- `files/.config/fish/conf.d/*` are run each fish startup, in order. Files here are designed to be short and single-purpose.
- `files/.config/fish/functions/*` are autoloaded by fish on demand. These can override installed and built-in commands. These…
