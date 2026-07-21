---
repo: "britter/gh-get"
name: "gh-get"
description: "Get GitHub repositories with ease"
readmeQualityOk: true
url: "https://github.com/britter/gh-get"
language: "Go"
languages: ["Go"]
languagePcts: [87]
topics: ["gh-extension"]
stars: 10
forks: 0
openIssues: 5
closedIssues: 10
watchers: 2
contributors: 1
recentReleases: 4
createdAt: "2022-04-07T14:09:29Z"
lastCommitAt: "2026-07-21T06:11:10Z"
lastReleaseAt: "2026-07-20T08:45:27Z"
status: "thriving"
tags: []
healthScore: 87
undervaluedScore: 70
maintainers: ["renovate[bot]", "britter"]
openGraphImageUrl: "https://opengraph.githubassets.com/8cfddf0179a12d7b6ff9a8c073381875c6b23dfd7ccf5c426879132b606882d0/britter/gh-get"
---

# gh-get

gh-get is a [GitHub CLI](https://cli.github.com/) based re-implementation of [ghq](https://github.com/x-motemen/ghq).

## Installing the extension

`gh extension install britter/gh-get`

## Usage

`gh get [--fork] OWNER/REPO`

This will clone the repository identified by OWNER/REPO into `$HOME/github/$OWNER/$REPO`.

Example:

`gh get britter/gh-get` will clone this respository into `~/github/britter/gh-get`

> [!TIP]
> gh-get also accepts full GitHub URLs like `https://github.com/britter/gh-get` as well as URLs pointing to branches, tags, commits, files, pull requests, or issues — anything you can copy from your browser.

### Changing into the cloned directory

gh-get prints the clone destination to stdout, which makes it easy to combine with `cd`:

```sh
cd "$(gh get britter/gh-get)"
```

Since `cd` doesn't work inside a subshell, you may want to add a wrapper function to your shell config that does this automatically:

**bash / zsh**

```sh
get() {
  local dest
  dest="$(gh get "$@")" && cd "$dest"
}
```

**fish**

```fish
function get
  set dest (gh get $argv) && cd $dest
end
```

After adding the function, `get britter/gh-get` will clone the repository and drop you…
