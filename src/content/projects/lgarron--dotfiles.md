---
repo: "lgarron/dotfiles"
name: "dotfiles"
description: ":page_facing_up: My dotfiles and scripts. Also the source for the Homebrew tap `lgarron/lgarron`."
readmeQualityOk: true
url: "https://github.com/lgarron/dotfiles"
language: "TypeScript"
languages: ["TypeScript", "Shell"]
languagePcts: [49, 28]
topics: ["dotfiles", "fish", "homebrew"]
stars: 7
forks: 2
openIssues: 8
closedIssues: 16
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2014-03-29T09:30:01Z"
lastCommitAt: "2026-11-09T04:34:25Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 83
undervaluedScore: 71
maintainers: ["lgarron"]
openGraphImageUrl: "https://opengraph.githubassets.com/e77b445c1e1239b5c96e5fc208f206d0a4981357f42fafbf11812b81d48f0e5b/lgarron/dotfiles"
---

# Lucas Garron's `dotfiles`

My own personal configuration files and scripts for various commandline-based tools and apps. Also serves as the `lgarron/lgarron` [Homebrew](https://brew.sh/) tap.

## Mac

1. Open `Terminal.app`
2. Trigger Xcode commandline tool installation by trying to use `git`

```shell
git
```

3. Check out the dotfiles repo.

```shell
git clone https://github.com/lgarron/dotfiles ~/Code/git/github.com/lgarron/dotfiles
cd ~/Code/git/github.com/lgarron/dotfiles
```

4. Drag & drop `Terminal.app` into the following permissions in System Settings → Privacy & Security:
    - Full Disk Access
    - Media and Apple Music

Reveal `Privacy & Security` and `Terminal.app` like this:

```shell
open /System/Library/PreferencePanes/Security.prefPane
open -R /System/Applications/Utilities/Terminal.app
```

5. Install dotfiles:

```shell
export PATH="$PATH:/opt/homebrew/bin"
make mac-common
```

Note that `make mac-common` is what actually installs Homebrew, but the previous line ensures that Homebrew binaries are on the path for the later setup steps.

See [`./exported/`](https://github.com/lgarron/dotfiles/blob/HEAD/exported/) for files that must be manually…
